// import { useEffect } from 'react';
import { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import AdminDarkNav from '../../Layouts/AdminDarkNav';
import img from '../../assets/avatar.png';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const Profile = () => {
  let { id } = useParams();
  const oldUrl = `${useSelector((state) => state.urlReducer.diam)}/mcs2/`;
  const [url, setUrl] = useState(`${useSelector((state) => state.urlReducer.diam)}/mcs2/`);
  const [user, setUser] = useState();
  const [isloading, setIsloading] = useState(true);
  const [error, setError] = useState(false);
  const [found, setFound] = useState(false);

  useEffect(() => {
    if (id[0] == 'r') {
      setUrl(oldUrl + 'one-Ranger');
    } else {
      setUrl(oldUrl + 'one-landOwner');
    }
    axios
      .post(url, { idTag: id.slice(1, id.length - 1) })
      .then((res) => {
        console.log(res.data);
        setIsloading(false);
        setFound(true);
        setError(false);
        setUser(res.data);
      })
      .catch((err) => {
        setIsloading(false);
        setError(err.message);
      });
  }, []);
  // useEffect(() => {
  //   if (error == false && isloading == false) {
  //     setLoads(false);
  //   }
  // });
  return (
    <div>
      <AdminDarkNav />
      {error && <div className="alert alert-danger text-danger text-center fs-2">{error}</div>}
      {isloading ? (
        <div className="text-center mt-5">
          <span className="spinner-border" style={{ width: '10rem', height: '10rem' }}></span>
        </div>
      ) : (
        found && (
          <div className="container d-flex mt-4">
            <div className="col-lg-4 col-12">
              <p className="btn btn-light rounded-circle p-3">
                <FaArrowLeft />{' '}
              </p>
              <div>
                <img src={img} alt="Profile Picture" className="rounded-circle" width={'200px'} />
                <p className="fs-3 text-dark">{`${user.firstName} ${user.middleName} ${user.lastName}`}</p>
                <p>Position</p>
              </div>
            </div>
            <div className="col-lg-8 col-12">
              <p>Position: {id[0] == 'r' ? 'Ranger' : 'Land Owner'}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Profile;
