// src/pages/Home.js
import React from 'react';
import './Home.css';  // Add this line
import { Link } from 'react-router-dom';
import PopupBubble from '../components/PopupBubble'; 

function Home() {
  return (
    <main role="main">
      <h1>Welcome to our collection of cozy cabins. Choose your perfect getaway!</h1>
      <div className="cabin-list">
        <div className="cabin-card">
          <Link to="/cabin1">
            <h2>Cabin 1</h2>
            <img src="https://live.staticflickr.com/65535/53927476008_c0fb7af88d.jpg" alt="Cabin 1 Exterior" width="381" height="500" />
            <p>Experience the charm of our first cabin.</p>
          </Link>
        </div>
        <div className="cabin-card">
          <Link to="/cabin2">
            <h2>Cabin 2</h2>
            <img src="https://live.staticflickr.com/65535/53927204271_2a6953e5c8.jpg" alt="Cabin 2 Exterior" width="500" height="411" />
            <p>Discover the beauty of Cabin 2.</p>
          </Link>
        </div>
        <div className="cabin-card">
          <Link to="/cabin3">
            <h2>Cabin 3</h2>
            <img src="https://live.staticflickr.com/65535/53927682845_b566f7a1e5.jpg" alt="Coming soon" width="500" height="493" />
            <p>Explore the wonders of Cabin 3.</p>
          </Link>
        </div>
      </div>
      <section>
        <h2>Welcome to Your Cozy Retreats: The Perfect Glamping Experience</h2>

	<p>Step into the warmth and charm of our cabins, nestled in the heart of historic Nebraska City, the birthplace of Arbor Day. These delightful cabins offers all the comforts of home with a touch of rustic elegance, making it the ideal getaway for those seeking both adventure and relaxation.</p>

	<h2>A Place to Unwind</h2>
	<p>As you approach the cabins, the inviting front porches welcome you to sit and enjoy the peaceful surroundings. Inside, the cozy living rooms beckon with plush seating, a flat-screen TVs, and an electric fireplaces, perfect for unwinding after a day of exploring. Whether you’re curling up with a good book or enjoying a movie night, this space provides the ultimate comfort.</p>

	<h2>Restful Nights Await</h2>
	<p>The bedrooms are a haven of tranquility, featuring soft linens and ample pillows that promise a restful night’s sleep. The natural wood accents and soft lighting create a serene atmosphere, allowing you to wake up refreshed and ready for the day’s adventures.</p>

	<h2>Modern Conveniences in a Rustic Setting</h2>
	<p>Our cabin is equipped with all the modern amenities you need. The full kitchens are ready for you to whip up your favorite meals, complete with a stove, refrigerator, and microwave. You’ll also find a washer and dryer, adding an extra layer of convenience to your stay. The bathrooms are fully functional, featuring a shower and all the essentials you need to start your day.</p>

	<h2>Glamping at Its Best</h2>
	<p>Experience the best of both worlds with our cabins—where glamping meets luxury. Central air and heat ensure your comfort no matter the season, making this cabin a year-round destination.</p>

	<h2>Explore Nebraska City</h2>
	<p>Located close to local events and tourist spots, our cabin is your gateway to all that Nebraska City has to offer. Whether you’re here to explore the rich history, enjoy the scenic parks, or attend one of the many local festivals, you’ll find that everything is just a stone’s throw away.</p>

	<p>Book your stay today and discover why our cabins are the perfect blend of homey comfort and outdoor adventure. We can’t wait to welcome you to your cozy retreat!</p>

      </section>
      <PopupBubble /> 
    </main>
  );
}

export default Home;