import React, { useState } from "react";

import { projects } from "../data";
import Div from "./Div";

const Portfolio = () => {
    const [projectData, setProjectData] = useState(projects);

   

    return (
        <div id="work" className="mt-10 relative">
            {/* SECTION HEADING START */}
            <Div className="mb-10">
                <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-2">
                    Proyectos
                </div>
                <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-[#CCCCCC] text-center">
                    Descubre mis proyectos y aplicaciones que he desarrollado
                </div>
            </Div>
            {/* SECTION HEADING END */}

            {/* FILTER TAGS START */}
            <Div className="flex justify-start md:justify-center gap-[10px] mb-[50px] overflow-auto">
               
            {projectData.name}
            
            </Div>
            {/* FILTER TAGS START */}

            {/* PROJECTS GRID START */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {projectData.map((item, index) => {
                    return (
                        <Div
                            key={index}
                            className="flex flex-col gap-4 cursor-pointer"
                        >
                            <a href={item.url} target="_blank">

                                <div className="bg-black rounded-[20px] aspect-video overflow-hidden">
                                    <img
                                        src={item.image}
                                        className="transition-transform hover:-translate-y-[25%] hover:duration-2500 ease-linear"
                                    />
                                    
                                </div>
                            </a>
                         
                            <div className="text-[20px] 2xl:text-[24px] text-[#CCCCCC] text-center">
                                {item.name}
                            </div>
                        </Div>
                    );
                })}
            </div>
            {/* PROJECTS GRID START */}
        </div>
    );
};

export default Portfolio;
