import React from "react";
import { useStore } from "../../store/store";
import Layout from "../../components/Layout";
import { client,urlFor } from "../../lib/client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Slug({ product }) {
  const addProduct=useStore((state)=>state.addProduct)
  const addToCart=()=>{
    try {
      addProduct({...product,id:product._id, name:product.name,price:product.price})
      toast.success("Added to Cart successfully")
    } catch (error) {
      toast.error("Something is wrong")
    }
  }
  return (
    <Layout title={"Product details"}>
      <ToastContainer/>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-5 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={urlFor(product.image[0]).url()}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
               {product.name}
              </h1>
              {product&&(product.availableProducts-product.sold)<=0?<h3 className="text-red-600 text-lg ">Out of Stock</h3>:<></>}
              <div className="flex mb-4"></div>
              <p className="leading-relaxed">
               {product.details}
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-orange-600 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-orange-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ₹{product.price}
                </span>
                <button className="flex ml-auto text-white bg-orange-700 border-0 py-2 px-6 focus:outline-none hover:bg-orange-800 rounded uppercase" onClick={addToCart}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Slug;

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type=="product" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const product = await client.fetch(
    `*[_type=="product" && slug.current=='${slug}'][0]`
  );
  return {
    props: {
      product,
    },
  }
}
