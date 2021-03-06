import React from 'react'
import './Components.css'

const About = () => (
  <div className="about-container">
    <h1 id="main-header" className="main-header title">
      Why Hemp?
    </h1>

    <div id="about-picture-div" />
    <div className="black-box-text">
      <div className="black-box-format">
        <p>
          The plant has over 25,000 known uses and is potentially an
          eco-friendly alternative for other crops commonly produced on an
          industrial scale. It grows quickly, the plant will reach ~12 inches in
          approximately 3-4 weeks. Growing hemp is rapidly expanding: in 2016
          there was 10,000 acres grown in the U.S. whereas in 2017 there was
          26,000 acres grown.
          <br />
          <br />
          Hemp is often attributed with miraculous potential for sequestering
          carbon, reducing agricultural pollution, and allowing farmers to make
          large profits on marginal land. It is naturally resistant to most
          pests, grows in tight conditions reducing land needed, and can grow in
          a variety of climates.
          <br />
          <br />A recent Cornell University analysis found that profits ranged
          from roughly $130 to $730 per acre – comparable to most grain crops on
          the lower end and approaching high-value vegetable crops on the upper
          end.
          <br />
          <br />
          Hemp is rapidly expanding and there is little information on the best
          strategies and practices for growing hemp. Hemptations goal aims
          towards informing farmers of the best growing methods. If you'd like
          to learn more information about growing hemp in Minnesota and the
          Industrial Hemp Program, please click below.
          <br />
          <a
            href="https://www.mda.state.mn.us/plants/hemp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button is-secondary btn-why">Learn More</button>
          </a>
        </p>
      </div>
    </div>
  </div>
)

export default About
