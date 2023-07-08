import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [person, setperson] = useState(0);
  const { id, name, image, job, text } = people[person];
  const generateRandom = () => {
    const number = Math.floor(Math.random() * people.length);
    setperson(number);
  };

  const forwardBtn = () => {
    if (person >= people.length - 1) {
      setperson(0);
      return;
    }
    setperson(person + 1);
  };
  const backwardBtn = () => {
    if (person <= 0) {
      setperson(people.length - 1);
      return;
    }
    setperson(person - 1);
  };
  return (
    <article key={id} className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>

      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={backwardBtn}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={forwardBtn}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={() => generateRandom()}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
