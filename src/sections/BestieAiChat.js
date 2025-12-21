import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
// --- System Prompt ---
const SYSTEM_INSTRUCTION = `
    You are 'Bestie,' a warm, empathetic, and supportive mental health companion. 
    Your role is to be a listening ear, like a caring best friend and a compassionate therapist combined. 
    Your personality is:
    - Warm, friendly, and informal. Use a casual tone ("bestie").
    - Deeply empathetic, patient, and non-judgmental ("therapist").
    - Curious and a great listener.

    Your goals are to:
    1.  **Validate Feelings:** Always validate the user's feelings first. (e.g., "That sounds so tough," "It makes perfect sense that you feel that way.").
    2.  **Encourage Exploration:** Ask gentle, open-ended questions to help the user explore their feelings and thoughts. (e.g., "Can you tell me more about that feeling?", "What was going through your mind when that happened?").
    3.  **Offer Comfort & Support:** Be a source of comfort. (e.g., "I'm here for you," "Sending you a big virtual hug.").
    4.  **Promote Positive Reframing:** Gently help the user find new perspectives or acknowledge their own strength, but only after validating them. (e.g., "It's amazing how you're handling this, even when it's so hard.").
    5.  **Be Conversational:** Don't just list things. Talk to the user like a real person. Keep responses concise and easy to read.
    `;
