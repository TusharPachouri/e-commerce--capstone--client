// import React from 'react';
import Typewriter from "typewriter-effect";
import background from "../../assets/img/background1.jpg";

function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <section className="bg-black/50 text-white flex items-center justify-center h-screen">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
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
          <div className="flex flex-wrap justify-center">
            <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-teal-600 text-white hover:bg-teal-700">
              Get started
            </button>
            <button className="px-8 py-3 m-2 text-lg border rounded text-gray-200 border-gray-200 hover:bg-gray-200 hover:text-gray-900">
              Learn more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
