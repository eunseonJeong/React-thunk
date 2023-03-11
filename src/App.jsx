import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { __getTodos } from './redux/modules/todoSlice';
import './App.css';

function App() {

  const dispacth = useDispatch();

  useEffect(()=> {
    dispacth(__getTodos());
  },[])

  return (
    <div>
      thunk app
    </div>
  );
}

export default App;
