/*
 * @Descripttion:
 * @version:
 * @Author: wangsen
 * @Date: 2021-10-11 11:47:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-10 17:32:41
 */
import { useState } from 'react';
import './App.css';
import MasonryInfiniteGrid from './Components/MasonryInfiniteGrid';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MasonryInfiniteGrid />
    </div>
  );
}

export default App;
