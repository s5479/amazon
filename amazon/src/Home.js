import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images.freekaamaal.com/post_images/1569387009.jpg"
          className="home__image"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1"
            title="Red Tape Sneaker Casual Shoes for Men | Soft Cushioned Insole, Slip-Resistance, Dynamic Feet Support"
            image="https://m.media-amazon.com/images/I/6162tcYP6tL._UY695_.jpg"
            price="15"
            rating={5}
          />
          <Product
            id="2"
            title="HP 250 G8 Laptop (11th Gen Intel Core i3-1115G4/8GB DDR4 Ram / 512GB SSD/Windows 10/39.62 cm (15.6 inch) HD/Intel UHD Graphics)"
            image="https://m.media-amazon.com/images/I/71S+S-vt1MS._SX679_.jpg"
            price="600"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title=" Computer and Study Chair for Work from Home Fabric Heavy Duty Metal Base Height Adjustable Chair (Black)"
            image="https://m.media-amazon.com/images/I/51jKA5vIxBL._SX679_.jpg"
            price="100"
            rating={4}
          />
          <Product
            id="4"
            title=" Smartwatch for Boys and Girls with Camera, SMS, 2-Way Calling Kids Watches "
            image="https://m.media-amazon.com/images/I/61UsQZzYIdL._SX679_.jpg"
            price="10"
            rating={5}
          />
          <Product
            id="5"
            title="realme narzo N53 (Feather Gold, 4GB+64GB) 33W | Slimmest Phone in Segment "
            image="https://m.media-amazon.com/images/I/71dEY4Neo3L._SX679_.jpg"
            price="80"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title='ZEBRONICS AC32FHD LED Curved 75Hz 80Cm (32") (81.28 Cm) 1920x1080 Pixels FHD Resolution Monitor with HDMI + VGA Dual Input, Built-in Speaker, Max 250 Nits Brightness, Black'
            image="https://m.media-amazon.com/images/I/813Y1TIZwfL._SX679_.jpg"
            price="212"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
