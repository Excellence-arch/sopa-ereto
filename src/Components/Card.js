import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Card = ({ name, img, i }) => {
  const [editedName, setEditedName] = useState();
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    if (name.length > 9) {
      setEditedName(() => {
        // eslint-disable-next-line react/prop-types
        const first = name.split(' ');
        return `${first[0]} ${first[1][0]}.`;
      });
    }
  });
  return (
    <div key={i} className="rounds-start rounds-end mx-2 def-width">
      <div className="rounds-start rounds-end text-center my-3">
        <img src={img} width="71px" className="rounds-start rounds-end" />
      </div>
      <p className="px-3 ms-2 text-muted">{editedName}</p>
    </div>
  );
};

export default Card;
