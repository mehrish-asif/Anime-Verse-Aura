import React from 'react';

interface AboutUsProps {
 
}

const AboutUs: React.FC<AboutUsProps> = () => {
  return (
    <div className="about-us-container">
      <h1>About Our Project</h1>
      <p>
        Welcome! This project is dedicated to [**Briefly describe your project's main goal/mission in one sentence**].
      </p>

      <section className="mission-vision">
        <h2>Our Mission</h2>
        <p>
          Our mission is to **[State the core purpose and value provided by the project]**, making it easier for users to **[State the key benefit or solution]**.
        </p>

        <h2>Our Values</h2>
        <ul>
          <li>**Innovation:** Continuously seeking new and better ways to solve problems.</li>
          <li>**Quality:** Ensuring high standards in every aspect of the project.</li>
          <li>**User Focus:** Prioritizing the needs and experience of our users.</li>
        </ul>
      </section>

      <section className="team-intro">
        <h2>Meet the Team</h2>
        <p>
          This project was created by a dedicated team of **[e.g., developers, designers, enthusiasts]** passionate about **[e.g., technology, data, creating great tools]**.
        </p>
      </section>
      
      <section className="contact-cta">
        <p>
          Want to learn more? Check out our other resources or contact us!
        </p>
      </section>

    </div>
  );
};

export default AboutUs;