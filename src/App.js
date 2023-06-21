import { useState } from 'react';
import CostItems from './components/Costs/CostItems';
import NewCost from './components/NewCost/NewCost';

const initialCosts = [
  {
    "costDate":new Date(2021, 2, 12),
    "costName":'Хололдильник',
    'costAmount':'999.99',
    'id':'c1'
  },
  {
    "costDate":new Date(2021, 3, 15),
    "costName":'Iphone',
    'costAmount':'800',
    'id':'c2'
  },
  {
    "costDate":new Date(2021, 6, 25),
    "costName":'Keyboard',
    'costAmount':'120',
    'id':'c3'
  },
];

function App() {

  const [costs, setCosts] = useState(initialCosts)

  const addCostHandler = (cost) =>{
    setCosts((prevCosts) => {
      return(
        [cost,...prevCosts]
      )
    });
  }

  return (
    <div>
      <NewCost onAddCost = {addCostHandler}/>
      <CostItems costs = {costs}/>
    </div>
  );
}

export default App;
