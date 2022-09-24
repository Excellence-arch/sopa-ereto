import React from 'react';
import DarkNav from '../Layouts/DarkNav';
import lions from '../assets/lions.jpg';
import Comment from '../Components/Comment';
import { useState } from 'react';

const Reviews = () => {
  const data = [
    {
      name: 'Michael Oladipupo',
      message: 'This is my message'
    },
    {
      name: 'Michael Oladipupo',
      message: 'This is another message'
    },
    {
      name: 'Michael Oladipupo',
      message: 'this is to test the longest comment'
    },
    {
      name: 'Michael Oladipupo',
      message: 'this is to test the longest comment'
    },
    {
      name: 'Michael Oladipupo',
      message: 'this is to test the longest comment'
    },
    {
      name: 'Michael Oladipupo',
      message: 'this is to test the longest comment'
    }
  ];

  const [userComment, setUserComment] = useState();

  //   const [i, setI] = useState(0);
  return (
    <div className="bg-maps">
      <DarkNav />
      <div className="d-flex flex-row">
        <div className="col-lg-3 col-12 bg-light">
          <div className="text-center">
            <img src={lions} alt={'Conservancy Image'} width="155px" />
          </div>
          <p className="fs-3 text-dark text-center">Name of conservancy</p>
          <p className="text-center">Name of the head of the conservancy</p>
          <p className="text-center">Phone number</p>
          <div>
            <textarea disabled className="ms-4"></textarea>
            <textarea disabled className="ms-2"></textarea>
          </div>
          <div style={{ overflowY: 'scroll', height: '41vh' }} className="mt-4 ms-4 mb-2">
            {data.map((comment, ind) => (
              <Comment key={ind} message={comment.message} name={comment.name} />
            ))}
          </div>
          <div className="ms-4">
            <input
              placeholder="Add your comments"
              value={userComment}
              className="form-control w-50 d-inline"
              onChange={(e) => setUserComment(e.target.value)}
            />
            <button className="btn btn-primary ms-3">Add comment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
