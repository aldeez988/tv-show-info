import React from 'react';
import './selector.css'
const Selector = (props) => {
    console.log("Selectorn \n", props.data)
    let buttonRef = null;

    const handleChange = (e) => {
        buttonRef.style.display = "inline";
        props.onSelectChange(e)
    }
    return (
        <div class="selector-container">
            <label>Show: </label>

            <select onChange={handleChange}>

                {
                    props.data.map(eposide => <option key={eposide.id} value={eposide.name} > {eposide.name}</option>)
                }

            </select>
            <span className="ui buttons">
                <button onClick={() => {
                    buttonRef.style.display = "none"
                    props.reloadAllEposides()
                }}
                    ref={(btn) => buttonRef = btn}
                    className="ui labeled icon button active" style={{ display: "none" }}>
                    <i className="left chevron icon"></i>
                    Back To All Eposides
                </button>
            </span>
        </div>
    );
};

;


export default Selector; 
