import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';

function App() {

  let [get,setget] = useState([]);
  let [random,setrandom] = useState(null);

  useEffect(() => {
    axios.get('https://type.fit/api/quotes')
      .then(function (response) {
        console.log(response.data);
        setget(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  },[]);

  const btnclick = () =>{
    const randomIndex = Math.floor(Math.random() * get.length);
    setrandom(get[randomIndex])
  }


  return (
    <div className="App">
        <div>
          <p className='title'>Random quote generator</p>
          <p type='button' className='btnclick' onClick={btnclick}>Generate</p>
        </div>
       {
        random && (
          <div>
            <p className='text'>{random.text}</p>
            <p className='author'>- {random.author}</p>
          </div>
        )
       }
    </div>
  );
}

export default App;
