import React from "react";

import Third from "../Pages/Third";
import First from "../Pages/First";
import Second from "../Pages/Second";


const WorkShop = ({data}) => {
  
  return (
    <>
      <h2 className=" uppercase text-2xl  font-bold">
        {data.workshop_section_title}
      </h2>
      <p
        className=" mt-4 "
        dangerouslySetInnerHTML={{ __html: data.workshop_section_description }}
      />
       <div className=" flex  my-20 gap-5">
        <First data={data}/>
        <Second data={data}/>
        <Third data={data}/>
       </div>
    </>
  );
};

export default WorkShop;
