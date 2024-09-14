import React, { useEffect } from'react';
import UserData from '../../components/UserData/UserData';
import Messages from '../../components/Messages/Messages';
import { useAppDispatch } from '../../hooks/redux';
import { socketConnect } from '../../store/actions/appActions';

const Home: React.FC = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(socketConnect());
  }, []);

  return (
    <div>
      <h1>Home</h1>

      <UserData/>

      <Messages/>
    </div>
  );
}

export default Home;
