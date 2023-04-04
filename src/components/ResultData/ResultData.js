import React from 'react';
import resultStore from "../../store/resultStore";
import {observer} from "mobx-react-lite";
import './ResultData.scss'

const ResultData = observer(() => {

    if(resultStore.resultData.length<=0){
        return <div style={{fontSize:20, color:'wheat'}}>Введите исходные данные для расчета</div>
    }

    return (
        <div className='result-wrapper'>
            <table>
                <tbody>

                <tr className='tr-head'>
                    <th>День</th>
                    <th>Желаемый профит</th>
                    <th>Необходимый доход с учетом пэйаута</th>
                    <th>Итоговый депозит на конец сессии</th>
                </tr>


                {resultStore.resultData.map(el =>
                        <tr key={el.day}>
                            <td>{el.day}</td>
                            <td>{el.profit}</td>
                            <td>{el.need}</td>
                            <td>{el.depo}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
});

export default ResultData;