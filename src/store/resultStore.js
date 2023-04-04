import {makeAutoObservable} from "mobx";

class ResultStore {

    _resultData = []
    constructor() {

        makeAutoObservable(this)
    }

    setResultData(result) {
        this._resultData = result
    }

    get resultData() {
        return this._resultData
    }
}

export default new ResultStore()