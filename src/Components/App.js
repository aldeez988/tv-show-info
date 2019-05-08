import React from 'react';
import Selector from './Selector';
import Eposide from './Eposide';
import GameOfThrones from '../data/GameOfThrones.json'
import './app.css'

class App extends React.Component {

    state = { searchvalue: GameOfThrones };

    onSelectChange = (e) => {
        const z = e.target.value
        console.log(e.target.value)
        this.setState(prev => {

            return { searchvalue: GameOfThrones.filter(eposide => eposide.name === z) }
        })

    }

    reloadAllEposides = () => {
        this.setState({ searchvalue: GameOfThrones });
    }
    render() {
        return (
            <div className="flext-container" >
                <h1 className="">Game of Thrones</h1>


                <div className="selector-container">
                    <Selector onSelectChange={this.onSelectChange}
                        data={GameOfThrones} reloadAllEposides={this.reloadAllEposides} />
                </div>


                {
                    this.state.searchvalue.map(ep => <Eposide key={ep.id} data={ep} />)

                }


            </div >
        );
    }

};


export default App;