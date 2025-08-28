import React from "react";
import { Button } from "./index";
import conf from "../conf/conf";
function Card({ $id, status, clicks, url, code }) {
  return status == "active" ? (
    <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md p-5 flex items-center justify-between space-x-4">
      {/* URL and Short Link Section */}
      <div className="flex-1 min-w-0">
        {/* Original URL */}
        <p
          className="text-sm text-gray-500 dark:text-gray-400 truncate"
          title={url}
        >
          {url}
        </p>
        {/* Shortened URL */}
        <a
          href={`${conf.deploymentdomain}/${code}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mt-1">
            {`${conf.deploymentdomain}/${code}`}
          </p>
        </a>
      </div>

      {/* Copy Button */}
      <div className="flex-shrink-0">
        <Button
          onClick={() => {
            navigator.clipboard.writeText(`${conf.deploymentdomain}/${code}`);
          }}
        >
          Copy
        </Button>
      </div>
    </div>
  ) : null;
}

export default Card;
