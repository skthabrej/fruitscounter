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
                    <h1>I have <span className="m-span">{count1}</span> mangos and <span className="a-span">{count2}</span> bananas!</h1>
                    <p className="paragraph">Click to add fruits count</p>
                    <div className="all-buttons">
                        <div className="buttons-direction">
                            <img src="https://i.postimg.cc/4dNskPGL/mango-g8b6fd4f7d-1280.png" className="image" alt = 'mango'/>
                            <button className="buttons-container" onClick={this.mangoIncrement}>Mango</button>
                        </div>
                        <div className="buttons-direction">
                            <img src="https://i.postimg.cc/BnpJhR9L/apple-g365ffc6e0-1280.png" className="image" alt = 'apple'/>
                            <button className="buttons-container1" onClick={this.bananaIncrement}>Cherry</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default FruitsCounter