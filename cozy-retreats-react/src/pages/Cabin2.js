// src/pages/Cabin2.js
import React from 'react';
import Slideshow from '../components/Slideshow';

function Cabin2() {
  const images = [
	{ src: "https://live.staticflickr.com/65535/53927654575_e90e82a82c.jpg", alt: "Cabin 2 Entertainment1" },
	{ src: "https://live.staticflickr.com/65535/53927204271_2a6953e5c8.jpg", alt: "Cabin 2 Exterior1" },
	{ src: "https://live.staticflickr.com/65535/53927554534_951132ca39.jpg", alt: "Cabin 2 LivingRoom1" },
	{ src: "https://live.staticflickr.com/65535/53927654610_bfe2747bab.jpg", alt: "Cabin 2 LivingRoom2" },
	{ src: "https://live.staticflickr.com/65535/53927554529_ff20d56d40.jpg", alt: "Cabin 2 LivingRoom3" },
	{ src: "https://live.staticflickr.com/65535/53927554564_aff9eed4b3.jpg", alt: "Cabin 2 LivingRoom4" },
	{ src: "https://live.staticflickr.com/65535/53927448388_cac857e1a5.jpg", alt: "Cabin 2 Kitchen1" },
	{ src: "https://live.staticflickr.com/65535/53927448393_7fa62045c5.jpg", alt: "Cabin 2 Kitchen2" },
	{ src: "https://live.staticflickr.com/65535/53927654595_3d26650186.jpg", alt: "Cabin 2 Kitchen3" },
	{ src: "https://live.staticflickr.com/65535/53927554519_ce8756d635.jpg", alt: "Cabin 2 Bedroom2" },
	{ src: "https://live.staticflickr.com/65535/53927554524_dd7be5dcde.jpg", alt: "Cabin 2 Bedroom3" },
	{ src: "https://live.staticflickr.com/65535/53927654600_91b6bb106b.jpg", alt: "Cabin 2 Bedroom4" },
	{ src: "https://live.staticflickr.com/65535/53927654570_65ce6d1f85.jpg", alt: "Cabin 2 Batchroom1" },
	{ src: "https://live.staticflickr.com/65535/53926306732_e68b329974.jpg", alt: "Cabin 2 Bathroom2" },
  ];

  return (
    <main role="main">
      <h1>Cabin 2</h1>
      <Slideshow images={images} />
      <section>
        <h2>Welcome to the Man Cave Retreat</h2>
        <p>Escape to our second cabin in Nebraska City, a perfect blend of comfort, charm, and a hint of whimsy. Designed as your ultimate manly retreat, this one-bedroom cabin offers everything you need for a relaxing getaway.</p>
        {/* Add more content here */}
      </section>
      <a href="https://www.airbnb.com/rooms/924192303275061613?source_impression_id=p3_1723832791_P3O0xjUdV-NuTcsf" className="book-btn" target="_blank" rel="noopener noreferrer">Book on Airbnb</a>
    </main>
  );
}

export default Cabin2;