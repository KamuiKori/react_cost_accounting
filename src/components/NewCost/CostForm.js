import React,{ useState } from 'react';
import './CostForm.css'

function CostForm(props){

    // const [name, setName] = useState('');
    // const [amount, setAmount] = useState('');
    // const [date, setDate] = useState('');
    const [userInput,setUserInput] = useState({
        'name': '',
        'amount':'',
        'date':''
    });

    const [isFormVisible,setIsFormVisible] = useState(false);


    function cancelButtonHandler(event){
        setIsFormVisible(false)
    }

    function addNewCostHandler(){
        setIsFormVisible(true)
    }

    function nameChangeHandler(event){
        setUserInput((previousState)=>{
            return {
                ...previousState,
                name:event.target.value
            }
        })
    }

    function amountChangeHandler(event){
        setUserInput((previousState)=>{
            return {
                ...previousState,
                amount:event.target.value
            }
        })
    }

    function dateChangeHandler(event){
        // setUserInput({
        //     ...userInput,
        //     'date':event.target.value
        // })
        setUserInput((previousState)=>{
            return {
                ...previousState,
                date:event.target.value
            }
        })
    }

    function submitHandler(event){
        event.preventDefault();

        const costData = {
            'costName':userInput.name,
            'costAmount':userInput.amount,
            'costDate': new Date(userInput.date)
        }
        setIsFormVisible(false)
        props.onSaveCostData(costData)
        setUserInput(()=>{
            return {
                name:"",
                date:"",
                amount:""
            }
        });
    }

    return(
        <div>
            {isFormVisible && <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>
                        Название
                    </label>
                    <input type="text" value={userInput.name} onChange={nameChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>
                        Сумма
                    </label>
                    <input type="number" min="0.01" step="0.01" value={userInput.amount}  onChange={amountChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>
                        Дата
                    </label>
                    <input type="date" min="2019-01-01" max="2024-12-31" value={userInput.date}  onChange={dateChangeHandler}/>
                </div>
                <div className="new-cost__actions">
                    <button type="submit">
                        Добавить расход
                    </button>
                    <button type="button" onClick={cancelButtonHandler}>
                        Отмена
                    </button>
                </div>
            </div>
        </form>
        }
        {
            !isFormVisible && <button type='button' onClick={addNewCostHandler}>Добавить новый расход</button>
        }
        </div>
    )
}

export default CostForm