import React from "react";
import { Link } from "react-router-dom";
import NavbarLogin from "../components/NavbarLogin";

export const GamesLogin = () => {
  return (
    <div className="bg-white h-screen">
      <NavbarLogin />
      <div className="bg-white">
        <h1 className="font-montserrat text-[30px] lg:text-[40px] pb-6 lg:pb-8  pt-8 text-black pl-10 lg:pl-72  xl:pl-96 select-none pointer-events-none">
          Games
        </h1>
      </div>

      <div className="bg-white pt-4 pb-20  flex items-center justify-center rounded-md px-2  lg:pr-16 lg:pl-72 xl:pl-96 xl:pr-20">
        <div className="flex flex-wrap gap-4 lg:gap-16">
          {/* Card 1 */}
          <div className="bg-biru1 w-[150px] lg:w-[260px] h-full first-letter:shadow-sm rounded-md group ml-6 lg:ml-0  lg:mr-0">
            <figure>
              <img
                src="https://res.cloudinary.com/dncuggzvl/image/upload/v1747887426/1_hwcnkj.svg"
                alt="educerdas.id"
                className="object-cover w-full h-30 lg:h-48 first-letter:ounded-md transition-all rounded-md duration-300 ease-in-out select-none pointer-events-none"
              />
            </figure>
            <div className="flex flex-col h-[60px] group-hover:h-[120px] lg:h-[80px] lg:group-hover:h-[130px] transition-all duration-100 ease-in-out">
              <h2 className="font-montserrat select-none text-xs lg:text-xl font-semibold text-black pt-2 pl-2">
                MONSTER PERKALIAN
              </h2>
              <div className=" flex items-start  pr-2 pl-2">
                <p className="text-[8px] lg:text-xs text-gray-600 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 ease-in-out select-none">
                  merupakan sebuah game yang mengharuskan untuk menjawab soal
                  yang diberikan dengan benar untuk mengalahkan sang monster.
                </p>
                <Link to="*">
                  <button className="hover:bg-[#F3F3F3] text-white px-3 md:px-5 text-[10px] md:text-[12px] sm:py-0.5 md:py-1 rounded-2xl bg-blue-500 group-hover:mt-[70px] md:group-hover:mt-14  hover:text-black transition-all duration-300">
                    Start
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-biru1 w-[150px] lg:w-[260px] md:mb-0 mb-4 h-full md:pr-0 first-letter:shadow-sm rounded-md group ml-6 lg:ml-0">
            <figure>
              <img
                src="https://res.cloudinary.com/dncuggzvl/image/upload/v1748017435/2_k2mps2.svg"
                alt="educerdas.id"
                className="object-cover w-full h-30 lg:h-48 first-letter:ounded-md transition-all rounded-md duration-300 ease-in-out select-none pointer-events-none"
              />
            </figure>
            <div className="flex flex-col h-[60px] group-hover:h-[140px] lg:h-[80px] lg:group-hover:h-[145px] transition-all duration-100 ease-in-out">
              <h2 className="font-montserrat select-none  text-xs lg:text-xl font-semibold text-black pt-2 pl-2">
                ULAR PENJUMLAH
              </h2>
              <div className="flex items-start space-x-3 pr-2 pl-2">
                <p className="text-[8px] lg:text-xs text-gray-600 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 ease-in-out select-none">
                  merupakan sebuah game yang mengharuskan untuk menyesuaikan
                  jawaban dari penjumlahan dengan mengarahkan ularnya pada
                  jawaban yang benar.
                </p>
                <Link to="*">
                  <button className="hover:bg-[#F3F3F3] text-white px-3  md:px-5 text-[10px] md:text-[12px] sm:py-0.5 md:py-1 rounded-2xl bg-blue-500 group-hover:mt-[88px] md:group-hover:mt-[70px] hover:text-black transition-all duration-300">
                    Start
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-biru1 w-[150px] lg:w-[260px]  md:mb-0 mb-4 h-full first-letter:shadow-sm rounded-md group ml-6 lg:ml-0">
            <figure>
              <img
                src="https://res.cloudinary.com/dncuggzvl/image/upload/v1748017435/3_sauocl.svg"
                alt="educerdas.id"
                className="object-cover w-full h-30 lg:h-48 first-letter:ounded-md transition-all rounded-md duration-300 ease-in-out select-none pointer-events-none"
              />
            </figure>
            <div className="flex flex-col h-[60px] group-hover:h-[130px] lg:h-[80px] lg:group-hover:h-[130px] transition-all duration-100 ease-in-out">
              <h2 className="font-montserrat select-none  text-xs lg:text-xl font-semibold text-black pt-2 pl-2">
                SHOOTER MATH
              </h2>
              <div className="flex items-start space-x-3 pr-2 pl-2">
                <p className="text-[8px] lg:text-xs text-gray-600 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 ease-in-out select-none">
                  merupakan sebuah game yang mengharuskan untuk mengisi bagian
                  yang kosong dari bagian soal maupun jawaban sesuai dengan
                  seharusnya.
                </p>
                <Link to="*">
                  <button className="hover:bg-[#F3F3F3] text-white px-3  md:px-5 text-[10px] md:text-[12px] sm:py-0.5 md:py-1 rounded-2xl bg-blue-500 group-hover:mt-[70px] md:group-hover:mt-14  hover:text-black transition-all duration-300">
                    Start
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-biru1 w-[150px] lg:w-[260px] h-full first-letter:shadow-sm rounded-md group ml-6 lg:ml-0">
            <figure>
              <img
                src="https://res.cloudinary.com/dncuggzvl/image/upload/v1748017435/4_vefxuq.svg"
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
                  merupakan sebuah game yang mengharuskan untuk menjawab
                  teka-teki silang bahasa Inggris tentang istilah pada pelajaran
                  IPA.
                </p>
                <Link to="*">
                  <button className="hover:bg-[#F3F3F3] text-white px-3  md:px-5 text-[10px] md:text-[12px] sm:py-0.5 md:py-1 rounded-2xl bg-blue-500 group-hover:mt-[70px] md:group-hover:mt-14  hover:text-black transition-all duration-300">
                    Start
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Capx-3 py-0.5 lg:rd 5 */}
          <div className="bg-biru1 w-[150px] lg:w-[260px] h-full first-letter:shadow-sm rounded-md group ml-6 lg:ml-0">
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
                  merupakan sebuah game yang mengharuskan untuk menjawab jawaban
                  yang benar atau salah sesuai dengan definisi dari gambar.
                </p>
                <Link to="*">
                  <button className="hover:bg-[#F3F3F3] text-white px-3  md:px-5 text-[10px] md:text-[12px] sm:py-0.5 md:py-1 rounded-2xl bg-blue-500 group-hover:mt-[70px] md:group-hover:mt-14  hover:text-black transition-all duration-300">
                    Start
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-biru1 w-[150px] lg:w-[260px] h-full first-letter:shadow-sm rounded-md group ml-6 lg:ml-0">
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
                  merupakan sebuah game yang mengharuskan untuk menyesuaikan
                  petualang dalam cerita dari sebuah liburan yang indah.
                </p>
                <Link to="*">
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
