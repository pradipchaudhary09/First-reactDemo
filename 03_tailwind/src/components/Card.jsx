import React from "react";
import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <div className="card overflow-hidden h-94 w-80 bg-white rounded-2xl p-5">
      <div className="top flex items-center justify-between  ">
        <img
          className="h-12.5 w-12.5 p-1.5 rounded-full border-2 border-[#dadada] object-cover object-center"
          src={props.brandLogo}
          alt="logo"
        />
        <button className="flex gap-1 items-center border-2 border-[#dadada] text-[#989797] px-2.5 py-1 rounded-lg">
          Saved
          <Bookmark size={14} />
        </button>
      </div>
      <div className="center w-full flex flex-col gap-3 mt-6">
        <h3 className="text-lg font-medium">
          {props.companyName}
          <span className="text-xs text-[#989797] ml-1.5">{props.datePosted}</span>
        </h3>
        <h2 className="text-2xl font-medium">{props.post}</h2>
        <div className="flex items-center justify-start gap-2">
          <h4 className="font-normal bg-[#e8e8e8] py-1 px-2.5 rounded-lg">
            {props.tag1}
          </h4>
          <h4 className="font-normal bg-[#e8e8e8] py-1 px-2.5 rounded-lg">
            {props.tag2}
          </h4>
        </div>
      </div>
      <div className="bottom border-t-1 border-[#dadada] flex items-center justify-between pt-3.5 mt-18">
        <div>
          <h1 className="font-medium text-lg">{props.pay}</h1>
          <p className="text-[#989797] text-sm">{props.location}</p>
        </div>
        <button className="py-2 px-4 rounded-lg bg-black text-white">Apply now</button>
      </div>
    </div>
  );
};

export default Card;
