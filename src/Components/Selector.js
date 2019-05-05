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
        </div>
    );
};




export default Selector; 
