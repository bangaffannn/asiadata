import React from "react";
import { HiCheckCircle } from "react-icons/hi";

const services = [
  {
    title: "Website Development",
    description: "Lorem ipsum",
    list: ["a", "b", "c", "d", "e"],
  },
  {
    title: "Mobile App Development",
    description: "Lorem ipsum",
    list: ["x", "y", "z"],
  },
  {
    title: "SEO Services",
    description: "Lorem ipsum",
    list: ["keyword research", "on-page SEO", "off-page SEO"],
  },
  {
    title: "Digital Marketing",
    description: "Lorem ipsum",
    list: ["keyword research", "on-page SEO", "off-page SEO"],
  },
  {
    title: "UI/UX Design",
    description: "Lorem ipsum",
    list: ["keyword research", "on-page SEO", "off-page SEO"],
  },
  {
    title: "Commercial Ads Video",
    description: "Lorem ipsum",
    list: ["keyword research", "on-page SEO", "off-page SEO"],
  },
  {
    title: "Podcast and Content Video",
    description: "Lorem ipsum",
    list: ["keyword research", "on-page SEO", "off-page SEO"],
  },
];

const ServicesCard = ({ title, description, list }) => {
  return (
    <div className="p-4 w-60 h-80 rounded-lg bg-black border border-2 border- hover:scale-110 transition-all duration-300 ease-in-out">
      <div className="ml-2">
        <div className="text-white font-semibold">{title}</div>
        <p className="mb-2">{description}</p>
        <ul className="">
          {list.map((item, index) => (
            <li className="flex justify-start items-center gap-x-2" key={index}>
              <HiCheckCircle className="text-accent"/>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ServicesArray = ({ services }) => {
  return (
    <div className="flex justify-center items-center gap-y-2 md:gap-y-0 gap-x-4 md:gap-x-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {services.map((item, index) => (
        <div key={index} className="mt-2 xl:mt-6">
          <ServicesCard
            title={item.title}
            description={item.description}
            icon={item.icon}
            list={item.list}
          />
        </div>
      ))}
    </div>
  );
};

const Services = () => {
  return (
    <div className="container mx-auto flex justify-center items-center">
      <div>
        <h1 className="text-3xl font-semibold text-center my-8">
          Our Services
        </h1>
        <ServicesArray services={services} />
      </div>
    </div>
  );
};

export default Services;
