import React from 'react';
import './Attractions.css';  // Add this line
import PopupBubble from '../components/PopupBubble';

const attractions = [
  {
    title: "Arbor Lodge State Historical Park",
    image: "https://outdoornebraska.gov/wp-content/uploads/2023/02/Arbor_Lodge_ARBL01_EF0001_05_scratch_removed_rgb_1440x960-1024x683.jpg",
    description: "Home of J. Sterling Morton, founder of Arbor Day. Tour the mansion and explore the beautiful grounds.",
    link: "http://outdoornebraska.gov/arborlodge/"
  },
  {
    title: "Arbor Day Farm Tree Adventure",
    image: "https://nebraskacity.com/wp-content/uploads/2014/02/DSC_7069-690x460.jpg",
    description: "Experience nature, history, and education at this working farm and orchard.",
    link: "https://www.arbordayfarm.org/"
  },
  {
    title: "Kimmel Orchard & Vineyard",
    image: "https://nebraskacity.com/wp-content/uploads/2014/02/Kimmel-Sign1-480x320.jpg",
    description: "Enjoy fresh fruits, wines, and ciders at this historic orchard and vineyard.",
    link: "https://www.kimmelorchard.org/"
  },
  {
    title: "Missouri River Basin Lewis & Clark Interpretive Trail & Visitor Center",
    image: "https://lewisandclarkvisitorcenter.org/wp-content/uploads/2017/05/mrb-center-header.jpg",
    description: "Learn about the Lewis and Clark expedition and the natural history of the Missouri River.",
    link: "https://lewisandclarkvisitorcenter.org/"
  },
  {
    title: "Mayhew Cabin",
    image: "https://mayhewcabin.org/wp-content/uploads/2019/01/mayhew-cabin-with-john2-1-1024x768.jpg",
    description: "Visit Nebraska's only recognized Underground Railroad site and learn about its history.",
    link: "http://www.mayhewcabin.org/"
  },
  {
    title: "Nebraska City Museums",
    image: "https://images.squarespace-cdn.com/content/v1/5abe9bc45b409b22d0de6797/1551144252878-W43U8L3EEPVOK6HEKJ5N/NCMA+Twitter+Banner.jpg?format=2500w",
    description: "The Nebraska City Museum Association coordinates the efforts of museums in Nebraska City and Otoe County.",
    link: "https://www.nebraskacitymuseums.org"
  },
  {
    title: "Table Creek Golf Course",
    image: "https://s3-us-west-2.amazonaws.com/fore92/videos/thumbnail_images/000/000/594/original/Clubhouse_3-2.jpg?1580960999",
    description: "A well-manicured 6,253 yard course with Bent Grass tees and greens, suitable for players of all levels.",
    link: "https://www.dormienetwork.com/arborlinks/"
  },
  {
    title: "ArborLinks",
    image: "https://www.tablecreek.com/images/slideshows/sub_banner_1.jpg",
    description: "An Arnold Palmer-designed golf course spanning 300+ acres of pure golf in the Nebraska countryside.",
    link: "https://www.tablecreek.com/"
  },
  {
    title: "Steinhart Aquatic Center",
    image: "https://nebraskacityne.gov/wp-content/uploads/slider2/SteinhartAquaticCenter.jpeg",
    description: "Provides summer fun with a zero-depth entry pool, lazy river, water slides and diving boards.",
    link: "https://nebraskacityne.gov/steinhart-aquatic-center/"
  },
  {
    title: "KHN Center For The Arts",
    image: "https://www.khncenterforthearts.org/sites/default/files/styles/page_image__462px_wide_/public/permanent%20collection/hart_residency.jpg?itok=54349jr9",
    description: "Since 2001, KHN has awarded over 1,000 residencies to artists from across the country and around the world.",
    link: "https://www.khncenterforthearts.org/"
  },
  {
    title: "Waubonsie State Park",
    image: "https://d3qvqlc701gzhm.cloudfront.net/full/d4795e30b8a529f078a754e9d014d7981a911fb20a91de3c48ba8ef8a8a46ffe.jpg",
    description: "Enjoy hiking, camping, and scenic views at this nearby state park in Iowa.",
    link: "https://www.iowadnr.gov/Places-to-Go/State-Parks/Iowa-State-Parks/Waubonsie-State-Park"
  },
  {
    title: "Wildwood Golf Course",
    image: "https://nebraskacity.com/wp-content/uploads/2014/02/wildwoodgolf2-690x460.jpg",
    description: "Nebraska City's oldest golf course with beautiful trees and fairways, located near Lied Lodge and Conference Center.",
    link: "https://golfnebraskacity.com/"
  },
  {
    title: "Steamboat Trace Bicycle Trail",
    image: "https://nebraskacity.com/wp-content/uploads/2014/05/steamboat-trace-690x460.jpg",
    description: "21 miles of abandoned railroad corridor paralleling the Missouri River, accessible for wheelchairs and strollers.",
    link: "https://www.nemahanrd.org/trail.htm"
  },
  {
    title: "Enchanted Arboretum",
    image: "https://nebraskacity.com/wp-content/uploads/2016/06/e-arbor-covor-690x460.jpg",
    description: "71 stylized tree sculptures designed by professional artists and Nebraska City students, displayed throughout the city.",
    link: "https://enchantedarboretum.org/"
  },
  {
    title: "Apple House Market",
    image: "https://www.arbordayfarm.org/images/figure/figure-apple-house.png",
    description: "Shop for tasty treats, nature-inspired gifts, and other delightful reminders of your time at Arbor Day Farm.",
    link: "https://www.arbordayfarm.org/activities/shopping.cfm"
  }
];

function Attractions() {
  return (
    <main role="main">
      <h1>Attractions in Nebraska City</h1>
      <p>Discover the rich history and natural beauty of Nebraska City with these amazing attractions!</p>
      <div className="attraction-list">
        {attractions.map((attraction, index) => (
          <div key={index} className="attraction-card">
            <h2>{attraction.title}</h2>
            <img src={attraction.image} alt={attraction.title} />
            <p>{attraction.description}</p>
            <a href={attraction.link} target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
        ))}
      </div>
      <section id="chamber-of-commerce">
        <h2>Nebraska City Chamber of Commerce</h2>
        <p>For more information about local businesses, events, and attractions, visit the Nebraska City Chamber of Commerce:</p>
        <a href="https://nebraskacity.com/" target="_blank" rel="noopener noreferrer">Nebraska City Chamber of Commerce</a>
      </section>
     <PopupBubble />
    </main>
  );
}

export default Attractions;