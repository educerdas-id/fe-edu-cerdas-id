import React from "react";
import { Link } from "react-router-dom";
import NavbarLogin from "../components/NavbarLogin";
export const WorksheetsLogin = () => {
  return (
    <div className="bg-white h-screen">
      <NavbarLogin />
      <div className="bg-white">
        <h1 className="font-montserrat text-[30px] lg:text-[40px] pb-6 md:pb-8 pt-8 text-black pl-10 lg:pl-72 xl:pl-96 select-none pointer-events-none">
          Worksheets
        </h1>
      </div>

      <div className="bg-white pt-4 pb-40  flex items-center justify-center rounded-md px-2 xl:pl-96 xl:pr-20 lg:pl-72 lg:pr-16">
        <div className="flex flex-wrap gap-4 lg:gap-16">
          {/* Card 1 */}
          <div className="bg-biru1 w-[150px] lg:w-[260px] h-full first-letter:shadow-sm rounded-md group ml-6 lg:ml-0  lg:mr-0">
            <figure>
              <img
                src="https://res.cloudinary.com/dncuggzvl/image/upload/v1748055223/1_caclvx.svg"
                alt="educerdas.id"
                className="object-cover w-full h-30 lg:h-48 first-letter:ounded-md transition-all rounded-md duration-300 ease-in-out select-none pointer-events-none"
              />
            </figure>
            <div className="flex flex-col h-[60px] group-hover:h-[150px] lg:h-[80px] lg:group-hover:h-[155px] transition-all duration-100 ease-in-out">
              <h2 className="font-montserrat select-none  text-xs lg:text-xl font-semibold text-black pt-2 pl-2">
                MATEMATIKA DASAR
              </h2>
              <div className="flex items-start space-x-3 pr-2 pl-2">
                <p className="text-[8px] lg:text-xs text-gray-600 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 ease-in-out select-none">
                  materi Matematika Dasar untuk anak berusia kurang dari 10
                  tahun yang sangat mudah dipahami dengan materi dan latihan
                  soal yang lengkap untuk bahan pembelajaran
                </p>
                <Link to="*">
                  <button className="hover:bg-[#F3F3F3] text-white px-2  md:px-5 text-[10px] md:text-[12px] sm:py-0.5 md:py-1 rounded-2xl bg-blue-500 group-hover:mt-[100px] md:group-hover:mt-[82px]  hover:text-black transition-all duration-300">
                    Attempt
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-biru1 w-[150px] lg:w-[260px] md:mb-0 mb-4 h-full md:pr-0 first-letter:shadow-sm rounded-md group ml-6 lg:ml-0">
            <figure>
              <img
                src="https://res.cloudinary.com/dncuggzvl/image/upload/v1748055222/2_an7rrw.svg"
                alt="educerdas.id"
                className="object-cover w-full h-30 lg:h-48 first-letter:ounded-md transition-all rounded-md duration-300 ease-in-out select-none pointer-events-none"
              />
            </figure>
            <div className="flex flex-col h-[60px] group-hover:h-[150px] lg:h-[80px] lg:group-hover:h-[155px] transition-all duration-100 ease-in-out">
              <h2 className="font-montserrat select-none  text-xs lg:text-xl font-semibold text-black pt-2 pl-2">
                IPA DASAR
              </h2>
              <div className="flex items-start space-x-3 pr-2 pl-2">
                <p className="text-[8px] lg:text-xs text-gray-600 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 ease-in-out select-none">
                  materi Ipa Dasar untuk anak berusia kurang dari 10 tahun yang
                  sangat mudah dipahami dengan materi dan latihan soal yang
                  lengkap untuk bahan pembelajaran
                </p>
                <Link to="*">
                  <button className="hover:bg-[#F3F3F3] text-white px-2  md:px-5 text-[10px] md:text-[12px] sm:py-0.5 md:py-1 rounded-2xl bg-blue-500 group-hover:mt-[100px] md:group-hover:mt-[82px]  hover:text-black transition-all duration-300">
                    Attempt
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-biru1 w-[150px] lg:w-[260px]  md:mb-0 mb-4 h-full first-letter:shadow-sm rounded-md group ml-6 lg:ml-0">
            <figure>
              <img
                src="https://res.cloudinary.com/dncuggzvl/image/upload/v1748055224/3_wmukgy.svg"
                alt="educerdas.id"
                className="object-cover w-full h-30 lg:h-48 first-letter:ounded-md transition-all rounded-md duration-300 ease-in-out select-none pointer-events-none"
              />
            </figure>
            <div className="flex flex-col h-[60px] group-hover:h-[150px] lg:h-[80px] lg:group-hover:h-[155px] transition-all duration-100 ease-in-out">
              <h2 className="font-montserrat select-none  text-xs lg:text-xl font-semibold text-black pt-2 pl-2">
                INGGRIS DASAR
              </h2>
              <div className="flex items-start space-x-3 pr-2 pl-2">
                <p className="text-[8px] lg:text-xs text-gray-600 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 ease-in-out select-none">
                  materi Inggris Dasar untuk anak berusia kurang dari 10 tahun
                  yang sangat mudah dipahami dengan materi dan latihan soal yang
                  lengkap untuk bahan pembelajaran
                </p>
                <Link to="*">
                  <button className="hover:bg-[#F3F3F3] text-white px-2  md:px-5 text-[10px] md:text-[12px] sm:py-0.5 md:py-1 rounded-2xl bg-blue-500 group-hover:mt-[100px] md:group-hover:mt-[82px]  hover:text-black transition-all duration-300">
                    Attempt
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-biru1 w-[150px] lg:w-[260px] h-full first-letter:shadow-sm rounded-md group ml-6 lg:ml-0">
            <figure>
              <img
                src="https://res.cloudinary.com/dncuggzvl/image/upload/v1748055228/4_qwntu7.svg"
                alt="educerdas.id"
                className="object-cover w-full h-30 lg:h-48 first-letter:ounded-md transition-all rounded-md duration-300 ease-in-out select-none pointer-events-none"
              />
            </figure>
            <div className="flex flex-col h-[60px] group-hover:h-[150px] lg:h-[80px] lg:group-hover:h-[155px] transition-all duration-100 ease-in-out">
              <h2 className="font-montserrat select-none  text-xs lg:text-xl font-semibold text-black pt-2 pl-2">
                IPS DASAR
              </h2>
              <div className="flex items-start space-x-3 pr-2 pl-2">
                <p className="text-[8px] lg:text-xs text-gray-600 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 ease-in-out select-none">
                  materi Ips Dasar untuk anak berusia kurang dari 10 tahun yang
                  sangat mudah dipahami dengan materi dan latihan soal yang
                  lengkap untuk bahan pembelajaran
                </p>
                <Link to="*">
                  <button className="hover:bg-[#F3F3F3] text-white px-2  md:px-5 text-[10px] md:text-[12px] sm:py-0.5 md:py-1 rounded-2xl bg-blue-500 group-hover:mt-[100px] md:group-hover:mt-[82px]  hover:text-black transition-all duration-300">
                    Attempt
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Capx-2 py-0.5 lg:rd 5 */}
          <div className="bg-biru1 w-[150px] lg:w-[260px] h-full first-letter:shadow-sm rounded-md group ml-6 lg:ml-0">
            <figure>
              <img
                src="https://res.cloudinary.com/dncuggzvl/image/upload/v1748055228/5_y3cmxa.svg"
                alt="educerdas.id"
                className="object-cover w-full h-30 lg:h-48 first-letter:ounded-md transition-all rounded-md duration-300 ease-in-out select-none pointer-events-none"
              />
            </figure>
            <div className="flex flex-col h-[60px] group-hover:h-[150px] lg:h-[80px] lg:group-hover:h-[155px] transition-all duration-100 ease-in-out">
              <h2 className="font-montserrat select-none  text-xs lg:text-xl font-semibold text-black pt-2 pl-2">
                SEJARAH DASAR
              </h2>
              <div className="flex items-start space-x-3 pr-2 pl-2">
                <p className="text-[8px] lg:text-xs text-gray-600 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 ease-in-out select-none">
                  materi Sejarah Dasar untuk anak berusia kurang dari 10 tahun
                  yang sangat mudah dipahami dengan materi dan latihan soal yang
                  lengkap untuk bahan pembelajaran
                </p>
                <Link to="*">
                  <button className="hover:bg-[#F3F3F3] text-white px-2  md:px-5 text-[10px] md:text-[12px] sm:py-0.5 md:py-1 rounded-2xl bg-blue-500 group-hover:mt-[100px] md:group-hover:mt-[82px]  hover:text-black transition-all duration-300">
                    Attempt
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-biru1 w-[150px] lg:w-[260px] h-full first-letter:shadow-sm rounded-md group ml-6 lg:ml-0">
            <figure>
              <img
                src="https://res.cloudinary.com/dncuggzvl/image/upload/v1748055225/6_tzcfte.svg"
                alt="educerdas.id"
                className="object-cover w-full h-30 lg:h-48 first-letter:ounded-md transition-all rounded-md duration-300 ease-in-out select-none pointer-events-none"
              />
            </figure>
            <div className="flex flex-col h-[60px] group-hover:h-[150px] lg:h-[80px] lg:group-hover:h-[155px] transition-all duration-100 ease-in-out">
              <h2 className="font-montserrat select-none  text-xs lg:text-xl font-semibold text-black pt-2 pl-2">
                INDONESIA DASAR
              </h2>
              <div className="flex items-start space-x-3 pr-2 pl-2">
                <p className="text-[8px] lg:text-xs text-gray-600 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 ease-in-out select-none">
                  materi Indonesia Dasar untuk anak berusia kurang dari 10 tahun
                  yang sangat mudah dipahami dengan materi dan latihan soal yang
                  lengkap untuk bahan pembelajaran
                </p>
                <Link to="*">
                  <button className="hover:bg-[#F3F3F3] text-white px-2  md:px-5 text-[10px] md:text-[12px] sm:py-0.5 md:py-1 rounded-2xl bg-blue-500 group-hover:mt-[100px] md:group-hover:mt-[82px]  hover:text-black transition-all duration-300">
                    Attempt
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

export default WorksheetsLogin;
