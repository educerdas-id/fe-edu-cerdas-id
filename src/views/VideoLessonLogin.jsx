import React from "react";
import { Link } from "react-router-dom";
import NavbarLogin from "../components/NavbarLogin";
export const VideoLessonLogin = () => {
  return (
    <div className="bg-white h-screen">
      <NavbarLogin />
      <div className="bg-white">
        <h1 className="font-montserrat text-[30px] lg:text-[40px] pb-6 md:pb-8 pt-8 text-black pl-10 lg:pl-96 select-none pointer-events-none">
          Video Lesson
        </h1>
      </div>

      <div className="bg-white pt-4 pb-20  flex items-center justify-center rounded-md px-2 md:pl-96 md:pr-20">
        <div className="flex flex-wrap gap-4 lg:gap-16">
          {/* Card 1 */}
          <div className="bg-biru1 w-[150px] lg:w-[260px] h-full first-letter:shadow-sm rounded-md group ml-6 lg:ml-0  lg:mr-0">
            <figure>
              <img
                src="https://res.cloudinary.com/dncuggzvl/image/upload/v1748055210/1_pjppcx.svg"
                alt="educerdas.id"
                className="object-cover w-full h-30 lg:h-48 first-letter:ounded-md transition-all rounded-md duration-300 ease-in-out select-none pointer-events-none"
              />
            </figure>
            <div className="flex flex-col h-[60px] group-hover:h-[120px] lg:h-[80px] lg:group-hover:h-[130px] transition-all duration-100 ease-in-out">
              <h2 className="font-montserrat select-none text-xs lg:text-xl font-semibold text-black pt-2 pl-2">
                MATEMATIKA DASAR 1
              </h2>
              <div className=" flex items-start  pr-2 pl-2">
                <p className="text-[8px] lg:text-xs text-gray-600 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 ease-in-out select-none">
                  pembelajaran Matematika Dasar 1 dengan materi tentang dasar
                  matematika untuk siswa/i yang masih duduk di bangku sekolah
                  dasar.
                </p>
                <Link to="*">
                  <button className="hover:bg-[#F3F3F3] text-white px-3 md:px-5 text-[10px] md:text-[12px] sm:py-0.5 md:py-1 rounded-2xl bg-blue-500 group-hover:mt-[70px] md:group-hover:mt-14  hover:text-black transition-all duration-300">
                    Watch
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-biru1 w-[150px] lg:w-[260px] md:mb-0 mb-4 h-full md:pr-0 first-letter:shadow-sm rounded-md group ml-6 lg:ml-0">
            <figure>
              <img
                src="https://res.cloudinary.com/dncuggzvl/image/upload/v1748055218/2_gxew8y.svg"
                alt="educerdas.id"
                className="object-cover w-full h-30 lg:h-48 first-letter:ounded-md transition-all rounded-md duration-300 ease-in-out select-none pointer-events-none"
              />
            </figure>
            <div className="flex flex-col h-[60px] group-hover:h-[120px] lg:h-[80px] lg:group-hover:h-[130px] transition-all duration-100 ease-in-out">
              <h2 className="font-montserrat select-none  text-xs lg:text-xl font-semibold text-black pt-2 pl-2">
                IPA DASAR 1
              </h2>
              <div className="flex items-start space-x-3 pr-2 pl-2">
                <p className="text-[8px] lg:text-xs text-gray-600 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 ease-in-out select-none">
                  pembelajaran IPA Dasar 1 dengan materi tentang dasar IPA untuk
                  siswa/i yang masih duduk di bangku sekolah dasar.
                </p>
                <Link to="*">
                  <button className="hover:bg-[#F3F3F3] text-white px-3  md:px-5 text-[10px] md:text-[12px] sm:py-0.5 md:py-1 rounded-2xl bg-blue-500 group-hover:mt-[72px] md:group-hover:mt-[56px] hover:text-black transition-all duration-300">
                    Watch
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-biru1 w-[150px] lg:w-[260px]  md:mb-0 mb-4 h-full first-letter:shadow-sm rounded-md group ml-6 lg:ml-0">
            <figure>
              <img
                src="https://res.cloudinary.com/dncuggzvl/image/upload/v1748055211/3_mylsq8.svg"
                alt="educerdas.id"
                className="object-cover w-full h-30 lg:h-48 first-letter:ounded-md transition-all rounded-md duration-300 ease-in-out select-none pointer-events-none"
              />
            </figure>
            <div className="flex flex-col h-[60px] group-hover:h-[140px] lg:h-[80px] lg:group-hover:h-[140px] transition-all duration-100 ease-in-out">
              <h2 className="font-montserrat select-none  text-xs lg:text-xl font-semibold text-black pt-2 pl-2">
                INGGRIS DASAR 1
              </h2>
              <div className="flex items-start space-x-3 pr-2 pl-2">
                <p className="text-[8px] lg:text-xs text-gray-600 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 ease-in-out select-none">
                  pembelajaran Bahasa Inggris Dasar 1 dengan materi tentang
                  dasar bahasa Inggris untuk siswa/i yang masih duduk di bangku
                  sekolah dasar.
                </p>
                <Link to="*">
                  <button className="hover:bg-[#F3F3F3] text-white px-3  md:px-5 text-[10px] md:text-[12px] sm:py-0.5 md:py-1 rounded-2xl bg-blue-500 group-hover:mt-[90px] md:group-hover:mt-16  hover:text-black transition-all duration-300">
                    Watch
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-biru1 w-[150px] lg:w-[260px] h-full first-letter:shadow-sm rounded-md group ml-6 lg:ml-0">
            <figure>
              <img
                src="https://res.cloudinary.com/dncuggzvl/image/upload/v1748055214/4_iswebk.svg"
                alt="educerdas.id"
                className="object-cover w-full h-30 lg:h-48 first-letter:ounded-md transition-all rounded-md duration-300 ease-in-out select-none pointer-events-none"
              />
            </figure>
            <div className="flex flex-col h-[60px] group-hover:h-[120px] lg:h-[80px] lg:group-hover:h-[130px] transition-all duration-100 ease-in-out">
              <h2 className="font-montserrat select-none  text-xs lg:text-xl font-semibold text-black pt-2 pl-2">
                IPA DASAR 1
              </h2>
              <div className="flex items-start space-x-3 pr-2 pl-2">
                <p className="text-[8px] lg:text-xs text-gray-600 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 ease-in-out select-none">
                  pembelajaran IPS Dasar 1 dengan materi tentang dasar IPS untuk
                  siswa/i yang masih duduk di bangku sekolah dasar.
                </p>
                <Link to="*">
                  <button className="hover:bg-[#F3F3F3] text-white px-3  md:px-5 text-[10px] md:text-[12px] sm:py-0.5 md:py-1 rounded-2xl bg-blue-500 group-hover:mt-[70px] md:group-hover:mt-14  hover:text-black transition-all duration-300">
                    Watch
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Capx-3 py-0.5 lg:rd 5 */}
          <div className="bg-biru1 w-[150px] lg:w-[260px] h-full first-letter:shadow-sm rounded-md group ml-6 lg:ml-0">
            <figure>
              <img
                src="https://res.cloudinary.com/dncuggzvl/image/upload/v1748055209/5_kjpqbp.svg"
                alt="educerdas.id"
                className="object-cover w-full h-30 lg:h-48 first-letter:ounded-md transition-all rounded-md duration-300 ease-in-out select-none pointer-events-none"
              />
            </figure>
            <div className="flex flex-col h-[60px] group-hover:h-[130px] lg:h-[80px] lg:group-hover:h-[130px] transition-all duration-100 ease-in-out">
              <h2 className="font-montserrat select-none  text-xs lg:text-xl font-semibold text-black pt-2 pl-2">
                SEJARAH DASAR 1
              </h2>
              <div className="flex items-start space-x-3 pr-2 pl-2">
                <p className="text-[8px] lg:text-xs text-gray-600 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 ease-in-out select-none">
                  pembelajaran Sejarah Dasar 1 dengan materi tentang dasar
                  sejarah untuk siswa/i yang masih duduk di bangku sekolah
                  dasar.
                </p>
                <Link to="*">
                  <button className="hover:bg-[#F3F3F3] text-white px-3  md:px-5 text-[10px] md:text-[12px] sm:py-0.5 md:py-1 rounded-2xl bg-blue-500 group-hover:mt-[82px] md:group-hover:mt-14  hover:text-black transition-all duration-300">
                    Watch
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-biru1 w-[150px] lg:w-[260px] h-full first-letter:shadow-sm rounded-md group ml-6 lg:ml-0">
            <figure>
              <img
                src="https://res.cloudinary.com/dncuggzvl/image/upload/v1748191681/6_iargyd.svg"
                alt="educerdas.id"
                className="object-cover w-full h-30 lg:h-48 first-letter:ounded-md  transition-all rounded-md duration-300 ease-in-out select-none pointer-events-none"
              />
            </figure>
            <div className="flex flex-col h-[60px] group-hover:h-[140px] lg:h-[80px] lg:group-hover:h-[145px] transition-all duration-100 ease-in-out">
              <h2 className="font-montserrat select-none  text-xs lg:text-xl font-semibold text-black pt-2 pl-2">
                INDONESIA DASAR 1
              </h2>
              <div className="flex items-start space-x-3 pr-2 pl-2">
                <p className="text-[8px] lg:text-xs text-gray-600 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 ease-in-out select-none">
                  pembelajaran Bahasa Indonesia dasar 1 dengan materi tentang
                  dasar bahasa Indonesia untuk siswa/i yang masih duduk di
                  bangku sekolah dasar.
                </p>
                <Link to="*">
                  <button className="hover:bg-[#F3F3F3] text-white px-3  md:px-5 text-[10px] md:text-[12px] sm:py-0.5 md:py-1 rounded-2xl bg-blue-500 group-hover:mt-[90px] md:group-hover:mt-[72px]  hover:text-black transition-all duration-300">
                    Watch
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

export default VideoLessonLogin;
