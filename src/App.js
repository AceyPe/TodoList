import logo from './logo.svg';
import './App.css';

function App() {

  const taskListItems = document.getElementsByClassName("taskList");

  function addItem () {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<p>${document.getElementById('todoInput').innerText}</p>
    <button>delete</buttom>`
  }

  return(
    <div className='all'>
      <div className='todo'><input type='text' placeholder='Add Todo...' id='todoInput'></input>
      <button className='submitBtn' onClick={addItem}>Submit</button></div>
      <div className='taskList'>
        
      </div>
    </div>
  );
}

export default App;
