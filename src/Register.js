import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    nrcNumber: '',
    photo: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // CEO Note: This is where we send the NRC photo to our Cloud Storage (like Cloudinary or AWS)
    console.log("Submitting to ZIHUB Backend:", formData);
    alert("NRC submitted! Our team will verify your identity within 24 hours.");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white shadow-2xl rounded-xl border-t-4 border-orange-500">
      <h2 className="text-2xl font-bold mb-6 text-center">Join the Hub</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Full Name (As on NRC)</label>
          <input 
            type="text" 
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            placeholder="John Banda"
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            required 
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold mb-1">NRC Number (Format: 000000/00/1)</label>
          <input 
            type="text" 
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            placeholder="123456/78/1"
            onChange={(e) => setFormData({...formData, nrcNumber: e.target.value})}
            required 
          />
        </div>

        <div className="bg-gray-50 p-4 border-2 border-dashed border-gray-300 rounded-lg text-center">
          <label className="block text-sm font-semibold mb-2">Upload NRC Photo</label>
          <input 
            type="file" 
            accept="image/*"
            className="text-sm"
            onChange={(e) => setFormData({...formData, photo: e.target.files[0]})}
            required 
          />
          <p className="text-xs text-gray-500 mt-2">Make sure all details are clearly visible.</p>
        </div>

        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition shadow-md">
          Submit for Verification
        </button>
      </form>
    </div>
  );
};

export default Register;
