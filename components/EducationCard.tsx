import { School } from "@/type";
import React, { FunctionComponent, useState } from "react";
import { FaUserGraduate, FaUniversity, FaMapMarkerAlt } from "react-icons/fa";
import { Button } from "./ui/Button";

const EducationCard: FunctionComponent<{
  school: School;
}> = ({
  school: { degree, major, school, graduation, location, coursework, url },
}) => {
  return (
    <div className="pb-3">
      <p>{graduation}</p>
      <h5 className="text-xl font-bold">{degree}</h5>
      <p>
        <FaUserGraduate className="w-5 h-5 pr-2" />
        {major}
      </p>
      <p>
        <FaUniversity className="w-5 h-5 pr-2" />
        {school}
      </p>
      <p>
        <FaMapMarkerAlt className="w-5 h-5 pr-2" />
        {location}
      </p>
      <p>
        <span>logo</span>
        {coursework}
      </p>
      <Button>Go to website</Button>
    </div>
  );
};

export default EducationCard;
