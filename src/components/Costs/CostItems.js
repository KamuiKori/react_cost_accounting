import { useState } from 'react';
import './CostItems.css'
import CostsFilter from './CostsFilter'
import CostsList from './CostsList';
import CostsDiagram from './CostsDiagram'

function CostItems(props){

    const [selectedYear, setSelectedYear] = useState('2021')

    function yearChangeHandler(year){
        setSelectedYear(year);
    }

    const filtredCosts = props.costs.filter(cost => cost.costDate.getFullYear().toString() === selectedYear)

    return(
        <div>
            <div className='costs'>
                <CostsFilter onChangeYear = {yearChangeHandler} year={selectedYear}/>
                <CostsDiagram costs={filtredCosts}/>
                <CostsList costs = {filtredCosts}/>
            </div>
        </div>
    )
}

export default CostItems