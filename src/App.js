
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { __getTodos } from './redux/modules/todoSlice';

function App() {

  const dispatch = useDispatch();
  const {isLoading, error, todos} = useSelector((state) => {
    return state.todos
  })

  useEffect(()=>{
    dispatch(__getTodos())
  },[])

if (isLoading) {
  return <div>로딩중 ..</div>
};
if (error) {
  <div>{error.message}</div>
}

  return (
    <div>
      안녕
    </div>
  );
}

export default App;
