import './Diagram.css'
import DiagramBar from './DiagramBar'


function Diagram(props){

    const dataSetsValues = props.dataSets.map(dataSet =>  dataSet.value)

    const maxMonthCost = Math.max(...dataSetsValues)

    console.log(props.dataSets);

    return(
        <div className='diagram'>
            {props.dataSets.map(dataSet => <DiagramBar key={dataSet.label} label={dataSet.label} value={dataSet.value} maxValue={maxMonthCost}/>)}
        </div>
    )
}

export default Diagram