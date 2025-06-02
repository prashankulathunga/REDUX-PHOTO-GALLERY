import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../redux/feature/gallery/GallerySlice";

function Gallery() {
  const { loading, images, error, page } = useSelector(
    (state) => state.gallery
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages(page));
  }, [dispatch, page]);

  if (loading) {
    return (
      <div className="min-h-[50vh] flex flex-col shadow-2xs rounded-xl">
        <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
          <div className="flex justify-center">
            <div
              className="animate-spin inline-block size-6 border-3 border-current border-t-transparent text-blue-600 rounded-full"
              role="status"
              aria-label="loading"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-12 mt-12 px-8">
        {images.map((imageGallery, index) => (
          <div key={index} className="lg:col-span-3 md:col-span-4 col-span-6">
            <img
              className="object-cover h-[30vh] w-full rounded-xl p-1"
              src={imageGallery.download_url}
              alt={`image ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
