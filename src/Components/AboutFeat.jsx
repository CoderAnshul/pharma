import React from "react";
import purpose from "../assets/images/purpose.jpg";
import approach from "../assets/images/approach.avif";
import culture from "../assets/images/culture.jpeg";

const AboutFeat = () => {
  const sections = [
    {
      title: "Our Purpose",
      content: `
        We are committed to bringing transformative changes to the healthcare industry by offering
        high-quality, accessible, and affordable medical solutions. Our vision is to ensure that everyone
        can access excellent healthcare, and we strive daily to make this vision a reality.
      `,
      image: purpose, 
    },
    {
      title: "Our Approach",
      content: `
        Our focus lies in delivering Quality, Innovation, Accessibility, and Affordability. We work on advancing
        research capabilities, improving manufacturing processes, and expanding our global distribution
        network to provide reliable healthcare solutions. Our goal is to build trust as a partner and brand
        in healthcare worldwide.
      `,
      image: approach, 
    },
    {
      title: "Our Culture",
      content: `
        Our culture is rooted in shared values that define how we work, collaborate, and support our
        stakeholders, patients, and partners. We believe in more than just work—it's a way of life.
        Through innovation and a commitment to affordability and quality, we aim to address critical
        healthcare needs and make a meaningful difference for individuals, communities, and organizations
        worldwide.
      `,
      image: culture,
    },
  ];

  return (
    <div className="bg-white py-12 px-6 lg:px-24 mt-[70px]">
        <h1 className=" text-3xl md:text-5xl mb-14">Combining cutting-edge science, innovative research, <br />
         and advanced technology to revolutionize healthcare.</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-6 ${
              index % 2 === 0 ? "" : "lg:flex-row-reverse"
            }`}
          >
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <img
                src={section.image}
                alt={section.title}
                className="rounded-lg shadow-md w-full object-cover"
              />
            </div>
            {/* Content Section */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-semibold text-blue-500">{section.title}</h2>
              <p className="mt-2 text-gray-600 whitespace-pre-line">{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutFeat;
