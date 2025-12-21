import React, { useState } from 'react';
import { Calendar, Lock, Send } from 'lucide-react'; // Assuming lucide-react for icons

const TimeCapsuleCreator = () => {
  const [message, setMessage] = useState('');
  const [unlockDate, setUnlockDate] = useState('');

  const handleSealCapsule = () => {
    // Logic to send data to backend goes here
    console.log("Sealing capsule:", { message, unlockDate });
    alert("Capsule Sealed! See you in the future.");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-xl border border-gray-100">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Time Capsule</h2>
        <p className="text-gray-500 text-sm">Send a message to the future you.</p>
      </div>

      {/* Message Input */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Your Message</label>
        <textarea
          className="w-full p-4 h-40 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all resize-none"
          placeholder="Dear future me, remember that..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      {/* Date Picker */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Unlock Date</label>
        <div className="relative">
          <input
            type="datetime-local"
            className="w-full p-3 pl-10 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none"
            onChange={(e) => setUnlockDate(e.target.value)}
          />
          <Calendar className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={handleSealCapsule}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-indigo-200 cursor-pointer"
      >
        <Lock className="w-5 h-5" />
        <span>Seal Time Capsule</span>
      </button>
    </div>
  );
};

export default TimeCapsuleCreator;