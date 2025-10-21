import { useEffect } from "react";
import { animateBanner } from "./Animations/BannerAnimation"; // adjust path as needed

export default function Banner() {
  

  useEffect(() => {
    animateBanner();
  }, []);

  return (
    <div className="bg-white text-black px-6 py-10 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Row Container */}
        <div className="relative md:h-[500px] h-[300px] bg-white md:px-6">

          {/* PORTFOLIO Text */}
          <div
            
            className="z-0 absolute sm:left-18 left-0 xs:left-0 md:left-27 xl:left-60  lg:left-45 top-1/2 transform -translate-y-1/2 text-left leading-none"
          >
            <h1 className="heading-port text-[60px] sm:text-[80px] md:text-[120px] xl:text-[160px] lg:text-[140px] font-black leading-none">PORT</h1>
            <h1 className="heading-folio text-[60px] sm:text-[80px] md:text-[120px] xl:text-[160px] lg:text-[140px] font-black leading-none">FOLIO</h1>
          </div>

          {/* Circle UI/UX Block */}
          <div
           
            className="absolute  lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] h-[170px] w-[170px] right-10 sm:left-67 left-37  md:left-100 lg:left-130 xl:left-160 top-[40%] transform -translate-y-1/2 bg-white rounded-[50%] p-10 lg:p-14 shadow-lg z-10 border-4 border-transparent"
          >
            <div className="text-right">
              <h2 className="heading-ui text-[20px] sm:text-[28px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-black leading-none">UI UX DESIGN</h2>
              <h2 className="heading-works text-[20px] sm:text-[28px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-black leading-none">WORKS</h2>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
