import './App.css';
import InitialData from "./components/InitialData/InitialData";
import ResultData from "./components/ResultData/ResultData";
import ExportXls from "./components/ExportXls/ExportXls";

function App() {
    return (
        <div className='App'>
            {/*<div className='App-header'></div>*/}
            <InitialData/>
            <ResultData/>
        </div>
    );
}

export default App;
