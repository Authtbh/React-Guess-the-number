import { useState } from 'react';
import './index.css';

function App() {
  const [value, setValue] = useState('');
  const [result, SetResult] = useState('');

  

  const check = (e) => {
    const getRandomInt = Math.floor(Math.random() * 10);
    console.log(getRandomInt);
    e.preventDefault();
    const inputValue = parseInt(value, 10); // Convert input value to a number
    if (inputValue === getRandomInt) {
      console.log("Yeah, you did it!");
      SetResult("Answer is correct");

    } else {
      console.log("Nuh uh");
      SetResult("Answer is not correct");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center text-clamp text-stone-200">
        <h1>Guess the Number</h1>
      </div>
      <h3 className={`text-2xl flex justify-center items-center ${result === "Answer is not correct" ? 'text-red-500' : 'text-lime-400'}`}>
  {result}
</h3>

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
        <button type = 'submit' class="rounded-md bg-slate-300 ml-5">Click to submit</button>
        </label>
      </form>
    </>
  );
}

export default App;
