import React, { FunctionComponent } from 'react';

const ModalCover: FunctionComponent<{
  className?: string;
  setShowDetail: (id: number | null) => void;
}> = ({ setShowDetail, className }) => {
  return (
    <div
      className={`bg-gray-800 bg-opacity-20 ${className}`}
      onClick={() => setShowDetail(null)}
    />
  );
};

export default ModalCover;
