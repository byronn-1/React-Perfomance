import { useMemo, useState } from 'react';
import MyButton from './MyButton';


/* 
The problem with this approach/branch is that we pass a function as a prop into the MyButton component....
  This means that every time the component renders there will be a new function constructed and thus these two functions will NOT be equal so MyButton will render every time. We Need to get a reference to what is returned from the function not the function itself.
*/
export default function App() {

  const [num, setNum] = useState(10);
  const [logValue, setLogValue] = useState('');

  const fibValue = useMemo(() => {
    console.log('calculating fib value');
    return fib(num);
  }, [num]);

  return (
    <>
      <h1>Fib {num} is {fibValue}</h1>
      <input
        type="number"
        value={num}
        onChange={(event) => setNum(parseInt(event.target.value))}
      />
      <input
        type="text"
        value={logValue}
        onChange={(event) => setLogValue(event.target.value)}
      />
      <MyButton
        onClick={() => {
          console.log(logValue)
      }}
      >Log Value</MyButton>
    </>
  );
}

function fib(n) {
  if( n === 2 ) return 1;
  if (n === 1) return 0;
  return fib(n - 1) + fib(n - 2);
}