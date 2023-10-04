import './App.css';
import { FormClass } from './Components/FormValidation/FormClass';
import { ValidateForm } from './Components/FormValidation/ValidateForm';
import { Hello } from './Components/Hello';


function App() {
  return (
   <div className='App'>
    <Hello/>
    {/* <FormClass/> */}
    <ValidateForm/>
   </div>
  );
}

export default App;
