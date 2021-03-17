import { useState, useEffect } from "react";
import Image from "next/image";

function ImagePlaceholder() {
  return (
    <div className="animate-pulse w-full bg-gray-500 h-72 rounded mt-8"></div>
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

  console.log(isImageLoading);

  useEffect(() => {
    if (isFetching) {
      setIsImageLoading(true);
    }
  }, [isFetching]);

  return (
    <div>
      {isImageLoading && <ImagePlaceholder />}
      <div className={`${isImageLoading ? "hidden" : "inline"}`}>
        <img
          layout={layout ? layout : "fill"}
          src={src}
          width={width ? width : null}
          height={height ? height : null}
          onLoad={() => setIsImageLoading(false)}
        />
      </div>
    </div>
  );
}
