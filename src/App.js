import logo from './logo.svg';
import './App.css';
import Stepper from './components/Stepper';
import { STEPS } from './constants/steps';
import { DUMMY_API_DATA } from './constants/dummyApiData';

function App() {
  return (
    <div className="App">
      <Stepper steps={STEPS} startingStepNumber={0} apiData={DUMMY_API_DATA}/>
    </div>
  );
}

export default App;
