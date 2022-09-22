import { FaArrowLeft } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import AdminDarkNav from '../../Layouts/AdminDarkNav';

// eslint-disable-next-line react/prop-types
const Profile = () => {
  let { id } = useParams();
  const user = useSelector((state) => state.allUsersReducer.users[id]);
  return (
    <div>
      <AdminDarkNav />
      <div className="container d-flex mt-4">
        <div className="col-lg-4 col-12">
          <p className="btn btn-light rounded-circle p-3">
            <FaArrowLeft />{' '}
          </p>
          <div>
            <img src={user.img} alt="Profile Picture" className="rounded-circle" width={'200px'} />
            <p className="fs-3 text-dark">{user.name}</p>
            <p>Position</p>
          </div>
        </div>
        <div className="col-lg-8 col-12">
          <p>Position: {user.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
