import React from "react";
import Image from "next/image";
const ImageAndText = ({isImage=true, subText, category, title, lgPadding,  titleClass = 'text-sm-medium md:text-lg-medium' }) => {
  const lgPaddingFinal = lgPadding ? lgPadding : 'lg:p-[10%_0%_10%_0%]'
  return (
    <section
      className={`bg-offering-image bg-no-repeat bg-contain bg-right-bottom md:bg-[60vw_45vw] lg:bg-[70vw_0vw] w-full bg-athinia-dark flex-initial h-auto
              break-words py-20   md:p-[18%_0%_18%_0%]  ${lgPaddingFinal} bg-[length:50vw_auto]`}
    
    >
      <div
        className="grid grid-cols-1 md:grid-cols-3 flex flex-col md:flex-row
        max-w-[1400px] p-[0_2em_0_2em] md:p-8 lg:p-3 mx-auto "
      >
        <div className="col-span-2 text-white px-0 lg:pr-[13rem]">
            <p className="text-lg-small border-b-4 inline border-athinia-green pb-2 my-2 md:my-0">{category}</p>
            <h3 className={`${titleClass} py-5 md:pr-5 lg:pr-0 md:letter-spacing--1`}> {title}
</h3>
<p>{subText}</p>
        </div>
        <div className="col-span-1 mt-10 md:mt-0 px-10 flex md:justify-end lg:justify-start">
            {isImage &&  <Image src={'/images/Athinia-Key-Graphic-security-lock.png'} alt="key-graphic" className={'z-1 mr-auto w-[120px] h-[220] md:w-[100px] md:h-[150px] lg:h-[300px] lg:w-[160px] ml-auto md:mr-0 md:ml-0 animate-fade-in-right-500'} width={180} height={332}/>}
        </div>
      </div>
    </section>
  );
};

export default ImageAndText;
