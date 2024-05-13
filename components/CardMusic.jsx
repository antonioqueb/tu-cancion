import React from "react";
import Image from 'next/image';

const CardMusic = ({
  iconColor, songTitle, artistName, likeIconColor, 
  volumeControlWidth, playTime, totalTime, timeElapsed, 
  imageUrl
}) => (
  <div
    className="w-full border m-2 border-gray-300 mx-auto pb-8 bg-white shadow-md rounded-lg overflow-hidden "
  >
    <div className="relative h-40 w-full">
      <Image
        src={imageUrl}
        alt={`Cover image of ${songTitle} by ${artistName}`}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="flex justify-between items-center px-4 sm:px-6 py-4">
      <div className="flex items-center">
        <svg
          className={`h-6 w-6 text-${iconColor}`}
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 18V5l12-2v13"></path>
          <circle cx="6" cy="18" r="3"></circle>
          <circle cx="18" cy="16" r="3"></circle>
        </svg>
        <div className="mx-3">
          <h3 className="text-lg font-medium text-gray-700 ">
            {songTitle}
          </h3>
          <p className="text-gray-500 ">{artistName}</p>
        </div>
      </div>
      <div className="flex items-center">
        <svg
          className={`h-6 w-6 text-${likeIconColor}`}
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        </svg>
      </div>
    </div>
    <div className="px-4 sm:px-6 py-4">
      <div className="flex items-center">
        <svg
          className="h-5 w-5 text-gray-500 "
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        </svg>
        <div className="w-full mx-3">
          <div className="relative mt-1 h-1 bg-gray-200 rounded overflow-hidden ">
            <div className="absolute left-0 top-0 h-full bg-pink-500" style={{ width: volumeControlWidth }}></div>
          </div>
        </div>
        <p className="text-sm text-gray-500 ">{playTime}</p>
      </div>
      <div className="flex justify-between text-sm text-gray-500 mt-5 pt-5">
        <span>{timeElapsed}</span><span>{totalTime}</span>
      </div>
    </div>
  </div>
);

export default CardMusic;
