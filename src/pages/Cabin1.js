// src/pages/Cabin1.js
import React from 'react';
import Slideshow from '../components/Slideshow';
import PopupBubble from '../components/PopupBubble';

function Cabin1() {
  const images = [
     { src: "https://live.staticflickr.com/65535/53926975918_6ce4daea0a_z.jpg", alt: "Cabin1 Relax" },
     { src: "https://live.staticflickr.com/65535/53926906431_c3ced6518d_z.jpg", alt: "Cabin 1 Exterior1" },
     { src: "https://live.staticflickr.com/65535/53925835382_35f5e10776_z.jpg", alt: "Cabin 1 Porch1" },
     { src: "https://live.staticflickr.com/65535/53925838292_19b3fa004a_z.jpg", alt: "Cabin 1 LivingRoom1" },
     { src: "https://live.staticflickr.com/65535/53926886721_fd1e3f9ddd_z.jpg", alt: "Cabin 1 LivingRoom2" },
     { src: "https://live.staticflickr.com/65535/53926987898_4136bfed00_z.jpg", alt: "Cabin 1 Kitchen2" },
     { src: "https://live.staticflickr.com/65535/53927181450_be14e4ab26_z.jpg", alt: "Cabin 1 Dinning1" },
     { src: "https://live.staticflickr.com/65535/53926729636_91f819ea6f_z.jpg", alt: "Cabin 1 Dinning2" },
     { src: "https://live.staticflickr.com/65535/53927181505_ae83a6c3a4_z.jpg", alt: "Cabin 1 Dinning3" },
     { src: "https://live.staticflickr.com/65535/53925992782_5514d0962f_z.jpg", alt: "Cabin 1 Dinning4" },
     { src: "https://live.staticflickr.com/65535/53927083039_6159d8e05f_z.jpg", alt: "Cabin 1 Coffee" },
     { src: "https://live.staticflickr.com/65535/53926729631_b8e82042b8_z.jpg", alt: "Cabin 1 Bedroom2" },
     { src: "https://live.staticflickr.com/65535/53927082984_30cfd8a6f8_z.jpg", alt: "Cabin 1 Bedroom4" },
     { src: "https://live.staticflickr.com/65535/53926729621_538e4fd58b_z.jpg", alt: "Cabin 1 Bedroom1" },
     { src: "https://live.staticflickr.com/65535/53926975923_f426ef0d7e_z.jpg", alt: "Cabin 1 Bedroom3" },
     { src: "https://live.staticflickr.com/65535/53927082989_497f2601a5_z.jpg", alt: "Cabin 1 Bathroom1" },
     { src: "https://live.staticflickr.com/65535/53925835412_972b32f1e0_z.jpg", alt: "Cabin 1 Bathroom2" },

  ];

  return (
    <main role="main">
      <h1>Cabin 1</h1>
      <Slideshow images={images} />
      <section>
        <h2>Welcome to Your Cozy Cabin Retreat</h2>
        <p>Nestled in a tranquil setting, our charming one-bedroom cabin offers the perfect escape for those seeking comfort and relaxation. With its inviting atmosphere, this cabin is thoughtfully designed to be your home away from home, ensuring every stay is both comfortable and memorable.</p>
        {/* Add more content here */}
      </section>
      <a href="https://www.airbnb.com/rooms/1211886773850653292?source_impression_id=p3_1723730895_P3zC6-EoVnz5qOYj" className="book-btn" target="_blank" rel="noopener noreferrer">Book on Airbnb</a>
    <PopupBubble />
    </main>
  );
}

export default Cabin1;