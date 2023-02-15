import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { User } from '../user.class';
import '../styles/user.css';

function UserComponent ({user, connected, remove}) {
  useEffect(() => {
    console.log("Created User");
    return () => {
      console.log(`User: ${user.name} is going to unmount`);
    };
  }, [user]);

  function userConnectedIcon() {
    if (user.connected) {
      return (
        <i
          onClick={() => connected(user)}
          className="bi-toggle-on user-action"
          style={{ color: "green" }}
        ></i>
      );
    } else {
      return (
        <i
          onClick={() => connected(user)}
          className="bi-toggle-off user-action"
          style={{ color: "grey" }}
        ></i>
      );
    }
  }

  return (
    <tr className="fw-normal">
      <th>
        <span className="ms-2">{user.name}</span>
      </th>
      <td className="align-middle">
        <span className="ms-2">{user.lastName}</span>
      </td>

      <td className='align-middle'>
        {userConnectedIcon()}
      </td>
      <td>
      <i onClick={() => remove(user)} className='bi-trash user-action' style={{color: 'tomato'}}></i>

      </td>
    </tr>
  );
}

UserComponent.propTypes = {
  user: PropTypes.instanceOf(User).isRequired,
  connected: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
}


export default UserComponent;
