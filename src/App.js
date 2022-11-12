import { useMemo, useState } from 'react';
import MyButton from './MyButton';

/* 
Now we are using useMemo to track/memoise the value of the function fibValue, while passing a reference of the fibValue function into the props of the MyButton component. We can instead use useCallback to track/memoise the entire function itself.... onto Branch => 03-implement-useCallback
*/
export default function App() {

  const [num, setNum] = useState(10);
  const [logValue, setLogValue] = useState('');

  const fibValue = useMemo(() => {
    console.log('calculating fib value');
    return fib(num);
  }, [num]);

  const onClickLog = useMemo(() => {
    return () => {
      console.log(logValue)
    }
  }, [logValue]);


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
        onClick={onClickLog}
      >Log Value</MyButton>
    </>
  );
}

function fib(n) {
  if( n === 2 ) return 1;
  if (n === 1) return 0;
  return fib(n - 1) + fib(n - 2);
}