import React from "react";
import Footer from './footer'; // Ensure Footer is correctly imported
import './home.css'; // Ensure correct styles

function Home() {
  return (
    <div className="home-container">
      <div className="background-video-wrapper">
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Main Content Section */}
      <section className="main-content">
        <div className="text-center p-6 bg-black bg-opacity-50 rounded-lg">
          <h2 className="text-4xl font-bold text-white">Welcome to Tawa Coo</h2>
          <p className="mt-4 text-xl text-white">Experience the finest sushi made with the freshest ingredients.</p>
          <button className="mt-6 px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400" >
            Order Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
