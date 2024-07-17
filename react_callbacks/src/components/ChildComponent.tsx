
import React from 'react';

interface ChildComponentProps {
  onButtonClick: () => void;
}

const ChildComponent: React.FC<ChildComponentProps> = ({ onButtonClick }) => {
  return (
    <div>
      <button onClick={onButtonClick}>Click Me!</button>
    </div>
  );
};

export default ChildComponent;
