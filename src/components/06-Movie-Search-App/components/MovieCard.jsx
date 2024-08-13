import React from "react";

const MovieCard = ({ movie }) => {
  const { titleText, primaryImage, releaseDate, titleType } = movie;

  // Check if primaryImage exists and has a URL
  const imageUrl = primaryImage
    ? primaryImage.url
    : "/path/to/default/image.jpg"; // Fallback to a default image if primaryImage is null

  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transform transition-transform hover:scale-105 duration-300 ease-in-out">
      <img
        className="w-full h-64 object-cover"
        src={imageUrl}
        alt={titleText.text}
      />
      <div className="p-6">
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">
          {titleText.text}
        </h2>
        <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-600">
          <p className="mb-1 sm:mb-0">
            Release Date:{" "}
            {releaseDate
              ? `${releaseDate.day}-${releaseDate.month}-${releaseDate.year}`
              : "Unknown"}
          </p>
          <p>Type: {titleType.text}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
