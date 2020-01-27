import React from "react";
import dwarf from "../image/dwarf.jpg";
import azaelindia from "../image/azaelindia.jpg";
import payingguest from "../image/payingguest.jpg";
import dwarfinc from "../image/DwarfINC.jpg";

import Bounce from "react-reveal/Bounce";
import HeadShake from "react-reveal/HeadShake";

const Works = () => {
  return (
    <div className="work">
      <div className="heading container">
        <Bounce left>
          <h1>Works</h1>
        </Bounce>
      </div>

      <section className="wrapper wrapper-1">
        <div className="container">
          <div className="details">
            <HeadShake>
              <h3>Azael India</h3>
            </HeadShake>
            <p>PHP</p>
            <p>
              Organization Operating In The Field of manufacturing, fabrication
              and trading of mobile health service vans, special concept
              vehicles, security surveillance vans, health centers and medical
              equipment.
            </p>
          </div>
          <div className="img">
            <a href="https://www.azaelindia.com" target="_blank">
              <img src={azaelindia} alt="Azael India" />
            </a>
          </div>
        </div>
      </section>

      <section className="wrapper wrapper-2">
        <div className="container">
          <div className="img">
            <a href="https://www.dwarf.ga" target="_blank">
              <img src={dwarf} alt="The Dwarf Company" />
            </a>
          </div>
          <div className="details">
            <HeadShake>
              <h3>The Dwarf Company</h3>
            </HeadShake>
            <p>Startup's are love.</p>
            <p>React</p>
            <p>Netlify</p>
            <p>Contentfull</p>
            <p>Firebase</p>
          </div>
        </div>
      </section>

      <section className="wrapper wrapper-3">
        <div className="container">
          <div className="details">
            <HeadShake>
              <h3>Paying Guest</h3>
            </HeadShake>
            <p>Firebase Backend</p>
            <p>React Frontend</p>
          </div>
          <div className="img">
            <a href="http://www.payingguest.ml" target="_blank">
              <img src={payingguest} alt="Paying Guest" />
            </a>
          </div>
        </div>
      </section>

      <section className="wrapper wrapper-4">
        <div className="container">
          <div className="img">
            <a href="http://www.dwarfinc.ml" target="_blank">
              <img src={dwarfinc} alt="Dwarf INC" />
            </a>
          </div>
          <div className="details">
            <HeadShake>
              <h3>DWARF INC</h3>
            </HeadShake>
            <p>Smart India Project</p>
            <p>Building a Smart Future</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
