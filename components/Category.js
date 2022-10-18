import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Category() {
  return (
    <div className="container w-full flex  pb-2 mt-2 pl-2">

<Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      // slidesPerView={4}
      navigation
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      breakpoints={{
        // when window width is >= 640px
        400: {
          width: 400,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 2,
        },
      }}

    >
      <SwiperSlide>

      <div className="box flex min-w-[18rem] shadow-md p-3 h-24 border rounded-md mx-1 ">
        <div className="left-box bg-gray-300 p-2 h-16 rounded-md">
          <Image src="/bag.png" width={50} height={50} />
        </div>
        <div className="right-box p-1 pl-2 h-16">
          <h1 className=" font-bold">Shoes $ Shipers</h1>
          <Link href={"/hh"} passHref>
            <a className="text-orange-800 font-bold pt-2">Show All</a>
          </Link>
          <p className=" -mt-12 ml-[170px]  text-xs text-gray-400">(50)</p>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="box flex min-w-[18rem] p-3 h-24 border rounded-md mx-1 ">
        <div className="left-box bg-gray-300 p-2 h-16 rounded-md">
          <Image src="/bag1.png"  width={50} height={50} />
        </div>
        <div className="right-box p-1 pl-2 h-16">
          <h1 className=" font-bold">Shoes $ Shipers</h1>
          <Link href={"/hh"} passHref>
            <a className="text-orange-800 font-bold pt-2">Show All</a>
          </Link>
          <p className=" -mt-12 ml-[170px]  text-xs text-gray-400">(50)</p>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="box flex min-w-[18rem] p-3 h-24 border rounded-md mx-1 ">
        <div className="left-box bg-gray-300 p-2 h-16 rounded-md">
          <Image src="/bag.png" width={50} height={50} />
        </div>
        <div className="right-box p-1 pl-2 h-16">
          <h1 className=" font-bold">Shoes $ Shipers</h1>
          <Link href={"/hh"} passHref>
            <a className="text-orange-800 font-bold pt-2">Show All</a>
          </Link>
          <p className=" -mt-12 ml-[170px]  text-xs text-gray-400">(50)</p>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="box flex min-w-[18rem] p-3 h-24 border rounded-md mx-1 ">
        <div className="left-box bg-gray-300 p-2 h-16 rounded-md">
          <Image src="/bag.png" width={50} height={50} />
        </div>
        <div className="right-box p-1 pl-2 h-16">
          <h1 className=" font-bold">Shoes $ Shipers</h1>
          <Link href={"/hh"} passHref>
            <a className="text-orange-800 font-bold pt-2">Show All</a>
          </Link>
          <p className=" -mt-12 ml-[170px]  text-xs text-gray-400">(50)</p>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="box flex min-w-[18rem] p-3 h-24 border rounded-md mx-1 ">
        <div className="left-box bg-gray-300 p-2 h-16 rounded-md">
          <Image src="/bag.png" width={50} height={50} />
        </div>
        <div className="right-box p-1 pl-2 h-16">
          <h1 className=" font-bold">Shoes $ Shipers</h1>
          <Link href={"/hh"} passHref>
            <a className="text-orange-800 font-bold pt-2">Show All</a>
          </Link>
          <p className=" -mt-12 ml-[170px]  text-xs text-gray-400">(50)</p>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="box flex min-w-[18rem] p-3 h-24 border rounded-md mx-1 ">
        <div className="left-box bg-gray-300 p-2 h-16 rounded-md">
          <Image src="/bag.png" width={50} height={50} />
        </div>
        <div className="right-box p-1 pl-2 h-16">
          <h1 className=" font-bold">Shoes $ Shipers</h1>
          <Link href={"/hh"} passHref>
            <a className="text-orange-800 font-bold pt-2">Show All</a>
          </Link>
          <p className=" -mt-12 ml-[170px]  text-xs text-gray-400">(50)</p>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="box flex min-w-[18rem] p-3 h-24 border rounded-md mx-1 ">
        <div className="left-box bg-gray-300 p-2 h-16 rounded-md">
          <Image src="/bag.png" width={50} height={50} />
        </div>
        <div className="right-box p-1 pl-2 h-16">
          <h1 className=" font-bold">Shoes $ Shipers</h1>
          <Link href={"/hh"} passHref>
            <a className="text-orange-800 font-bold pt-2">Show All</a>
          </Link>
          <p className=" -mt-12 ml-[170px]  text-xs text-gray-400">(50)</p>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="box flex min-w-[18rem] p-3 h-24 border rounded-md mx-1 ">
        <div className="left-box bg-gray-300 p-2 h-16 rounded-md">
          <Image src="/bag.png" width={50} height={50} />
        </div>
        <div className="right-box p-1 pl-2 h-16">
          <h1 className=" font-bold">Shoes $ Shipers</h1>
          <Link href={"/hh"} passHref>
            <a className="text-orange-800 font-bold pt-2">Show All</a>
          </Link>
          <p className=" -mt-12 ml-[170px]  text-xs text-gray-400">(50)</p>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="box flex min-w-[18rem] p-3 h-24 border rounded-md mx-1 ">
        <div className="left-box bg-gray-300 p-2 h-16 rounded-md">
          <Image src="/bag.png" width={50} height={50} />
        </div>
        <div className="right-box p-1 pl-2 h-16">
          <h1 className=" font-bold">Shoes $ Shipers</h1>
          <Link href={"/hh"} passHref>
            <a className="text-orange-800 font-bold pt-2">Show All</a>
          </Link>
          <p className=" -mt-12 ml-[170px]  text-xs text-gray-400">(50)</p>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="box flex min-w-[18rem] p-3 h-24 border rounded-md mx-1 ">
        <div className="left-box bg-gray-300 p-2 h-16 rounded-md">
          <Image src="/bag.png" width={50} height={50} />
        </div>
        <div className="right-box p-1 pl-2 h-16">
          <h1 className=" font-bold">Shoes $ Shipers</h1>
          <Link href={"/hh"} passHref>
            <a className="text-orange-800 font-bold pt-2">Show All</a>
          </Link>
          <p className=" -mt-12 ml-[170px]  text-xs text-gray-400">(50)</p>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="box flex min-w-[18rem] p-3 h-24 border rounded-md mx-1 ">
        <div className="left-box bg-gray-300 p-2 h-16 rounded-md">
          <Image src="/bag.png" width={50} height={50} />
        </div>
        <div className="right-box p-1 pl-2 h-16">
          <h1 className=" font-bold">Shoes $ Shipers</h1>
          <Link href={"/hh"} passHref>
            <a className="text-orange-800 font-bold pt-2">Show All</a>
          </Link>
          <p className=" -mt-12 ml-[170px]  text-xs text-gray-400">(50)</p>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="box flex min-w-[18rem] p-3 h-24 border rounded-md mx-1 ">
        <div className="left-box bg-gray-300 p-2 h-16 rounded-md">
          <Image src="/bag.png" width={50} height={50} />
        </div>
        <div className="right-box p-1 pl-2 h-16">
          <h1 className=" font-bold">Shoes $ Shipers</h1>
          <Link href={"/hh"} passHref>
            <a className="text-orange-800 font-bold pt-2">Show All</a>
          </Link>
          <p className=" -mt-12 ml-[170px]  text-xs text-gray-400">(50)</p>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="box flex min-w-[18rem] p-3 h-24 border rounded-md mx-1 ">
        <div className="left-box bg-gray-300 p-2 h-16 rounded-md">
          <Image src="/bag.png" width={50} height={50} />
        </div>
        <div className="right-box p-1 pl-2 h-16">
          <h1 className=" font-bold">Shoes $ Shipers</h1>
          <Link href={"/hh"} passHref>
            <a className="text-orange-800 font-bold pt-2">Show All</a>
          </Link>
          <p className=" -mt-12 ml-[170px]  text-xs text-gray-400">(50)</p>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="box flex min-w-[18rem] p-3 h-24 border rounded-md mx-1 ">
        <div className="left-box bg-gray-300 p-2 h-16 rounded-md">
          <Image src="/bag.png" width={50} height={50} />
        </div>
        <div className="right-box p-1 pl-2 h-16">
          <h1 className=" font-bold">Shoes $ Shipers</h1>
          <Link href={"/hh"} passHref>
            <a className="text-orange-800 font-bold pt-2">Show All</a>
          </Link>
          <p className=" -mt-12 ml-[170px]  text-xs text-gray-400">(50)</p>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="box flex min-w-[18rem] p-3 h-24 border rounded-md mx-1 ">
        <div className="left-box bg-gray-300 p-2 h-16 rounded-md">
          <Image src="/bag.png" width={50} height={50} />
        </div>
        <div className="right-box p-1 pl-2 h-16">
          <h1 className=" font-bold">Shoes $ Shipers</h1>
          <Link href={"/hh"} passHref>
            <a className="text-orange-800 font-bold pt-2">Show All</a>
          </Link>
          <p className=" -mt-12 ml-[170px]  text-xs text-gray-400">(50)</p>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="box flex min-w-[18rem] p-3 h-24 border rounded-md mx-1 ">
        <div className="left-box bg-gray-300 p-2 h-16 rounded-md">
          <Image src="/bag.png" width={50} height={50} />
        </div>
        <div className="right-box p-1 pl-2 h-16">
          <h1 className=" font-bold">Shoes $ Shipers</h1>
          <Link href={"/hh"} passHref>
            <a className="text-orange-800 font-bold pt-2">Show All</a>
          </Link>
          <p className=" -mt-12 ml-[170px]  text-xs text-gray-400">(50)</p>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="box flex min-w-[18rem] p-3 h-24 border rounded-md mx-1 ">
        <div className="left-box bg-gray-300 p-2 h-16 rounded-md">
          <Image src="/bag.png" width={50} height={50} />
        </div>
        <div className="right-box p-1 pl-2 h-16">
          <h1 className=" font-bold">Shoes $ Shipers</h1>
          <Link href={"/hh"} passHref>
            <a className="text-orange-800 font-bold pt-2">Show All</a>
          </Link>
          <p className=" -mt-12 ml-[170px]  text-xs text-gray-400">(50)</p>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="box flex min-w-[18rem] p-3 h-24 border rounded-md mx-1 ">
        <div className="left-box bg-gray-300 p-2 h-16 rounded-md">
          <Image src="/bag.png" width={50} height={50} />
        </div>
        <div className="right-box p-1 pl-2 h-16">
          <h1 className=" font-bold">Shoes $ Shipers</h1>
          <Link href={"/hh"} passHref>
            <a className="text-orange-800 font-bold pt-2">Show All</a>
          </Link>
          <p className=" -mt-12 ml-[170px]  text-xs text-gray-400">(50)</p>
        </div>
      </div>
      </SwiperSlide>
    
   
</Swiper>
    </div>
  );
}

export default Category;
