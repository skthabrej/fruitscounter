import { Component } from "react";
import './FruitsCounter.css'

class FruitsCounter extends Component {
    state = {count1:0,count2:0}
    mangoIncrement = () => {
        this.setState(previous => ({
            count1:previous.count1+1
        }))
    }
    bananaIncrement = () => {
        this.setState(previous => ({
            count2:previous.count2+1
        }))
    }
    render() {
        const {count1,count2} = this.state
        return (
            <div className="background-container">
                <div className="tab-container">
                    <h1>bob ate <span>{count1}</span> mangos and<span>{count2}</span>bananas</h1>
                    <div className="buttons-direction">
                        <button className="buttons-container" onClick={this.mangoIncrement}>Mango</button>
                        <button className="buttons-container" onClick={this.bananaIncrement}>Banana</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default FruitsCounter