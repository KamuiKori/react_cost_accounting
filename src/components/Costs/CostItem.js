import './CostItem.css'
import './CostDate'
import CostDate from './CostDate';
import Card from '../UI/Card';

function CostItem(props) {
  return (
    <li>
    <Card className='cost-item'>
      <CostDate date = {props.date}/>
      <div className='cost-item__description'>
        <h2>{props.name}</h2>
        <div className='cost-item__price'>${props.amount}</div>
      </div>
      <button>Изменить описание</button>
    </Card>
    </li>
  );
}

export default CostItem;
