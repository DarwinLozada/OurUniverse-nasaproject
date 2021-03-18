import { useState, useEffect } from "react";

function MediaPlaceholder() {
  return (
    <div className="animate-pulse w-full bg-gray-500 h-72 rounded mt-8 xl:m-0"></div>
  );
}

export default function ImageHandler({ src, mediaType, isFetching }) {
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    if (isFetching) {
      setIsImageLoading(true);
    }
  }, [isFetching]);

  return (
    <div className="xl:w-34rem overflow-y-auto" style={{ maxHeight: "40rem" }}>
      {isImageLoading && <MediaPlaceholder />}
      <div className={`${isImageLoading ? "hidden" : "inline"} w-full`}>
        {mediaType === "image" ? (
          <img src={src} onLoad={() => setIsImageLoading(false)} className="" />
        ) : (
          <iframe
            src={src}
            className="w-full h-96 xl:w-34rem"
            onLoad={() => setIsImageLoading(false)}
          />
        )}
      </div>
    </div>
  );
}
