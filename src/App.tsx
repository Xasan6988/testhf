import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';
import { useAppSelector } from './hooks/redux';


function App() {

  const { auth } = useAppSelector(state => state.app);

  return (
    <div className="App">
      <Routes>
        {!auth ?
          <>
            <Route path="/" element={<Auth />} />
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </>
          :
          <>
            <Route path="/home" element={<Home />} />
            <Route
              path="/"
              element={<Navigate to="/home" replace />}
            />
          </>}
      </Routes>

    </div>
  );
}

export default App;
