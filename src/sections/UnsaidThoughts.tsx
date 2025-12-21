import React, { useState } from 'react';

// 1. Define the shape of our Thought object
interface Thought {
  id: number;
  text: string;
  spotifyLink: string;
  timestamp: string;
}

export default function UnsaidThoughts() {
  const [thoughts, setThoughts] = useState<Thought[]>([]);
  const [inputText, setInputText] = useState('');
  const [inputLink, setInputLink] = useState('');

  // 2. Function to handle the form submission
  const handleAddThought = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newThought: Thought = {
      id: Date.now(),
      text: inputText,
      spotifyLink: inputLink,
      timestamp: new Date().toLocaleDateString(),
    };

    setThoughts([newThought, ...thoughts]);
    setInputText('');
    setInputLink('');
  };

  // 3. Helper function to convert a normal Spotify link to an Embed URL
  const getSpotifyEmbedUrl = (url: string) => {
    try {
      // Example input: https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT?si=...
      // We need to extract the ID: 4cOdK2wGLETKBW3PvgPWqT
      const urlObj = new URL(url);
      const pathSegments = urlObj.pathname.split('/');
      // The ID is usually the last segment, or the one after 'track'
      const type = pathSegments[1]; // 'track', 'album', or 'playlist'
      const id = pathSegments[2];
      
      if (type && id) {
        return `https://open.spotify.com/embed/${type}/${id}`;
      }
      return null;
    } catch (error) {
      return null;
    }
  };

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">Unsaid Thoughts</h1>
          <p className="text-gray-500">Vent your feelings and attach a song that matches the vibe.</p>
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-12">
          <form onSubmit={handleAddThought} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Thought</label>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="What's on your mind that you can't say out loud?"
                className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:border-transparent outline-none transition h-24 resize-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Spotify Link (Song, Album, or Playlist)</label>
              <input
                type="text"
                value={inputLink}
                onChange={(e) => setInputLink(e.target.value)}
                placeholder="https://open.spotify.com/track/..."
                className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:border-transparent outline-none transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition-colors duration-200 cursor-pointer shadow-lg shadow-indigo-200"
            >
              Release Thought
            </button>
          </form>
        </div>

        {/* Grid Display Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {thoughts.map((thought) => {
            const embedUrl = getSpotifyEmbedUrl(thought.spotifyLink);

            return (
              <div key={thought.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
                {/* The Music Player */}
                {embedUrl ? (
                  <div className="w-full h-80px bg-gray-100">
                    <iframe
                      style={{ borderRadius: '0px' }}
                      src={embedUrl}
                      width="100%"
                      height="80"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  // Fallback if no music link provided
                  <div className="h-2 bg-linear-to-r from-blue-400 to-purple-400"></div>
                )}

                {/* The Text Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <p className="text-gray-800 leading-relaxed font-light text-lg mb-4 whitespace-pre-wrap">
                    "{thought.text}"
                  </p>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                    {thought.timestamp}
                  </div>
                </div>
              </div>
            );
          })}
          
          {thoughts.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-400">
              No thoughts shared yet. Be the first.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}