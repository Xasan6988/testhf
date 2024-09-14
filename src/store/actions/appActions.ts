import axios from '../../axios';
import { AppDispatch } from '../index';
import { appSlice } from '../slices/appSlice';
import io from 'socket.io-client';

export const login = ({
  login,
  password,
}: {
  login: string;
  password: string;
}) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(appSlice.actions.fetching());

      const signin = await axios.put<any>(
        `/sign-in`,
        {
          login,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },

        }
      )

      if (signin.status !== 200) {
        throw new Error("Invalid user's data");
      }

      dispatch(appSlice.actions.login(true));

      const resUser = await axios.get<any>(`/signed`, {
        validateStatus: (status) => status < 500
      });

      // Закомментил в связи с куками
      // if (resUser.status !== 200) {
      //   throw new Error("Something went wrong");
      // }

      // Мок так же из-за куков
      const mockUser = {
        "id": 692,
        "user_name": "КрестовскаяКМ",
        "first_name": "Кристина",
        "last_name": "Крестовская",
      }


      dispatch(appSlice.actions.setUser(mockUser));

    } catch (e: any) {
      dispatch(appSlice.actions.fetchingError(e.message));
      alert(e.message);
    }
  };
}

export const socketConnect = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(appSlice.actions.fetching());

      // const socket = io('http://159.69.178.87/ws');

      // Так же из-за куков использовал на локалке Express+socket.io для тестов
      const socket = io('http://localhost:3001');

      socket.on("connect", () => {
        console.log('Connected');
      });

      socket.on("disconnect", () => {
        console.log('Disconnected');
      });

      socket.on("message", (data) => {
        dispatch(appSlice.actions.getMessage(data));
      })

    } catch (e: any) {
      dispatch(appSlice.actions.fetchingError(e.message));
      alert(e.message);
    }

  }
}
