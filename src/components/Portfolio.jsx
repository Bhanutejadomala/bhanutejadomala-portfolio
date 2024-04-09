import React from "react";
import carrental from "../assets/projects/carrental.png"
import expense from "../assets/projects/expense.png"
const Portfolio = () => {
    const portfolio = [

        {
            id: 1,
            src: carrental,
            title: "Car Rental Services",
            description: "Using HTML,CSS and JS",
            link: "https://car-rentalservices.netlify.app/",
            git: "https://github.com/Bhanutejadomala/car-rental-services"
        },

        {
            id: 2,
            src: expense,
            title: "Expense Tracker"
        },

        {
            id: 3,
            src: carrental,
            link: "https://car-rentalservices.netlify.app/",

        },


        {
            id: 4,
            src: carrental,
            title: "Expense Tracker",
            link: "https://car-rentalservices.netlify.app/",
        },

        {
            id: 5,
            src: carrental,
            link: "https://car-rentalservices.netlify.app/",
        },

        {
            id: 6,
            src: carrental,
            link: "https://car-rentalservices.netlify.app/",
        },
    ];

    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-gray-700 to-black w-full md:h-100vh pt-20 text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex-col justify-center   w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-6 ">
                    {portfolio.map(({ id, src, title, link, git,description}) => (
                        <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt=""
                                className=" object-fit w-96 h-56 rounded-md duration-200 hover:scale-105"
                            />
                            <p className="mt-2 text-center text-2xl font-bold">{title}</p>

                            <p className="text-center mt-1">{description}</p>


                            <div className="flex items-center justify-center">
                                <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                                    <a href={link}
                                        target="_blank" rel="noreferrer">Demo</a>
                                </button>

                                <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                                    <a href={git}
                                        target="_blank" rel="noreferrer">Code</a>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Portfolio;
