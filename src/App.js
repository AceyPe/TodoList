import logo from './logo.svg';
import React, {useState} from 'react';
import { TodoWrapper } from './components/TodoWrapper'
import './App.css';

function App() {
  return(
    <div className='APP'>
      <TodoWrapper />
    </div>
  );
}

export default App;
