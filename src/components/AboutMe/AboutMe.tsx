//
//  AboutMe.tsx
//  espitiaandres.github.io
//
//  Created by Andres Espitia.
//  Copyright © 2020 Andres Espitia. All rights reserved.
//

// import "animate.css";
import LandingPageIcons from "../LandingPageIcons/LandingPageIcons";

const AboutMe = () => {
  return (
    <div
      // className="animate__animated animate__fadeIn animate__delay-0.3s"
      className="text-black text-base md:text-lg"
    >
      <div className="mb-2">
        I'm a University of Waterloo Engineering '22 graduate interested in Full
        Stack Web Development, Machine Learning, and Optimization. Currently,
        I'm working as a Full-Stack Software Engineer at&nbsp;
        <a
          className="link text-primary"
          href="https://federato.ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          Federato
        </a>
        , helping improve the underwriting workflow.
      </div>
      <div className="mb-2">
        When I'm not coding I like to listen to music, play piano and violin,
        and play/watch basketball and soccer. Recently, I've been interested in
        FL Studio and Origami.
      </div>
      <LandingPageIcons />
      <div
      // className="text-black flex fixed bottom-0 py-1 lg:w-[calc(100%_-_24rem)] md:w-[calc(100%_-_8rem)] bg-white"
        className="fixed bottom-0 bg-white pr-12"
      >
        Made with ❤️ using React, Vite, Tailwind, DaisyUI, and Github Pages
      </div>
    </div>
  );
};

export default AboutMe;
