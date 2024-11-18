import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  isBottom: boolean;
}

const ScrollDownArrow: React.FC<Props> = ({ isBottom, className, style }) => {
  return (
    <div className={`${className} sticky ${isBottom ? 'hidden' : ''}`} style={style}>
      <div className="down-arrow" />
    </div>
  );
};

export default ScrollDownArrow;
