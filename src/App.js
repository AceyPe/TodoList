import logo from './logo.svg';
import './App.css';

function App() {
  return(
    <div className='all'>
      <input type='text' placeholder='Add Todo...' className='todo'></input>
      <button className='submitBtn'>submit</button>
      <div className='taskList'>
        <li>hello</li>
      </div>
    </div>
  );
}

export default App;
