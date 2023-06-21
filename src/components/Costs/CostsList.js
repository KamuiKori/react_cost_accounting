import CostItem from "./CostItem"
import './CostsList.css'

function CostsList(props){
    const costs = props.costs.length === 0?<h2 className="cost-list__fallback">В этом году расходов нет</h2>:props.costs.map((cost)=>(
        <CostItem key={cost.id} date = {cost.costDate} name = {cost.costName} amount = {cost.costAmount} />))
    return(
        <ul className="cost-list">
            {costs}
        </ul>
    )
}

export default CostsList