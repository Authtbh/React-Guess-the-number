import { useState } from 'react';
import './index.css';

function App() {

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100);
  };


    
  const [value, setValue] = useState('');
  const [result, SetResult] = useState('');
  const [hint, setHint] = useState('');
  const [tries, setTries] = useState(0);
  const [random, setRandom] = useState(generateRandomNumber());
  
  
  
  const check = (e) => {
    e.preventDefault();
    setTries(tries + 1);
    
    const inputValue = parseInt(value); // Convert input value to a number
    if (inputValue === random) {
      console.log("Yeah, you did it!");
      SetResult(`Hurray! you guessed the number in ${tries} tries`);
      setTries(0);
      setHint("");
      setRandom(generateRandomNumber())
    } else if (inputValue > random) {
      console.log("Nuh uh ");
      SetResult("Answer is not correct");
      setHint("Too big");
    } else if (inputValue < random) {
      console.log("Nuh uh ");
      SetResult("Answer is not correct");
      setHint("Too Small");
    } else {
      console.log("Nuh uh ");
      SetResult("Answer is not correct");
      setHint("Tf you did");
    }
  };
  

  return (
    <>
      <div className="flex items-center justify-center text-clamp text-stone-200">
        <h1>Guess the Number</h1>
      </div>
      <h3 className={`text-clamps flex justify-center items-center ${result === "Answer is not correct" ? 'text-red-500' : 'text-lime-400'}`}>
        {result}
      </h3>
      <h5 className={`flex justify-center items-center ${hint == "Too big" ? 'text-red-700' :  'text-blue-600'}`}>{hint}</h5>
      <h6 className="flex items-center justify-center text-xl text-stone-100 mt-10 -mb-16">Total Tries:{tries}</h6>
      <form className="flex justify-center items-center mt-24" onSubmit={check}>
        <label>
          <input
            type="number"
            name=""
            id=""
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
        <label>
          <button type="submit" className="rounded-md bg-slate-300 ml-5">
            Click to submit
          </button>
        </label>
      </form>
    </>
  );
}

export default App;
