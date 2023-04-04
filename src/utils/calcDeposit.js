export const calcDeposit = (deposit, days, percent,payout) => {

    let result = []

    for (let i = 0; i < days; i++) {
        let x = deposit / 100 * percent
        deposit = deposit + x
        // console.log('Day', i + 1, '|', 'Depo:', deposit.toFixed(2), '|', 'Day profit:', x.toFixed(2), '|', 'need:', (x + x * 0.2).toFixed(2))

        // let dayRes={'day':i+1, 'profit': x.toFixed(2), 'need':(x + x * 0.2).toFixed(2), 'depo':deposit.toFixed(2)}

        let dayRes={'day':i+1, 'profit': x.toFixed(2), 'need':(x + x * (payout/100)).toFixed(2), 'depo':deposit.toFixed(2)}

        result.push(dayRes)

    }
    // deposit = deposit.toFixed(2)
    // console.log('Ваши тугрики: ', deposit)
    // console.log(result)
    return result
}

