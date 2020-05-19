import React, {useState} from 'react';

import Grid from './react-grid'

import _range from 'lodash/range'

const cols = [
  {id: 'type', name: 'Type', width: 300},
  {id: 'quantity', name: 'Quantity', type: 'number', width: 100},
  {id: 'amount', name: 'Amount', type: 'number', width: 300},
  {id: 'type', name: 'Type', width: 300},
  {id: 'quantity', name: 'Quantity', type: 'number', width: 100},
  {id: 'amount', name: 'Amount', type: 'number', width: 300},
  {id: 'type', name: 'Type', width: 300},
  {id: 'quantity', name: 'Quantity', type: 'number', width: 100},
  {id: 'amount', name: 'Amount', type: 'number', width: 300},
]

const _data = _range(10000).map(n => ({
  type: '3321', amount: Math.random() * 100, quantity: n
})) 

function App() {
  const [state, setState] = useState(0)
  const [data, setData] = useState(_data)

  const onChange = ({rowId, row, id, value}) => {
    console.log(rowId, row, id, value)
    data[rowId] = {
      ...data[rowId], 
      [id]: value
    }
    setData([...data])
  }

  return (
    <div style = {{width: '80vw', height: 'calc(100vh - 80px)', margin: '0 auto'}}>
<button onClick = {() => setState(Math.random())}>REFRESH</button>
        <Grid 
          // key = {state}
          cols = {cols}
          data = {data}
          // commit = {onCommit}

          onChange = {onChange}

          width = {700}
          height = {400}
        />
    </div>
  );
}

export default App;
