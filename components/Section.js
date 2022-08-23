import React from "react";

const Section = (props) => {
  return (
    <section
      className="section"
      {...props}
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="400"
      data-aos-once="true"
    >
      <div className="section__container">{props.children}</div>
    </section>
  );
};

export default Section;
