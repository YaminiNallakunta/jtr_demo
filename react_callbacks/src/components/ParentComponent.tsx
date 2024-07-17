// ParentComponent.tsx
import React, { useCallback } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent: React.FC = () => {
  const handleButtonClick = useCallback(() => {
    alert('Button clicked in ChildComponent');
  }, []);

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent onButtonClick={handleButtonClick} />
    </div>
  );
};

export default ParentComponent;
