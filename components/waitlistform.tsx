'use client'

import React, { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const GOOGLE_SHEET_API_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_API_URL ;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages
    setIsSuccess(false); // Reset success state
    setIsSubmitting(true);

    if (!GOOGLE_SHEET_API_URL) {
      setMessage('Configuration error: API URL not set.');
      setIsSubmitting(false);
      return;
    }

    // Create FormData to send data to Google Apps Script
    const formData = new FormData();
    formData.append('email', email);

    try {
      const response = await fetch(GOOGLE_SHEET_API_URL, {
        method: 'POST',
        body: formData, // Send as FormData
        // No 'Content-Type' header needed for FormData, fetch sets it automatically
      });

      const data = await response.json();

      if (data.result === 'success') {
        setMessage('Thanks for joining! We\'ll keep you updated.');
        setIsSuccess(true);
        setEmail(''); // Clear the input field on success
      } else {
        setMessage(`Error: ${data.message || 'Something went wrong.'}`);
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage('Network error. Please check your connection and try again.');
      console.error('Waitlist submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (

        <fieldset id='fset' className=' border-[#cabe9a] border-2 w-full md:w-[50%] lg:w-[80] sm:w-[10%] mx-auto my-10 p-4 rounded-md shadow-lg'>
 <legend className=''>
                <span className="text-2xl font-semibold text-gray-900 dark:text-white">Stay Updated!</span>
            </legend>
    <div className=" mx-auto p-6 bg-white dark:bg-black rounded-lg shadow-md">
           
     
      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">Join Our Waitlist</h4>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-6">Be the first to know when we launch!</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-none focus:outline-none focus:ring-2 focus:ring-[#cabe9a] dark:bg-zinc-700 dark:text-white"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="doubleShadow w-full px-4 py-2 bg-[#cabe9a] text-white font-semibold rounded-none hover:bg-[#e6cd84] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Joining...' : 'Join Now'}
        </button>
        {message && (
          <p className={`text-center text-sm mt-2 ${message.includes('Thanks') ? 'text-green-600' : 'text-red-600'}`}>
            {message} {/* Use isSuccess to dynamically apply color */}
          </p>
        )}
      </form>
    </div>
   </fieldset>

  );
}