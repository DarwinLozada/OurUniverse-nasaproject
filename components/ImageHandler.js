import { useState, useEffect } from "react";

function ImagePlaceholder() {
  return (
    <div className="animate-pulse w-full bg-gray-500 h-72 rounded mt-8 xl:m-0"></div>
  );
}

export default function ImageHandler({
  layout,
  src,
  width,
  height,
  isFetching,
}) {
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    if (isFetching) {
      setIsImageLoading(true);
    }
  }, [isFetching]);

  return (
    <div
      className="xl:w-34rem md:max-h-96 overflow-y-auto"
      style={{ maxHeight: "32rem" }}
    >
      {isImageLoading && <ImagePlaceholder />}
      <div className={`${isImageLoading ? "hidden" : "inline"} w-full`}>
        <img src={src} onLoad={() => setIsImageLoading(false)} className="" />
      </div>
    </div>
  );
}
