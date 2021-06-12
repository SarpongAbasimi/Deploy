import './App.css';
import {Name} from './components/Name/Name';
import {useState, useEffect} from 'react';

function App() {
  const [applicationState, setApplicationState] = useState(0)

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    fetch(url).then(response => {
      if(response.status == 200){
        return response.json()
      }
    }).then(data => setApplicationState(data))
    .catch(error => console.log(`something went wrong ${error}`))
  },[])

  return (
    <div className="App">
      <Name dataprop={applicationState}/>
    </div>
  );
}

export default App;
