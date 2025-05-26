import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export const About = () => {
  return (
    <div className="bg-white h-screen">
      <Navbar />
      <div className="">
        <div className="text-[30px] text-center font-montserrat font-bold text-black pt-20 xl:mt-0 lg:mt-36">
          ABOUT US
        </div>
        <h1 className="text-black text-center pt-8 xl:mb-0 l  mb-24 ">
          Temukan Cara Baru untuk Belajar! 🚀
        </h1>
        <div className="bg-[#E4EEFF] text-black text-justify xl:p-20 p-16 pt-24 xl:px-40  lg:pt-40 lg:mt-80 lg:pb-80 xl:pb-24 xl:mt-24  ">
          {" "}
          Kami merupakan platform pembelajaran anak yang dirancang untuk membuat
          belajar menjadi menyenangkan dan interaktif. Kami percaya bahwa
          pendidikan bukan sekadar kewajiban, tetapi sebuah petualangan menuju
          masa depan yang lebih baik. Setiap siswa memiliki potensi luar biasa,
          dan misi kami adalah membuka pintu bagi mereka untuk belajar dengan
          cara yang lebih menyenangkan, interaktif, dan bermakna. <br /> <br />
          Belajar Itu menyenangkan. Kami menghadirkan metode pembelajaran
          inovatif yang membuat siswa antusias dan terlibat secara aktif. Akses
          untuk Semua Pendidikan berkualitas harus dapat diakses oleh siapa
          saja, kapan saja. Membakar Semangat Intelektual Kami mendorong rasa
          ingin tahu, kreativitas, dan pemikiran kritis agar siswa siap
          menghadapi dunia nyata. <br /> <br /> Di Educerdas, kami tidak hanya
          mengajarkan pelajaran kami membangun masa depan. Bergabunglah dengan
          kami dan ubah cara belajarmu menjadi pengalaman yang luar biasa.
        </div>
      </div>
    </div>
  );
};

export default About;
