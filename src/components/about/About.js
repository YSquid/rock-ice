import React from "react";
import "./About.css";
import AboutHero from '../../assets/About_hero.png'

function About() {
  return (
    <section className="About__container">
      <div className="About__hero">
        <img src={AboutHero}></img>
      </div>
      <div className="About__text">
        <p>
          “Why Rock & Ice” you ask, it’s simple. Mother nature’s 3 elements that
          we just love to play with Rock, Ice and Electricity. When we are done
          with your electrical installation you can find us rock-climbing on BC
          pristine rock. Out for a water ski on the Shuswap’s and Okanagan’s
          finest lakes. Or playing in the beautiful back country on our
          Snowmobiles and snow boards.
        </p>

        <h2>Electrical Excellence</h2>
        <p>
          At Rock & Ice Electric, we believe in honesty, integrity and providing
          services and workmanship that are far above industry standards . We
          take pride in every job we do, and we believe that no job is complete
          until our customers are 100% satisfied.
        </p>
      </div>
    </section>
  );
}

export default About;
