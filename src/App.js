import React from 'react';
import './App.css'
import axios from 'axios'
import NavBar from './components/NavBar'

function App() {
  const dispatch = useDispatch();
  
  const getStudents = async () => {
    const result = await axios.get(`http://localhost/api/home`)
    const action = {type:'GET_STUDENTS',student: result.data}
    dispatch(action)
  }

  return (
    <div>

      <h2>Redux student</h2>
      <StudentList/>
      <InputForm/>
      
    </div>
  );
}

export default App;
