import { useCallback, useMemo, useState } from 'react';
import MyButton from './MyButton';

/* 
  Here we still need to tell react to render everything but the component that is slowing down the page render, i.e. the MyButton component. On to Branch => 04-lazy-and-suspense
*/
export default function App() {

  const [num, setNum] = useState(10);
  const [logValue, setLogValue] = useState('');

  const fibValue = useMemo(() => {
    console.log('calculating fib value');
    return fib(num);
  }, [num]);

  const onClickLog = useCallback(() => {
      console.log(logValue)
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