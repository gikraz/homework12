import React from 'react';
import { useParams, Link } from 'react-router-dom';

const HobbyDetail = () => {
  const { hobbyId } = useParams();

  return (
    <div>
      <Link to="/hobby">← Back</Link>
      <h1>{hobbyId.replace(/-/g, ' ')}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci excepturi necessitatibus nemo porro consequatur. Similique reiciendis, optio in, rem debitis repudiandae non voluptatibus esse ullam nesciunt, eius repellat accusantium rerum.</p>
    </div>
  );
};

export default HobbyDetail;
