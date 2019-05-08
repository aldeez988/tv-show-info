import React from 'react';
import './selector.css'
const Selector = (props) => {
    console.log("Selectorn \n", props.data)
    return (
        <div class="selector-container">
            <label>Show: </label>

            <select onChange={(e) => props.onSelectChange(e)}>

                {
                    props.data.map(eposide => <option key={eposide.id} value={eposide.name} > {eposide.name}</option>)
                }

            </select>
            <span className="ui buttons">
                <button onClick={() => props.reloadAllEposides()} className="ui labeled icon button active">
                    <i className="left chevron icon"></i>
                    Back To All Eposides
                </button>
            </span>
        </div>
    );
};




export default Selector; 
