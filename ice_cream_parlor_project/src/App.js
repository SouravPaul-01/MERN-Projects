import "./App.css";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";
import { Rate } from "antd";
import axios from "axios";
function App() {
  const [typeEffect] = useTypewriter({
    words: ["Strawberry...", "Blueberry...", "Chocolate...", "Evergreen..."],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  // Prices associated with each image
  const prices = [10, 15, 20, 25, 30, 35]; // Example prices for each image
  const images = [
    "https://lazza.co.in/admin/uploads/products/product-2982.svg",
    "https://lazza.co.in/admin/uploads/products/product-3717.svg",
    "https://lazza.co.in/admin/uploads/products/product-9147.svg",
    "https://lazza.co.in/admin/uploads/products/product-9857.svg",
    "https://lazza.co.in/admin/uploads/products/product-5999.svg",
    "https://lazza.co.in/admin/uploads/products/product-5601.svg",
  ];
  const [imageSlide, setImageSlide] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(2);

  // !Email Submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   axios
  //     .post("http://localhost:5000/api/submit-email", { email })
  //     .then((response) => {
  //       toast.success(response.data.message);
  //       setEmail(""); // Clear input field after successful submission
  //     })
  //     .catch((error) => {
  //       console.error("Error submitting email:", error);
  //       toast.error("Failed to submit email");
  //     });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    axios
      .post("http://localhost:5000/api/submit-email", { email, rating }) // Send both email and rating
      .then((response) => {
        toast.success(response.data.message);
        setEmail(""); // Clear the email field after submission
        setRating(2); // Reset the rating to the default value
      })
      .catch((error) => {
        console.error("Error submitting email and rating:", error);
        toast.error("Failed to submit email");
      });
  };
  const addToCart = (price) => {
    setTotalPrice((prevTotal) => prevTotal + price);
  };
  const removeFromCart = (price) => {
    if (totalPrice > 0) {
      setTotalPrice((prevTotal) => prevTotal - price);
    } else {
      toast.error("Nothing to remove!", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  // const removeFromCart = (price) => {
  //   if (typeof price === 'number' && price > 0) {
  //     setTotalPrice((prevTotal) => prevTotal - price);
  //   } else {
  //     console.error('Invalid price:', price);
  //   }
  // };
  // Function to handle ordering and showing final price
  const handleOrder = () => {
    // alert(`Your final order total is: $${totalPrice}`);
    if (totalPrice == 0) {
      Swal.fire("Please Order Something!");
    } else {
      Swal.fire({
        // position: "top-end",
        icon: "success",
        title: "😍Congratulations",
        text: `Your final order total is: $${totalPrice}`,
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };

  // Navigation functions
  const prevSlide = () => {
    setImageSlide(imageSlide === 0 ? images.length - 1 : imageSlide - 1);
  };

  const nextSlide = () => {
    setImageSlide(imageSlide === images.length - 1 ? 0 : imageSlide + 1);
  };
  const RateUs_Response = () => {
    toast.success("Thank you for your feedback!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // ! Animated - { order Now } button js

  // !product section pic change function
  function product_1() {
    document.getElementById("products").style.backgroundColor = "#A06D55";
    document.getElementById("product_section").style.backgroundColor =
      "#A06D55";
    document.getElementById("product_image").src = "./assets/iceCream1.png";
    document.getElementById("product_image").style.left = null;
    document.getElementById("product_image").style.top = null;
    document.getElementById("product_text").innerHTML =
      "<b>Chocolate</b> ice cream  include chocolate chips, cookie dough chunks, caramel swirls, peanut butter cups, brownie pieces, and even fresh fruit like strawberries or bananas.";
    document.getElementById("product_text").style.color = "#fff";
  }

  // ! Have to improve the section pic
  function product_2() {
    document.getElementById("products").style.backgroundColor = "#FECDDC";
    document.getElementById("product_section").style.backgroundColor =
      "#FECDDC";
    document.getElementById("product_image").src = "./assets/iceCream2.png";
    // document.getElementById("product_image").classList.add("fit_in_circle");
    document.getElementById("product_image").style.left = "50px";
    document.getElementById("product_image").style.top = "50px";
    // document.getElementById("product_image").  ---add class to shift the pic
    document.getElementById("product_text").innerHTML =
      "strawberry stick ice cream include fresh strawberry slices, pieces of shortcake or cake crumbs, chocolate chips or chunks, marshmallows, chopped nuts like almonds or pecans, and even a drizzle of balsamic glaze for a unique twist.";
    document.getElementById("product_text").style.color = "#000";
  }

  function product_3() {
    document.getElementById("products").style.backgroundColor = "#2A9949";
    document.getElementById("product_section").style.backgroundColor =
      "#2A9949";
    document.getElementById("product_image").src = "./assets/iceCream3.png";
    document.getElementById("product_image").style.left = null;
    document.getElementById("product_image").style.top = null;
    document.getElementById("product_text").innerHTML =
      "The Evergreen Cone is a combination of a crispy cone and creamy ice cream. This classic treat appeals to all ages with its simple yet satisfying flavors and textures. Whether enjoyed plain ,the Evergreen Cone continues to be a timeless favorite, evoking feelings of nostalgia and pure joy with every bite.";
    document.getElementById("product_text").style.color = "#fff";
  }

  function product_4() {
    document.getElementById("products").style.backgroundColor = "#A470B6";
    document.getElementById("product_section").style.backgroundColor =
      "#A470B6";
    document.getElementById("product_image").src = "./assets/iceCream4.png";
    document.getElementById("product_image").style.left = "50px";
    document.getElementById("product_image").style.top = "50px";
    document.getElementById("product_text").innerHTML =
      "Jar ice creams are individual servings presented in glass jars, featuring layers of various ice cream flavors and toppings like chocolate sauce, caramel, nuts, and cookie crumbles. They offer a convenient and customizable dessert option, perfect for those seeking a variety of flavors in one serving.";
    document.getElementById("product_text").style.color = "#fff";
  }

  function product_5() {
    document.getElementById("products").style.backgroundColor = "#daeeff";
    document.getElementById("product_section").style.backgroundColor =
      "#daeeff";
    document.getElementById("product_image").src = "./assets/iceCream5.png";
    document.getElementById("product_image").style.left = null;
    document.getElementById("product_image").style.top = null;
    document.getElementById("product_text").innerHTML =
      "Blueberry ice cream pairs wonderfully with additions like fresh blueberries (for an extra burst of flavor and texture), granola or oat clusters for some crunch, lemon zest for a citrus kick, white chocolate chips for sweetness, and a hint of lavender for a floral note that complements the blueberries beautifully.";
    document.getElementById("product_text").style.color = "#000";
  }

  function product_6() {
    document.getElementById("products").style.backgroundColor = "#F3CB60";
    document.getElementById("product_section").style.backgroundColor =
      "#F3CB60";
    document.getElementById("product_image").src = "./assets/iceCream6.png";
    document.getElementById("product_image").style.left = "50px";
    document.getElementById("product_image").style.top = "50px";
    document.getElementById("product_text").innerHTML =
      "The family cone is a large serving of ice cream meant for sharing, filled with multiple scoops of creamy goodness. Toppings such as whipped cream, chocolate sauce, and sprinkles add extra indulgence. ideal for gatherings, it brings joy and sweetness to any occasion.";
    document.getElementById("product_text").style.color = "#000";
  }

  // ! order section
  // function order() {
  //   let x = document.getElementById("available_items").value;
  //   let y = document.getElementById("quantity_of_item").value;
  //   let result = x * y;
  //   document.getElementById("shop_bill_text").innerHTML =
  //     "Your Total Bill is : " + result + " $";
  //   setTimeout(function () {
  //     document.getElementById("shop_bill_text").innerHTML =
  //       "your order is placed";
  //   }, 4000);
  //   setTimeout(function () {
  //     document.getElementById("shop_bill_text").innerHTML = "";
  //   }, 8000);
  // }

  return (
    <>
      <header className="header">
        <div className="navbar">
          <div className="logo">
            <img src="./assets/logo.png" alt="" />
          </div>
          <div className="nav-elements">
            <ul>
              <li>
                {/* <a href="#home">Home</a> */}
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  delay={100}
                  style={{ cursor: "pointer" }}
                >
                  Home
                </Link>
              </li>
              <li>
                {/* <a href="#products">Products</a> */}
                <Link
                  to="products"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={90}
                  duration={500}
                  delay={100}
                  style={{ cursor: "pointer" }}
                >
                  Products
                </Link>
              </li>
              <li>
                {/* <a href="#shop">Shop</a> */}
                <Link
                  to="shop"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={10}
                  duration={500}
                  delay={100}
                  style={{ cursor: "pointer" }}
                >
                  Shop
                </Link>
              </li>
              <li>
                {/* <a href="#about_us">About Us</a> */}
                <Link
                  to="about_us"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={90}
                  duration={500}
                  delay={100}
                  style={{ cursor: "pointer" }}
                >
                  About Us
                </Link>
              </li>
              <li>
                {/* <a href="#contact_us">Contact us</a> */}
                <Link
                  to="contact_us"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={90}
                  duration={500}
                  delay={100}
                  style={{ cursor: "pointer" }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* <!-- main content --> */}
      {/* <!-- home --> */}
      <section className="home" id="home">
        <div className="text">
          <h1>Explore your new favorite</h1>
          <h2>
            with <span id="element">{typeEffect}</span>
            <span>
              <Cursor />
            </span>
          </h2>
        </div>
        <div className="pic">
          <div className="circle">
            <img src="./assets/HomePic.png" alt="" />
          </div>
        </div>
      </section>

      {/* <!-- !Products --> */}
      {/* <!-- product pic section --> */}
      <section className="product_section" id="product_section">
        <div className="products" id="products">
          <div className="product_pic">
            <div className="product_circle">
              <img
                id="product_image"
                src="./assets/iceCream5.png"
                alt=""
                className="img_reverse"
              />
            </div>
          </div>
          {/* <!-- product text section --> */}
          <div className="product_text1">
            <div className="iceCreamText">
              <img
                src="./assets/ice_cream_text .png"
                alt="iceCream"
                className="product_pic_img"
              />
            </div>
            <p id="product_text">
              Blueberry ice cream pairs wonderfully with additions like fresh
              blueberries (for an extra burst of flavor and texture), granola or
              oat clusters for some crunch, lemon zest for a citrus kick, white
              chocolate chips for sweetness, and a hint of lavender for a floral
              note that complements the blueberries beautifully.
            </p>
          </div>
        </div>
        {/* <!-- product varieties --> */}
        <div className="product_varieties">
          <div className="product_varieties_border" onMouseOver={product_1}>
            <span className="products_varieties_pics product-1">
              <img src="./assets/iceCream1.png" alt="iceCream1" />
            </span>
          </div>

          <div className="product_varieties_border" onMouseOver={product_2}>
            <span className="products_varieties_pics product-2">
              <img src="./assets/iceCream2.png" alt="stick_iceCream2" />
            </span>
          </div>

          <div className="product_varieties_border" onMouseOver={product_3}>
            <span className="products_varieties_pics product-3">
              <img src="./assets/iceCream3.png" alt="iceCream3" />
            </span>
          </div>

          <div className="product_varieties_border">
            <span
              className="products_varieties_pics product-4"
              onMouseOver={product_4}
            >
              <img src="./assets/iceCream4.png" alt="jar_icecap_iceCream4" />
            </span>
          </div>

          <div className="product_varieties_border" onMouseOver={product_5}>
            <span className="products_varieties_pics product-5">
              <img src="./assets/iceCream5.png" alt="" />
            </span>
          </div>

          <div className="product_varieties_border" onMouseOver={product_6}>
            <span className="products_varieties_pics product-6">
              <img src="./assets/iceCream6.png" alt="iceCream6" />
            </span>
          </div>
        </div>
      </section>

      {/* <!--! Shop --> */}
      <section className="shop" id="shop">
        <h1 className="shop_heading">Order Now!</h1>
        {/* <!-- shop_order Section --> */}
        {/* <!-- available items --> */}
        <div className="shop_selection_box">
          {/* <div className="shop_order">
            <div className="available_items">
              <label htmlFor="available_items">Available Items</label>
              <select name="available_items" id="available_items">
                <option value="10">Butter scotch - $ 10</option>
                <option value="20">Vanilla - $ 20</option>
                <option value="30">Blueberry - $ 30 </option>
                <option value="40">Raspberry - $ 40</option>
                <option value="50">Strawberry - $50</option>
                <option value="60">Chocolate - $60</option>
              </select>
            </div>

            <div className="quantity_of_item">
              <label htmlFor="quantity_of_item">Quantity of Item</label>
              <input
                type="number"
                name="quantity_of_item"
                id="quantity_of_item"
              />
            </div>
            <p className="shop_bill_text" id="shop_bill_text"></p>
            <button type="submit" onClick={order}>
              Order Now
            </button>
          </div> */}

          <div className="slider">
            {/* <div className="left-arrow" onClick={prevSlide}>
              {"<"}
            </div> */}
            <div className="arrows prev" onClick={prevSlide}></div>
            {images.map(
              (image, index) =>
                imageSlide === index && (
                  <div className="slide" key={index}>
                    <img src={image} alt="carousel" className="slider-image" />
                    <div className="image-details">
                      <p>Price: ${prices[index]}</p>
                      {/* <button onClick={() => addToCart(prices[index])}>
                        Add to Cart
                      </button> */}
                      {/* !2nd start */}
                      <button
                        class="CartBtn"
                        onClick={() => addToCart(prices[index])}
                      >
                        <span class="IconContainer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 576 512"
                            fill="rgb(17, 17, 17)"
                            class="cart"
                          >
                            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                          </svg>
                        </span>
                        <p class="text">Add</p>
                      </button>
                      <button
                        class="CartBtn"
                        onClick={() => removeFromCart(prices[index])}
                      >
                        <span class="IconContainer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 576 512"
                            fill="rgb(17, 17, 17)"
                            class="cart"
                          >
                            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                          </svg>
                        </span>
                        <p class="text">Remove</p>
                      </button>

                      {/* 2nd end  */}
                      {/* 3nd start  */}
                      {/* <button class="card-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path>
                          <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                          <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                          <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path>
                        </svg>
                      </button> */}
                      {/* 3nd end */}
                    </div>
                  </div>
                )
            )}
            {/* <div className="right-arrow" onClick={nextSlide}>
              ⮕
            </div> */}
            <div class="arrows next" onClick={nextSlide}></div>
          </div>
          <div className="cart">
            <h2 className="shift_to_up1">Cart</h2>
            <p className="shift_to_up2"> Total Price: ${totalPrice}</p>
            {/* <button
              className="OrderNow button"
              onClick={handleOrder}
              // style={{ position: "absolute", top: 236 }}
            >
              Order Now
            </button> */}
            {/* NEW Try */}
            <button onClick={handleOrder} class="button type1">
              <span class="btn-txt">Order NOW</span>
            </button>
          </div>
        </div>

        {/* <!-- shop_pic Section --> */}
        <div className="shop_pic">
          <img src="./assets/shop_pic.png" alt="" />
        </div>
      </section>

      {/* <!-- About Us  --> */}
      <section className="about_us" id="about_us">
        <div className="about_us_heading">
          <img src="./assets/WeCareAboutYou!.png" alt="" />
        </div>
        <div className="about_upper_section">
          <div className="upper_left">
            <img className="milk_pic" src="./assets/milk_pic.png" alt="" />
          </div>
          <div className="upper_right">
            At<b> § ice cream parlor </b>, we believe in the simple pleasure of
            indulging in delicious, handcrafted ice cream. Established with a
            passion for quality and flavor, our parlor has been serving up
            smiles and sweet treats to our community for<b> 2020-2024</b> years.
          </div>
        </div>
        <div className="about_lower_section">
          <div className="lower_left">
            <p className="about_textSquiz">
              Our journey began with a dream to create the perfect scoop of ice
              cream – rich, creamy, and bursting with flavor. Using only the
              finest ingredients and time-honored recipes, we craft each batch
              of ice cream with care and attention to detail, ensuring that
              every bite is a moment of pure delight.
              <i>
                Thank you for choosing § ice cream parlor as your go-to
                destination for all things sweet. We look forward to serving you
                and making your ice cream dreams come true!
              </i>
            </p>
          </div>
          <div className="lower_right">
            <img
              className="about_us_lower_right_pic"
              src="./assets/aboutUsSectionPic.png"
              alt="about_us_lower_right"
            />
          </div>
        </div>
      </section>
      {/* <!-- Divider --> */}
      <div className="divider">
        <img src="./assets/divider.png" alt="" />
      </div>

      {/* <!-- Contact Us --> */}

      <section className="contact_us" id="contact_us">
        <div className="contact_us_pic">
          <img
            className="last_img"
            src="./assets/contact_us_pic.png"
            alt="contact_us_pic"
          />
        </div>
        {/* <!-- contact us text and links  --> */}
        <div className="contact_us_links">
          <div className="email_input">
            <form onSubmit={handleSubmit}>
              {/* <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
              /> */}
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                id="contact_us_button"
                type="submit"
                className="contact_us_button"
              >
                Contact Us
              </button>
            </form>
          </div>
          <h1
            style={{
              color: "red",
              position: "relative",
              right: "220px",
              top: "40px",
              scale: "1.7",
            }}
          >
            Rate US :
          </h1>
          <Rate
            allowClear={false}
            defaultValue={rating}
            tooltips={["Bad", "Normal", "Good", "Very Good", "Excellent"]}
            onChange={(value) => setRating(value)} // Set the rating value
            style={{
              color: "green",
              position: "relative",
              top: "55px",
              right: "180px",
              scale: "1.5",
            }}
          />

          {/* <!-- links --> */}
          <div className="link_pics">
            <img src="./assets/insta.png" alt="insta" />
            <img src="./assets/facebook.png" alt="facebook" />
            <img src="./assets/twitter.png" alt="twitter" />
          </div>
        </div>
      </section>
      {/* <!-- Footer --> */}
      <footer className="footer">@ all right reserved</footer>
      {/* <script>
    var typed = new Typed('#element', {
      strings: ['<i>Strawberry.</i>', '<i>Blueberry.</i>', '<i>Chocolate.</i>', '<i>Evergreen.</i>'],
      typeSpeed: 50,
    });
  </script> */}
      <ToastContainer />
    </>
  );
}
export default App;