// --- The React Component ---
function BestieAiChat() {
    // State for the chat history (what's sent to the API)
    // We use the <ChatMessage[]> generic to tell useState it's an array of ChatMessage objects.
    const [chatHistory, setChatHistory] = useState([
        {
            role: "system",
            parts: [{ text: SYSTEM_INSTRUCTION }]
        },
        {
            role: "model",
            parts: [{ text: "Hii Bestie ko! I'm so glad you're here. How are you feeling today? Feel free to share whatever's on your mind. Andito ako para sayo <3" }]
        }
    ]);
    // State for the user's current input
    const [userInput, setUserInput] = useState('');
    // State for loading indicator
    const [isLoading, setIsLoading] = useState(false);
    // Ref for the chat log container to scroll to bottom
    // We tell useRef it will be a <div> element, or null initially.
    // This fixes the 'scrollTop' and 'scrollHeight' 'never' errors.
    const chatLogRef = useRef(null);
    // Scroll to bottom whenever chatHistory changes
    useEffect(() => {
        // The 'if' block now correctly narrows the type from 'HTMLDivElement | null' to 'HTMLDivElement'.
        if (chatLogRef.current) {
            chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
        }
    }, [chatHistory]);
    /**
     * Handles the form submission
     */
    // We type the event 'e' as a React FormEvent.
    // This fixes the "'e' implicitly has an 'any' type" error.
    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = userInput.trim();
        if (!message)
            return;
        // Add user message to state
        const newUserMessage = {
            role: "user",
            parts: [{ text: message }]
        };
        const updatedChatHistory = [...chatHistory, newUserMessage];
        setChatHistory(updatedChatHistory);
        setUserInput('');
        setIsLoading(true);
        // Call the API
        await callGeminiApi(updatedChatHistory);
    };
    /**
     * Calls the Gemini API with the current chat history.
     */
    // We type the 'history' parameter as an array of ChatMessage objects.
    // This fixes the "'history' implicitly has an 'any' type" error.
    const callGeminiApi = async (history) => {
        const apiKey = "AIzaSyDS6yjcTF8GBgD4aJpZGYugosWiVxPuJAw";
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
        const payload = {
            contents: history.slice(1),
            systemInstruction: history[0],
        };
        let botResponse = "";
        let attempt = 0;
        const maxAttempts = 5;
        while (attempt < maxAttempts) {
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                if (!response.ok) {
                    const errorBody = await response.json();
                    throw new Error(`API Error: ${response.statusText} - ${errorBody.error?.message || 'Unknown error'}`);
                }
                const result = await response.json();
                if (result.candidates && result.candidates[0].content && result.candidates[0].content.parts[0].text) {
                    botResponse = result.candidates[0].content.parts[0].text;
                    setChatHistory(prevHistory => [
                        ...prevHistory,
                        { role: "model", parts: [{ text: botResponse }] }
                    ]);
                    break;
                }
                else {
                    console.warn("Unexpected API response structure:", result);
                    if (!result.candidates || result.candidates[0].finishReason === "SAFETY") {
                        botResponse = "I'm sorry, I can't respond to that. Let's talk about something else.";
                    }
                    else {
                        botResponse = "I'm sorry, I had trouble formulating a response. Could you try rephrasing?";
                    }
                    setChatHistory(prevHistory => [
                        ...prevHistory,
                        { role: "model", parts: [{ text: botResponse }] }
                    ]);
                    break;
                }
            }
            catch (error) {
                console.error('Error calling Gemini API:', error);
                attempt++;
                if (attempt >= maxAttempts) {
                    botResponse = "I'm having some trouble connecting right now. Please try again in a moment.";
                    setChatHistory(prevHistory => [
                        ...prevHistory,
                        { role: "model", parts: [{ text: botResponse }] }
                    ]);
                }
                else {
                    const delay = Math.pow(2, attempt) * 1000;
                    await new Promise(resolve => setTimeout(resolve, delay));
                }
            }
        }
        setIsLoading(false);
    };
    /**
     * Formats the message text, replacing newlines with <br> tags.
     */
    // We type the 'message' parameter as a string.
    // This fixes the "'message' implicitly has an 'any' type" error.
    const formatMessage = (message) => {
        return message.replace(/\n/g, '<br />');
    };
    return (
    // Added font-sans and bg-slate-100 to a container div for preview
    _jsx("div", { className: "font-sans h-full w-full flex items-center justify-center p-4", children: _jsxs("div", { className: "bg-white w-full md:w-full max-w-2xl h-[83vh] md:h-[80vh] rounded-lg shadow-2xl flex flex-col", children: [_jsx("header", { className: "bg-indigo-600 text-white p-4 rounded-t-lg flex items-center shadow-md shrink-0", children: _jsx("h1", { className: "text-xl font-semibold", children: "Bestie AI" }) }), _jsx("div", { ref: chatLogRef, className: "flex-1 p-4 overflow-y-auto space-y-4", children: chatHistory.filter(msg => msg.role !== 'system').map((message, index) => (_jsx("div", { className: `flex ${message.role === 'user' ? 'justify-end' : ''}`, children: _jsx("div", { className: `p-3 rounded-lg shadow max-w-xs sm:max-w-md ${message.role === 'user'
                                ? 'bg-indigo-600 text-white'
                                : 'bg-slate-200 text-slate-800'}`, children: _jsx("p", { dangerouslySetInnerHTML: { __html: formatMessage(message.parts[0].text) } }) }) }, index))) }), isLoading && (_jsx("div", { className: "p-4 shrink-0", children: _jsx("div", { className: "flex items-center", children: _jsxs("div", { className: "bg-slate-200 p-3 rounded-lg flex items-center shadow", children: [_jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-slate-700" }), _jsx("p", { className: "ml-2 text-slate-700 text-sm", children: "Thinking..." })] }) }) })), _jsxs("form", { onSubmit: handleSubmit, className: "p-4 rounded-b-lg flex items-center shrink-0", children: [_jsx("input", { type: "text", value: userInput, onChange: (e) => setUserInput(e.target.value), placeholder: "Type your message...", autoComplete: "off", disabled: isLoading, className: "flex-1 p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition disabled:opacity-50" }), _jsx("button", { type: "submit", disabled: isLoading, className: "ml-3 bg-indigo-600 text-white p-3 rounded-lg shadow hover:bg-indigo-700 transition active:scale-95 disabled:opacity-50 cursor-pointer", children: _jsx("svg", { className: "w-6 h-6 cursor-pointer", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" }) }) })] })] }) }));
}
export default BestieAiChat;
