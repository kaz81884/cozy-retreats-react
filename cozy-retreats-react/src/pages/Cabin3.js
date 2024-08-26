import React from 'react';
import { Link } from 'react-router-dom';
import './Cabin3.css'; 

function Cabin3() {
  return (
    <main role="main">
      <h1>Cabin 3</h1>
      
      <img 
        src="https://live.staticflickr.com/65535/53927895385_ee2dc417cc.jpg" 
        alt="come back later" 
        width="500" 
        height="499"
      />

      <h2>While you wait check out our other two cabins</h2>
      
      <div>
        <a 
          href="https://www.airbnb.com/rooms/1211886773850653292?source_impression_id=p3_1723730895_P3zC6-EoVnz5qOYj" 
          className="book-btn" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Book Cabin One on Airbnb
        </a>
        <a 
          href="https://www.airbnb.com/rooms/924192303275061613?source_impression_id=p3_1723832791_P3O0xjUdV-NuTcsf" 
          className="book-btn" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Book Cabin Two on Airbnb
        </a>
      </div>

      <Link to="/" className="back-link">Back to all cabins</Link>
    </main>
  );
}

export default Cabin3;
