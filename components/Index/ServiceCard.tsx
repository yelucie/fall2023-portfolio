import { Service } from '@/components/lib/definitions';
import React, { FunctionComponent } from 'react';

const ServiceCard: FunctionComponent<{ service: Service }> = ({
  service: { title, about, Icon },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };

  return (
    <div className="p-4 flex items-center space-x-4 bg-gray-200 dark:bg-dark-200 rounded-lg">
      <Icon className="w-12 h-12 text-purple-500" />
      <div>
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
