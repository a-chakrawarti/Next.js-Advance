import Image from "next/image";

// requires a next js node server running in the backend as it fetches from a next's API endpoint
// lazily loads images: waits until user gets ti image
const ImageCompoennt = () => {
  return (
    <div>
      <h3>Image Component</h3>
      {/* Original image is 2.73MB, render/optimized to 9.99KB */}
      <Image src="/blur-image.png" width={1280} height={720} />
    </div>
  );
};

export default ImageCompoennt;
