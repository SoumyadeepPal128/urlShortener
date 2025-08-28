import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

function Urls() {
  const documents = useSelector((state) => state.auth.documents);
console.log(documents);

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 min-h-screen relative">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Your Shortened URLs
                    </h1>
                    <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
                        Here is a list of all the links you have created.
                    </p>
                </div>

                {/* Cards Container */}
                <div className="space-y-6">
                    {documents && documents.filter(doc => doc.status === 'active').length > 0 ? (
                        documents.map((document) => (
                            <Card key={document.$id} {...document} />
                        ))
                    ) : (
                        <div className="text-center bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
                            <p className="text-gray-600 dark:text-gray-400">You haven't created any URLs yet.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
  )
}

export default Urls
