import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { client, urlFor } from "../lib/client";
function AllProduct({ products }) {
  return (
    <div className="flex flex-wrap justify-evenly  items-center w-full  ">
      {products.map((product, index) => {
        const src = urlFor(product.image[0]).url();
        return (
          <div className="w-full text-xs max-w-[10rem] sm:max-w-xs md:w-1/3 p-2 " key={index}>
            
            <div
              className="bg-white shadow-xl hover:shadow-xl rounded-lg "
            >
              <div
                className=" h-44 sm:h-64 rounded-t-lg  bg-no-repeat bg-center bg-cover "
              >
                <div className="h-full   relative">
                  <Image loader={()=>src} className="right-0 top-0 bottom-0 left-0"
                    src={src}
                    alt={"alt"}
                    layout="fill"
                    // objectFit="cover"
                  />
                </div>
                {/* <div className="text-right">
              <button
                className="text-gray-300 hover:text-orange-600 p-2 rounded-full"
                style={{ background: "rgba(0,0,0,0.3)" }}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                  />
                </svg>
              </button>
            </div> */}
              </div>
              <div className="flex sm:flex-row flex-col justify-between items-start px-2  sm:pt-2">
                <div className="  sm:p-2 flex-grow">
                  <h1 className="font-medium text-xl text-gray-800 font-poppins">
                    {product.name}
                  </h1>
                  <p className="text-gray-500 font-nunito">
                    Short description here
                  </p>
                </div>
                <div className="sm:p-2 flex sm:flex-col flex-row text-right">
                  <div className="text-orange-800 font-semibold text-lg font-poppins">
                    ₹{product.price}
                  </div>
                  <div className="text-xs text-gray-500 line-through font-poppins pl-2 pt-1 sm:pt-0 sm:pl-0">
                    ₹{product.sellerprice}
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center px-2 pb-2">
                <div className="w-1/2 p-2">
                  <Link href={`/product/`+ product.slug.current}><a>
                  <button className="flex justify-center w-full bg-orange-700 hover:bg-orange-800 text-white border-2 border-orange-500 hover:border-orange-600 px-3 py-1 rounded uppercase font-poppins font-medium text-9xl sm:text-xl ">
                    <svg viewBox="0 0 24 24" className="inline w-6 h-6 mt-1">
                      <path
                        fill="currentColor"
                        d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                      />
                    </svg>
                    <span className=" pl-1 hidden sm:block">Details</span>
                  </button>
                  </a></Link>
                </div>
                <div className="w-1/2 p-2">
                  <button className=" w-full bg-white hover:bg-gray-100 text-orange-700 border-2 border-orange-600 px-0 md:px-3 py-2 rounded uppercase font-poppins font-medium">
                    <span className="sm:block hidden "> Add to cart</span>
                    <span className=" block sm:hidden text-xl items-center pl-3">
                      <AiFillPlusCircle />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllProduct;
