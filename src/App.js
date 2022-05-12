import * as React from 'react';

const App = () => {

  const [fibTerm, setFibTerm] = React.useState(0);

  function fibInputChange(event) {
    setFibTerm(event.target.value);
  }

  return (
    <div>

      <h3>Fibonacci</h3>

      <hr />
      <label htmlFor="fibInput">Number of terms: </label>
      <input id="fibInput" type="text" onChange={fibInputChange} />

      <hr />
      <Fib term={fibTerm} />

    </div>
  );
}

function Fib(props) {

  function calcFib(term) {

    if (term <= 1) {
      return term;
    }
    return calcFib(term - 1) + calcFib(term - 2);
  }

  let arr = [];
  for (let i = 0; i < props.term; i++) {
    arr.push(calcFib(i));
  }

  return (
    <p>
      {arr.map(function (item) {
        return item + ", ";
      })}
    </p>
  );

}

export default App;
