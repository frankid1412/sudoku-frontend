import { useState} from "react";
import './transcribe.css';

function LanguageChoose({selects}){
    const [selectedOption, setSelectedOption] = useState('English');
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const options = selects.map((select)=>{
        return <option key={select.label} value={select.label}> {select.label} </option>
            
    });

    return (<div className="row">
         <h3>Language:</h3>
         <select  value={selectedOption} onChange={handleOptionChange}>
            {options}
         </select>
  </div>);
}

export default LanguageChoose;