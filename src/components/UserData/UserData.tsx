import React from'react';
import { useAppSelector } from '../../hooks/redux';

const UserData = () => {
  const {user} = useAppSelector(state => state.app);

  return (
        <div>
          <p>Login: {user?.user_name}</p>
          <p>Name: {user?.first_name} {user?.last_name}</p>
        </div>
    )

}

export default UserData;
