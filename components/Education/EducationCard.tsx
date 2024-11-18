import { School } from '@/components/lib/definitions';
import React, { FunctionComponent } from 'react';
import { FaUserGraduate, FaUniversity, FaMapMarkerAlt } from 'react-icons/fa';
import { ButtonColor } from '../ui/ButtonColor';

const EducationCard: FunctionComponent<{
  school: School;
  key: string;
}> = ({
  school: { degree, major, school, graduation, location, coursework, url },
  key,
}) => {
  return (
    <div key={key} className="pb-5">
      <h5 className="text-xl font-bold">{degree}</h5>
      <p>
        {graduation} | {school}, {location}
      </p>
      <p className="my-3">
        <strong>Specialization in {major}.</strong>
        <br />
        <u>Notable Coursework</u>: {coursework}
      </p>
      <div className="flex items-center justify-between">
      <ButtonColor><a href={url}>Website</a></ButtonColor>
      </div>
    </div>
  );
};

export default EducationCard;
