import Image from "next/image";

// custom loader

const loader = ({ src, width, quality }) => {
  console.log(src, width, quality);

  return `http://my-custom-service.com/?url=${src}`;
};

// requires a next js node server running in the backend as it fetches from a next's API endpoint
// lazily loads images: waits until user gets ti image
const ImageCompoennt = () => {
  return (
    <div>
      <h3>Image Component</h3>
      {/* Original image is 2.73MB, render/optimized to 9.99KB */}
      <Image src="/blur-image.png" width={1280} height={720} />
      <Image loader={loader} src="/blur-image.png" width={1280} height={720} />
      <Image
        src="https://wallup.net/wp-content/uploads/2017/11/23/533023-Lamborghini-car-car_show-photography-black_cars-luxury_cars-748x421.jpg"
        width={1280}
        height={720}
      />
    </div>
  );
};

export default ImageCompoennt;
