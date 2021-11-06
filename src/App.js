import './App.css';
import React, {useState} from 'react';
import Block from "./Block";
import BlockChainger from "./BlockChanger";

function App() {

  const [color, setColor] = useState('black')

  const blockChaingerHandler = (value) => {
    setColor(value)
  }

  return (
    <div>
      <h1>Hello World</h1>
        <Block bgcolor={color}/>
        <BlockChainger handler={blockChaingerHandler}/>
    </div>
  );
}

export default App;
