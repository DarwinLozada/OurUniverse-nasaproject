import { useState } from "react";
import Image from "next/image";

function ImagePlaceholder() {
  return (
    <div className="animate-pulse w-full bg-gray-500 h-72 rounded mt-8"></div>
  );
}

export default function ImageHandler({ layout, src, width, height }) {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <div>
      {isImageLoading && <ImagePlaceholder />}
      <div className={`${isImageLoading ? "hidden" : "inline"}`}>
        <Image
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