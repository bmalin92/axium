import React, { Component } from "react";
import ProductPage from "../product-page/product-page";
import Submenu from "../submenu/submenu";
import "./main.css";

class Main extends Component {
  render() {
    const item = {
      id: 1,
      name: "Tough Mojo Jacket",
      image: "./assets/tough-mojo-jacket-img1.png",
      secondaryImage: "./assets/tough-mojo-jacket-img2.png",
      imageDescription: "Tough Mojo Jacket picture",
      specs: [
        "300 grams of Primaloft One Insulation",
        "Schouller microfiber shell",
        "Diagonal quilting",
        "Microfiber ripstop liner",
        "Zipper garage at collar",
        "Anchored bottom-hem adjusters",
        "3-in-1 front pockets",
        "Zippered chest pocket",
        "Two interior zippered pockets",
        "Made in the Phillippines"
      ],
      sizes: ["Small", "Medium", "Large"],
      colors: ["Grey", "Navy"],
      itemBio: [
        "Our most insulated jacket to date, the city-styled Highline is designed to keep you warm during the deep freeze of winter",
        "With 300 grams of PimraLoft ONE insulation, the Highline offers incredible heat retention while remaining form fitting and low volume - essentially all the warmth of a puffer jacket without all the puff. Its outer shell is made from a water-resistant Schoeller microfiber fabric that has been diagonally quilted, while its inside liner is made from a silky-soft microfiber ripstop nylon.",
        "The Highline features a zipper garage to prevent a cold metal zipper from pressing against your neck, non-quilted side panels and underarms for a sleeker fit, and anchored bottom-hem adjusters for a snug fit. It has two uniquely designed 3-in-1 front pockets, which include a top-zippered entrance, a drop pocket with donut snap, and a side hand-warmer. Additional storage can be found in its exterior chest pocket and two interior zippered pockets."
      ]
    };

    const itemReviews = [
      {
        id: 1,
        authorName: "Shaun White",
        authorPicture: "./assets/reviewer1.png",
        title: "This Thing is a monster!",
        date: "08/20/2013",
        stars: [
          <img alt="" key={1} src="./assets/star.png" />,
          <img alt="" key={2} src="./assets/star.png" />,
          <img alt="" key={3} src="./assets/star.png" />,
          <img alt="" key={4} src="./assets/star.png" />
        ],
        review: `I picked up this jacket for use in San Francisco and the surrounded Bay Area (Lake Tahoe included). I use this jacket for everything. It is often cloudy/drizzly/cold in SF and this jacket deals with it all. I have not tried in heavy rain, but in drizzly conditions, the DWR treatment defininitely makes small drops bead right off. It also has a nice fleece-like liner inside and keeps me really warm down to 40 degree or so. In Tahoe, I have used this with a shirt or base layer, mid layer fleece, and then this jacket. I don't get cold too easily but in temps 20's - 30's I felt great (with some gloves and a beanie of course). I have not tried it skiing yet because I snowboard and to be honest it wouldn't be quite large enough (I like baggier snowboard clothing). But I have seen people who wear softshells skiing all the time. I also use this when I go to work and want a jacket that dresses up nice. With slacks, nice shoes, and a button up it looks great. I am 6' and about 190 lbs (34 in arms) and the large fits perfect. The pockets are well designed as well. The soft shell is the new "do-everything" jacket; wind/water resistent but also maleable and comfy for wearing anywhere. I highly recommend this jacket.`
      },
      {
        id: 2,
        authorName: "Jennie Loren",
        authorPicture: "./assets/reviewer2.png",
        title: "Luv it so much I bought 2!",
        date: "01/12/2013",
        stars: [
          <img alt="" key={1} src="./assets/star.png" />,
          <img alt="" key={2} src="./assets/star.png" />,
          <img alt="" key={3} src="./assets/star.png" />
        ],
        review: `Loved this jacket so much from previous years I decided to buy a second in a different color. I'm tall and fairly slender and its tailored silhouette fits me nicely. For perspective I'm around 6'3" ~150 lbs. and a large does the trick. I'll wear this for all of fall and into the winter. Despite not being bulky or baggy I find it good and warm for anything down to 40 degrees and perhaps lower if you're keeping up on your layering. For weather at freezing or below you should consider something heavier.`
      }
    ];

    const clothing = ["Outerwear", "Hiking Shoes / Boots", "Gloves", "Hats"];

    return (
      <div className="site">
        <header id="site-header" role="banner">
          <div className="content-container" id="header-content">
            <img
              className="logo"
              src="./assets/axium-logo-main.png"
              alt="Axium logo"
            />
            <div className="header-menu">
              <div className="header-search-container">
                <form>
                  <input
                    className="header-search"
                    type="text"
                    placeholder="SEARCH FOR GEAR"
                  />
                  <button type="submit" name="submit">
                    <img alt="search button" src="./assets/search-icon.png" />
                  </button>
                </form>
              </div>
              <div className="header-links">
                <a href="www.facebook.com">
                  <img
                    className="facebook-icon"
                    src="./assets/fb-icon.png"
                    alt="Facebook link"
                  />
                </a>
                <a hred="www.twitter.com">
                  <img
                    className="twitter-icon"
                    src="./assets/twitter-icon.png"
                    alt="Twitter link"
                  />
                </a>
                <a>My Account</a> |
                <a>Cart</a> |
                <a>Logout</a>
              </div>
            </div>
          </div>
        </header>

        <nav id="navigation">
          <ul id="nav-bar">
            <li className="nav-item nav-camping">
              Camping
              <img
                alt=""
                className="arrow"
                src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg"
              />
            </li>
            <hr />
            <li className="nav-item nav-clothing">
              Clothing
              <img
                alt=""
                className="arrow"
                src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg"
              />
              <Submenu
                classname="submenu-component clothing"
                items={clothing}
              />
            </li>
            <hr />
            <li className="nav-item nav-fishing">
              Fishing
              <img
                alt=""
                className="arrow"
                src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg"
              />
            </li>
            <hr />
            <li className="nav-item nav-hiking">
              Hiking
              <img
                alt=""
                className="arrow"
                src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg"
              />
            </li>
            <hr />
            <li className="nav-item nav-biking">
              Biking
              <img
                alt=""
                className="arrow"
                src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg"
              />
            </li>
          </ul>
        </nav>

        <main role="main">
          <ProductPage item={item} reviews={itemReviews} />
        </main>

        <footer role="contentinfo" id="site-footer">
          <div className="content-container" id="footer-content">
            <img
              className="logo"
              src="./assets/axium-logo-small.png"
              alt="Axium logo"
            />
            <div className="footer-menu">
              <div className="footer-links">
                <a>About Us</a> |
                <a>Contact Us</a> |
                <a>Privacy Policy</a> |
                <a>Terms of Service</a> |
                <a>Site Map</a>
                <a href="www.facebook.com">
                  <img
                    className="facebook-icon"
                    src="./assets/fb-icon.png"
                    alt="Facebook link"
                  />
                </a>
                <a hred="www.twitter.com">
                  <img
                    className="twitter-icon"
                    src="./assets/twitter-icon.png"
                    alt="Twitter link"
                  />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Main;
