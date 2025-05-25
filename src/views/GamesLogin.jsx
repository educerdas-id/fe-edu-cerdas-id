import React from "react";
import { Link } from "react-router-dom";
import NavbarLogin from "../components/NavbarLogin";

export const GamesLogin = () => {
  return (
    <div className="bg-white h-screen">
      <NavbarLogin />
      <div className="bg-white">
        <h1 className="font-montserrat text-[30px] lg:text-[40px] pb-6 md:pb-0 pt-8 text-black pl-10 lg:pl-56 select-none pointer-events-none">
          Games
        </h1>
      </div>

      <div className="bg-white  pt-4 pb-20 flex items-center justify-center rounded-md pl-3 pr-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-16 ">
          {/* Card 1 */}
          <div className="bg-biru1 w-[150px] lg:w-[260px] first-letter:shadow-sm rounded-md group ml-6 lg:ml-0 mr-6 lg:mr-0">
            <figure>
              <img
                src="https://res.cloudinary.com/dncuggzvl/image/upload/v1747887426/1_hwcnkj.svg"
                alt="educerdas.id"
                className="object-cover w-full h-30 lg:h-48 first-letter:ounded-md transition-all rounded-md duration-300 ease-in-out select-none pointer-events-none"
              />
            </figure>
            <div className="flex flex-col h-[60px] group-hover:h-[120px] lg:h-[80px] lg:group-hover:h-[130px] transition-all duration-100 ease-in-out">
              <h2 className="font-montserrat select-none  text-xs lg:text-xl font-semibold text-black pt-2 pl-2">
                MONSTER PERKALIAN
              </h2>
              <div className=" flex items-start  pr-2 pl-2">
                <p className="text-[8px] lg:text-xs text-gray-600 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 ease-in-out select-none">
                  merupakan sebuah game yang mengharuskan untuk menjawab soal
                  yang diberikan dengan benar untuk mengalahkan sang monster.
                </p>
                <Link to="/u/*">
                  <button className="hover:bg-[#F3F3F3] text-white px-3  md:px-5 text-[10px] md:text-[12px] sm:py-0.5 md:py-1 rounded-2xl bg-blue-500 group-hover:mt-[70px] md:group-hover:mt-14  hover:text-black transition-all duration-300">
                    Start
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-biru1 w-[150px] lg:w-[260px] first-letter:shadow-sm rounded-md group ml-6 lg:ml-0">
            <figure>
              <img
                src="https://res.cloudinary.com/dncuggzvl/image/upload/v1748017435/2_k2mps2.svg"
                alt="educerdas.id"
                className="object-cover w-full h-30 lg:h-48 first-letter:ounded-md transition-all rounded-md duration-300 ease-in-out select-none pointer-events-none"
              />
            </figure>
            <div className="flex flex-col h-[60px] group-hover:h-[120px] lg:h-[80px] lg:group-hover:h-[130px] transition-all duration-100 ease-in-out">
              <h2 className="font-montserrat select-none  text-xs lg:text-xl font-semibold text-black pt-2 pl-2">
                ULAR PENJUMLAH
              </h2>
              <div className="flex items-start space-x-3 pr-2 pl-2">
                <p className="text-[8px] lg:text-xs text-gray-600 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 ease-in-out select-none">
                  A card component has a figure, a body part, and inside the
                  body there are title and actions parts. When you hover over
                  this card, the description will expand.
                </p>
                <Link to="/u/*">
                  <button className="hover:bg-[#F3F3F3] text-white px-3  md:px-5 text-[10px] md:text-[12px] sm:py-0.5 md:py-1 rounded-2xl bg-blue-500 group-hover:mt-[70px] md:group-hover:mt-14  hover:text-black transition-all duration-300">
                    Start
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-biru1 w-[150px] lg:w-[260px] first-letter:shadow-sm rounded-md group ml-6 lg:ml-0">
            <figure>
              <img
                src="https://res.cloudinary.com/dncuggzvl/image/upload/v1748017435/3_sauocl.svg"
                alt="educerdas.id"
                className="object-cover w-full h-30 lg:h-48 first-letter:ounded-md transition-all rounded-md duration-300 ease-in-out select-none pointer-events-none"
              />
            </figure>
            <div className="flex flex-col h-[60px] group-hover:h-[120px] lg:h-[80px] lg:group-hover:h-[130px] transition-all duration-100 ease-in-out">
              <h2 className="font-montserrat select-none  text-xs lg:text-xl font-semibold text-black pt-2 pl-2">
                SHOOTER MATH
              </h2>
              <div className="flex items-start space-x-3 pr-2 pl-2">
                <p className="text-[8px] lg:text-xs text-gray-600 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 ease-in-out select-none">
                  A card component has a figure, a body part, and inside the
                  body there are title and actions parts. When you hover over
                  this card, the description will expand.
                </p>
                <Link to="/u/*">
                  <button className="hover:bg-[#F3F3F3] text-white px-3  md:px-5 text-[10px] md:text-[12px] sm:py-0.5 md:py-1 rounded-2xl bg-blue-500 group-hover:mt-[70px] md:group-hover:mt-14  hover:text-black transition-all duration-300">
                    Start
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-biru1 w-[150px] lg:w-[260px] first-letter:shadow-sm rounded-md group ml-6 lg:ml-0">
            <figure>
              <img
                src="https://res.cloudinary.com/dncuggzvl/image/upload/v1748017435/3_sauocl.svg"
                alt="educerdas.id"
                className="object-cover w-full h-30 lg:h-48 first-letter:ounded-md transition-all rounded-md duration-300 ease-in-out select-none pointer-events-none"
              />
            </figure>
            <div className="flex flex-col h-[60px] group-hover:h-[120px] lg:h-[80px] lg:group-hover:h-[130px] transition-all duration-100 ease-in-out">
              <h2 className="font-montserrat select-none  text-xs lg:text-xl font-semibold text-black pt-2 pl-2">
                CROSS IPA
              </h2>
              <div className="flex items-start space-x-3 pr-2 pl-2">
                <p className="text-[8px] lg:text-xs text-gray-600 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 ease-in-out select-none">
                  A card component has a figure, a body part, and inside the
                  body there are title and actions parts. When you hover over
                  this card, the description will expand.
                </p>
                <Link to="/u/*">
                  <button className="hover:bg-[#F3F3F3] text-white px-3  md:px-5 text-[10px] md:text-[12px] sm:py-0.5 md:py-1 rounded-2xl bg-blue-500 group-hover:mt-[70px] md:group-hover:mt-14  hover:text-black transition-all duration-300">
                    Start
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Capx-3 py-0.5 lg:rd 5 */}
          <div className="bg-biru1 w-[150px] lg:w-[260px] first-letter:shadow-sm rounded-md group ml-6 lg:ml-0">
            <figure>
              <img
                src="https://res.cloudinary.com/dncuggzvl/image/upload/v1748017435/5_mfm02s.svg"
                alt="educerdas.id"
                className="object-cover w-full h-30 lg:h-48 first-letter:ounded-md transition-all rounded-md duration-300 ease-in-out select-none pointer-events-none"
              />
            </figure>
            <div className="flex flex-col h-[60px] group-hover:h-[120px] lg:h-[80px] lg:group-hover:h-[130px] transition-all duration-100 ease-in-out">
              <h2 className="font-montserrat select-none  text-xs lg:text-xl font-semibold text-black pt-2 pl-2">
                YES OR NO
              </h2>
              <div className="flex items-start space-x-3 pr-2 pl-2">
                <p className="text-[8px] lg:text-xs text-gray-600 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 ease-in-out select-none">
                  A card component has a figure, a body part, and inside the
                  body there are title and actions parts. When you hover over
                  this card, the description will expand.
                </p>
                <Link to="/u/*">
                  <button className="hover:bg-[#F3F3F3] text-white px-3  md:px-5 text-[10px] md:text-[12px] sm:py-0.5 md:py-1 rounded-2xl bg-blue-500 group-hover:mt-[70px] md:group-hover:mt-14  hover:text-black transition-all duration-300">
                    Start
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-biru1 w-[150px] lg:w-[260px] first-letter:shadow-sm rounded-md group ml-6 lg:ml-0">
            <figure>
              <img
                src="https://res.cloudinary.com/dncuggzvl/image/upload/v1748017437/6_eaogoq.svg"
                alt="educerdas.id"
                className="object-cover w-full h-30 lg:h-48 first-letter:ounded-md transition-all rounded-md duration-300 ease-in-out select-none pointer-events-none"
              />
            </figure>
            <div className="flex flex-col h-[60px] group-hover:h-[120px] lg:h-[80px] lg:group-hover:h-[130px] transition-all duration-100 ease-in-out">
              <h2 className="font-montserrat select-none  text-xs lg:text-xl font-semibold text-black pt-2 pl-2">
                LET'S HOLIDAY
              </h2>
              <div className="flex items-start space-x-3 pr-2 pl-2">
                <p className="text-[8px] lg:text-xs text-gray-600 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 ease-in-out select-none">
                  A card component has a figure, a body part, and inside the
                  body there are title and actions parts. When you hover over
                  this card, the description will expand.
                </p>
                <Link to="/u/*">
                  <button className="hover:bg-[#F3F3F3] text-white px-3  md:px-5 text-[10px] md:text-[12px] sm:py-0.5 md:py-1 rounded-2xl bg-blue-500 group-hover:mt-[70px] md:group-hover:mt-14  hover:text-black transition-all duration-300">
                    Start
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesLogin;
