import React from 'react';
import {CSVLink} from 'react-csv'
import resultStore from "../../store/resultStore";

const ExportXls = () => {
    const dataSet = resultStore.resultData
    const headers = [
        {label: 'День', key: 'day'},
        {label: 'Желаемый профит', key: 'profit'},
        {label: 'Необходимый доход с учетом пэйаута', key: 'need'},
        {label: 'Итоговый депозит на конец сессии', key: 'depo'}
    ]

    return (
        <button style={{cursor: 'pointer'}}>
            <CSVLink style={{textDecoration:'none'}} data={dataSet} headers={headers} filename='DepositCalculation'>Сохранить CSV</CSVLink>
        </button>
    );
};

export default ExportXls;