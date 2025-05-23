import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export const Games = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-white w-full h-full pt-8 pb-20 flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-biru1 w-[300px] first-letter:shadow-sm rounded-md group">
            <figure>
              <img
                src="https://res.cloudinary.com/dncuggzvl/image/upload/v1747887426/1_hwcnkj.svg"
                alt="Shoes"
                className="object-cover w-full h-56 rounded-md transition-all duration-300 ease-in-out"
              />
            </figure>
            <div className="flex flex-col h-auto group-hover:h-[130px] transition-all duration-100 ease-in-out">
              <h2 className="font-montserrat text-xl font-semibold text-black pt-2 pl-2">
                MONSTER PERKALIAN
              </h2>
              <div className="flex items-start space-x-3 pr-2 pl-2">
                <p className="text-xs text-gray-600 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 ease-in-out">
                  A card component has a figure, a body part, and inside the
                  body there are title and actions parts. When you hover over
                  this card, the description will expand.
                </p>
                <Link to="*">
                  <button className="hover:bg-[#F3F3F3] text-white px-5 text-[12px] py-1 rounded-2xl bg-blue-500 group-hover:mt-14 hover:text-black transition-all duration-300">
                    Start
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-biru1 w-[300px] first-letter:shadow-sm rounded-md group">
            <figure>
              <img
                src="https://res.cloudinary.com/dncuggzvl/image/upload/v1747887426/1_hwcnkj.svg"
                alt="Shoes"
                className="object-cover w-full h-56 rounded-md transition-all duration-300 ease-in-out"
              />
            </figure>
            <div className="flex flex-col h-[80px] group-hover:h-[130px] transition-all duration-100 ease-in-out">
              <h2 className="font-montserrat text-xl font-semibold text-black pt-2 pl-2">
                MONSTER PERKALIAN
              </h2>
              <div className="flex items-start space-x-3 pr-2 pl-2">
                <p className="text-xs text-gray-600 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 ease-in-out">
                  A card component has a figure, a body part, and inside the
                  body there are title and actions parts. When you hover over
                  this card, the description will expand.
                </p>
                <Link to="/login">
                  <button className="hover:bg-[#F3F3F3] text-white px-4 py-1 rounded-2xl bg-blue-500 group-hover:mt-8 hover:text-black transition-all duration-300">
                    Start
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-biru1 w-[300px] first-letter:shadow-sm rounded-md group">
            <figure>
              <img
                src="https://res.cloudinary.com/dncuggzvl/image/upload/v1747887426/1_hwcnkj.svg"
                alt="Shoes"
                className="object-cover w-full h-56 rounded-md transition-all duration-300 ease-in-out"
              />
            </figure>
            <div className="flex flex-col h-auto group-hover:h-[130px] transition-all duration-100 ease-in-out">
              <h2 className="font-montserrat text-xl font-semibold text-black pt-2 pl-2">
                MONSTER PERKALIAN
              </h2>
              <div className="flex items-start space-x-3 pr-2 pl-2">
                <p className="text-xs text-gray-600 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 ease-in-out">
                  A card component has a figure, a body part, and inside the
                  body there are title and actions parts. When you hover over
                  this card, the description will expand.
                </p>
                <Link to="/login">
                  <button className="hover:bg-[#F3F3F3] text-white px-4 py-1 rounded-2xl bg-blue-500 group-hover:mt-8 hover:text-black transition-all duration-300">
                    Start
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="object-cover w-full h-48 rounded-t-xl"
              />
            </figure>
            <div className="card-body h-[200px]">
              <h2 className="card-title">Card Title</h2>
              <p className="text-sm text-gray-600 line-clamp-2 hover:line-clamp-none transition-all duration-300 ease-in-out">
                A card component has a figure, a body part, and inside the body
                there are title and actions parts. When you hover over this
                card, the description will expand.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="object-cover w-full h-48 rounded-t-xl"
              />
            </figure>
            <div className="card-body h-[200px]">
              <h2 className="card-title">Card Title</h2>
              <p className="text-sm text-gray-600 line-clamp-2 hover:line-clamp-none transition-all duration-300 ease-in-out">
                A card component has a figure, a body part, and inside the body
                there are title and actions parts. When you hover over this
                card, the description will expand.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="object-cover w-full h-48 rounded-t-xl"
              />
            </figure>
            <div className="card-body h-[200px]">
              <h2 className="card-title">Card Title</h2>
              <p className="text-sm text-gray-600 line-clamp-2 hover:line-clamp-none transition-all duration-300 ease-in-out">
                A card component has a figure, a body part, and inside the body
                there are title and actions parts. When you hover over this
                card, the description will expand.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
