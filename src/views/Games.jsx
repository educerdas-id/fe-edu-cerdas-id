import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export const Games = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-white w-full h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="object-cover w-full h-48 rounded-t-xl"
              />
            </figure>
            <div className="card-body h-[200px] hover:h-[250px]">
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

          {/* Card 2 */}
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="object-cover w-full h-48 rounded-t-xl"
              />
            </figure>
            <div className="card-body h-[200px]">
              <h2 className="card-title">Halo</h2>
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

          {/* Card 3 */}
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
