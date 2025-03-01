import React from 'react';
import { ExampleProps } from '../../types/types';

const ExampleComponents: React.FC<ExampleProps> = ({ title }) => {
     return <div>{title}</div>;
};

 export default ExampleComponents;