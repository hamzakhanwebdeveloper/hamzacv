import React from "react";

function Leftsection() {
  return (
    <div className="leftsection">
      <h1 className="cvHeading">CV</h1>
      <h3>
        <i className="fa-solid fa-location-dot"></i>
        Address
      </h3>
      <p>
        P/O Bara,fort slop <br />
        Camp,Tehsil Bara, <br />
        District Khyber
      </p>
      <h3>
        <i className="fa-solid fa-phone"></i>
        Mobile #
      </h3>
      <p>03331919202</p>
      <h3>
        <i className="fa-regular fa-envelope"></i>
        Email
      </h3>
      <p>
        hamza19192919@ <br />
        gmail.com
      </p>
      <h3>
        <i className="fa-solid fa-check"></i>
        language
      </h3>
      <ul>
        <li>English</li>
        <li>Urdu</li>
        <li>Pashto</li>
      </ul>
    </div>
  );
}

export default Leftsection;
