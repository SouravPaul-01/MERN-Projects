import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStarCount } from "./redux/starSlice";
import "./App.css";

export default function App() {
  const dispatch = useDispatch();
  const rating = useSelector((state) => state.star.count);
  const [hover, setHover] = useState(null);
  const [totalStars, setTotalStars] = useState(5);
  const [currentRating, setCurrentRating] = useState(null);

  const handleChange = (e) => {
    setTotalStars(parseInt(e.target.value, 10) || 5);
  };

  const handleSubmit = () => {
    dispatch(setStarCount(currentRating));
    alert("Thanks for rating!" + rating);
  };

  return (
    <div className="App">
      <h1>Star rating</h1>
      {[...Array(totalStars)].map((star, index) => {
        const starValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={starValue}
              onChange={() => setCurrentRating(starValue)}
            />
            <span
              className="star"
              style={{
                color:
                  starValue <= (hover || currentRating) ? "#ffc107" : "#e4e5e9",
              }}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(null)}
            >
              &#9733;
            </span>
          </label>
        );
      })}
      <br />
      <br />
      <p>Your rating is: {currentRating}</p>
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <br />
      <label style={{ fontWeight: 400 }}>
        Number of stars:
        <input
          style={{ marginLeft: "12px", maxWidth: "50px" }}
          onChange={handleChange}
          value={totalStars}
          type="number"
          min={1}
        />
      </label>
    </div>
  );
}
