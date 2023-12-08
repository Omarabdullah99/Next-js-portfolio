"use client";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { useMenuStore } from "@/store/useMenuStore";


const TopMenu = () => {
  const { isOpen, toggleMenu } = useMenuStore();

  const handleDownload = () => {
    const pdfUrl = 'https://drive.google.com/file/d/165D1v81vv1zZowsUaSTI4OSpTWrG7G5Y/view';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'downloaded-file.pdf';
    link.click();
  };

  return (
    <div className="px-[40px] bg-light-bg py-4 z-10 max-xs:px-[20px]" id="home">
      <div className="top-menu">
        <div className="flex justify-between items-center w-full md:hidden">
          <div className="flex gap-10 w-full">
            <Link href={"/"}>
              <h1 className="font-bold text-3xl text-dark-red">Omar Abdullah</h1>
            </Link>
          </div>

          <div className="text-2xl z-50" onClick={toggleMenu}>
            {isOpen ? <AiOutlineClose /> : <RiMenu3Fill />}
          </div>
        </div>

        <div className="top-menu-info-container">
          <div className="flex md:gap-10 flex-col md:flex-row">
            <div className="flex gap-1 items-center text-sm font-bold">
              <MdEmail />
              <span className="text-dark-blue">omarabdullah917303@gmail.com</span>
            </div>
          </div>

          <button onClick={handleDownload} className="bg-dark-blue text-white px-4 py-1 rounded-md hover:bg-dark-blue/75">Download Resume</button>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;