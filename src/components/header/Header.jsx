import React from "react";

const Header = () => {
  return (
    <div>
      <div className="btn__div ">
        <h1 className="info__title">
        Healthy
          meals, zero fuss
        </h1>
        <p className="info__title__p">
          Discover eight quick, whole-food recipes that you can cook tonight—no
          processed junk, no guesswork.
        </p>
      </div>
      <div className="btn__div">
        <button className="btn btn__start">Start exploring</button>
      </div>
      <div className="info__image">
        <div className="pc">
          <picture>
            {/* Large screens */}
            <source
              srcSet="/images/image-home-hero-large.webp"
              media="(min-width: 768px)"
              type="image/webp"
            />

            {/* Small screens */}
            <source
              srcSet="/images/image-home-hero-small.webp"
              media="(max-width: 767px)"
              type="image/webp"
            />

            {/* Fallback */}
            <img
              src="/images/image-home-hero-small.webp"
              alt="Home Hero"
              className="picture"
            />
          </picture>
        </div>
          <img className="img" src="/images/pattern-squiggle-1.svg" alt="" />
      </div>
    </div>
  );
};

export default Header;
