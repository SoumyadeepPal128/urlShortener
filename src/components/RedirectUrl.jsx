import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import appwriteService from "../appwrite/config";

function RedirectUrl() {
  const { code } = useParams();

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const res = await appwriteService.getUrl(code);
        if (res && res.documents.length > 0) {
          let destination = res.documents[0].url;

          // If testing locally and destination is relative, prepend local dev URL
          if (!destination.startsWith('http')) {
            destination = `${window.location.origin}${destination}`;
          }

          // Redirect
          window.location.href = destination;
        } else {
          console.log("No URL found for this code");
        }
      } catch (err) {
        console.log("Redirect error:", err.message);
      }
    };

    fetchUrl();
  }, [code]);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <svg className="animate-spin h-12 w-12 text-blue-600 dark:text-blue-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <p className="text-xl font-semibold">Redirecting...</p>
      <p className="text-gray-600 dark:text-gray-400 mt-2">Please wait a moment.</p>
    </div>
  );
}

export default RedirectUrl;
