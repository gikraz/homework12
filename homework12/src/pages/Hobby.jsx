import React from 'react';
import { Link } from 'react-router-dom';

const Hobby = () => {
  const hobbies = ['Playing Games', 'Reading Books', 'Playing Football', 'Watching Movies'];

  return (
    <div>
      <h1>Hobby Page</h1>
      {hobbies.map((hobby, index) => (
        <div key={index}>
          <h2>{hobby}</h2>
          <Link to={`/hobby/${hobby.toLowerCase().replace(/ /g, '-')}`}>Show More</Link>
        </div>
      ))}
    </div>
  );
};

export default Hobby;
