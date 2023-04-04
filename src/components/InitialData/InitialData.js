import React, {useState} from 'react';
import './initialData.scss'
import {calcDeposit} from "../../utils/calcDeposit";
import resultStore from "../../store/resultStore";
import ExportXls from "../ExportXls/ExportXls";


const InitialData = () => {

    const [deposit, setDeposit] = useState('')
    const [percent, setPercent] = useState('')
    const [days, setDays] = useState('')
    const [payout, setPayout] = useState('')

    const [prefVisible, setPrefVisible] = useState(true)

    const calculateDeposit = () => {
        let result = calcDeposit(deposit, days, percent, payout)
        resultStore.setResultData(result)
        setPrefVisible(false)
    }

    if (!prefVisible){
        return <div className='initialDataSettings'>
            <button onClick={()=>setPrefVisible(true)}>Настроить</button>
            {resultStore.resultData.length>0 && <ExportXls />}
        </div>
    }

    return (
        <div className='initialDataWrapper' onClick={()=>setPrefVisible(false)}>
            <div className="initialDataForm" onClick={(e)=>e.stopPropagation()}>
                <div style={{paddingTop:'10px'}}>Cтартовый депозит</div>
                <input type='number' placeholder='Введите стартовый депозит' value={deposit}
                       onChange={e => setDeposit(Number(e.target.value))}/>
                <div>Дневной доход в %</div>
                <input type="number" placeholder='Введите желаемый % дневного дохода' value={percent}
                       onChange={e => setPercent(Number(e.target.value))}/>
                <div>Количество рабочих дней</div>
                <input type="number" placeholder='Введите количество рабочих дней' value={days}
                       onChange={e => setDays(Number(e.target.value))}/>
                <div>Дневной пэйаут пропа в %</div>
                <input type="number" placeholder='Введите % дневного пэйаута' value={payout}
                       onChange={e => setPayout(Number(e.target.value))}/>
                <button className='initialDataCalcBtn' onClick={calculateDeposit}>Рассчитать</button>
            </div>
        </div>
    );
};

export default InitialData;