// import React from 'react';
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
function Home() {
  return (
<section className="flex flex-col min-h-screen p-6 sm:p-12 bg-gray-800 text-gray-100 flex-grow">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://cdn.iconscout.com/icon/free/png-512/shopping-cart-bag-shop-shopcart-tray-favorite-13201.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
    <h1 className="text-5xl font-bold leading-tight mb-6">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Welcome to SmartShop")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Shop smarter with AI")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Discover personalized recommendations")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Experience effortless shopping")
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
            />
          </h1>
          <p className="px-8 mb-12 text-lg">
            Our AI-powered chatbot is here to help you find the perfect products
            for your needs. Start chatting now and discover a hassle-free
            shopping experience.
          </p>
			  <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <Link to="/product" className="px-8 py-3 text-lg font-semibold border rounded border-gray-100">Shop Now</Link>
          <Link to="/contact" className="px-8 py-3 text-lg font-semibold border rounded border-gray-100">Chat Now</Link>
			</div>
		</div>
	</div>
</section>
  );
}

export default Home;
