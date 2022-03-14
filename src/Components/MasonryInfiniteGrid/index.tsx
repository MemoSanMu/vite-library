import * as React from 'react';
import { MasonryInfiniteGrid } from '@egjs/react-infinitegrid';
import './index.css';

function getItems(nextGroupKey: number, count: number) {
  const nextItems = [];
  const nextKey = nextGroupKey * count;

  for (let i = 0; i < count; ++i) {
    nextItems.push({ groupKey: nextGroupKey, key: nextKey + i });
  }
  return nextItems;
}
const Item = ({ num, index }: any) => (
  <div className="item">
    <div className="thumbnail">
      <img
        src={`https://naver.github.io/egjs-infinitegrid/assets/image/${
          (num % 33) + 1
        }.jpg`}
        alt="egjs"
      />
    </div>
    <div className="info">{`egjs ${num}`}</div>
    <div className="info"> egjs {index++}</div>
  </div>
);

export default function App() {
  const [items, setItems] = React.useState(() => getItems(0, 10));

  return (
    <div className="wrapper">
      <MasonryInfiniteGrid
        className="container"
        container={true}
        loading={<div className="loading">Loading...</div>}
        onRequestAppend={(e) => {
          const nextGroupKey = (+e.groupKey! || 0) + 1;
          console.log(e, '请求');

          e.wait();

          setTimeout(() => {
            e.ready();
            setItems([...items, ...getItems(nextGroupKey, 10)]);
          }, 1000);
        }}
      >
        {items.map((item, index) => (
          <Item
            data-grid-groupkey={item.groupKey}
            key={item.key}
            num={item.key}
            index={index}
          />
        ))}
      </MasonryInfiniteGrid>
    </div>
  );
}
