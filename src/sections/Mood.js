import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const apiKey = "AIzaSyDS6yjcTF8GBgD4aJpZGYugosWiVxPuJAw";
const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
const systemPrompt = `You are Bestie AI, a friendly and supportive AI. 
Your job is to give short, comforting, and encouraging advice.
Keep your response to a single, short paragraph (2-3 sentences).
Do not use markdown. Be very gentle and positive.`;
function Mood() {
    const [advice, setAdvice] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const getAiAdvice = async (userPrompt) => {
        setIsLoading(true);
        setError(null);
        setAdvice('');
        try {
            const payload = {
                contents: [{ parts: [{ text: userPrompt }] }],
                systemInstruction: {
                    parts: [{ text: systemPrompt }]
                },
            };
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                throw new Error(`API Error: ${response.status} ${response.statusText}`);
            }
            const result = await response.json();
            const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
            if (!text) {
                throw new Error("Couldn't get a valid response from the AI.");
            }
            setAdvice(text);
        }
        catch (err) {
            console.error("Error fetching AI advice:", err);
            setError("Oh no! Bestie AI is a bit tired. Please try again in a moment.");
        }
        finally {
            setIsLoading(false);
        }
    };
    const handleMoodClick = (mood) => {
        let prompt;
        switch (mood) {
            case 'happy':
                prompt = "I'm feeling really happy and joyful today! What's some advice to keep this feeling going?";
                break;
            case 'smile':
                prompt = "I'm feeling pretty good, just smiling. What's some nice, simple advice for a good day?";
                break;
            case 'neutral':
                prompt = "I'm not happy or sad, just 'meh' and neutral. What's some advice for a neutral day?";
                break;
            case 'frown':
                prompt = "I'm feeling a bit down and frowning. I'm not super sad, just... annoyed. What's some advice?";
                break;
            case 'sad':
                prompt = "I'm feeling very sad and down right now. I could really use some gentle, comforting advice.";
                break;
            default:
                prompt = "Please give me some general, positive advice for the day.";
        }
        getAiAdvice(prompt);
    };
    return (_jsxs("div", { className: "flex flex-col justify-center items-center p-4", children: [_jsx("h1", { className: "text-4xl font-medium flex justify-center text-center", children: "Rate how you are feeling today" }), _jsx("p", { className: "mt-2 text-lg px-10 text-center", children: "Bestie AI will cheer you up and give you advice based on your chosen mood." }), _jsxs("div", { className: "flex justify-center space-x-8 sm:space-x-8 p-2 mt-6 border bg-amber-200 rounded-lg w-full max-w-md", children: [_jsx("button", { onClick: () => handleMoodClick('happy'), className: "text-4xl w-12 h-12 flex items-center justify-center hover:bg-green-100 rounded-full cursor-pointer transform transition-all ease-in-out duration-300 hover:-translate-y-1", children: _jsx("span", { children: "\uD83D\uDE02" }) }), _jsx("button", { onClick: () => handleMoodClick('smile'), className: "text-4xl w-12 h-12 flex items-center justify-center hover:bg-green-100 rounded-full cursor-pointer transform transition-all ease-in-out duration-300 hover:-translate-y-1", children: _jsx("span", { children: "\uD83D\uDE0A" }) }), _jsx("button", { onClick: () => handleMoodClick('neutral'), className: "text-4xl w-12 h-12 flex items-center justify-center hover:bg-yellow-100 rounded-full cursor-pointer transform transition-all ease-in-out duration-300 hover:-translate-y-1", children: _jsx("span", { children: "\uD83D\uDE10" }) }), _jsx("button", { onClick: () => handleMoodClick('frown'), className: "text-4xl w-12 h-12 flex items-center justify-center hover:bg-red-100 rounded-full cursor-pointer transform transition-all ease-in-out duration-300 hover:-translate-y-1", children: _jsx("span", { children: "\uD83D\uDE15" }) }), _jsx("button", { onClick: () => handleMoodClick('sad'), className: "text-4xl w-12 h-12 flex items-center justify-center hover:bg-red-100 rounded-full cursor-pointer transform transition-all ease-in-out duration-300 hover:-translate-y-1", children: _jsx("span", { children: "\uD83D\uDE22" }) })] }), _jsxs("div", { className: "mt-8 w-full max-w-md min-h-[150px] flex justify-center items-center", children: [isLoading && (_jsxs("div", { className: "flex flex-col items-center text-blue-700", children: [_jsx("div", { className: "w-8 h-8 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin" }), _jsx("p", { className: "mt-3", children: "Bestie AI is thinking..." })] })), error && !isLoading && (_jsxs("div", { className: "p-4 bg-red-50 border border-red-200 rounded-lg text-center w-full animate-fadeIn", children: [_jsx("h3", { className: "font-semibold text-red-800", children: "Oh no!" }), _jsx("p", { className: "mt-1 text-red-700", children: error })] })), advice && !isLoading && !error && (_jsxs("div", { className: "relative p-6 bg-blue-50 border border-blue-200 rounded-lg w-full animate-fadeIn", children: [_jsx("button", { onClick: () => setAdvice(''), className: "absolute top-2 right-3 text-blue-400 hover:text-blue-700 text-2xl font-bold cursor-pointer", "aria-label": "Close advice", children: "\u00D7" }), _jsx("h3", { className: "text-lg font-semibold text-blue-800", children: "Bestie AI says:" }), _jsx("p", { className: "mt-2 text-md text-blue-700", children: advice })] })), ";"] }), _jsx("style", { children: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      ` })] }));
}
export default Mood;
