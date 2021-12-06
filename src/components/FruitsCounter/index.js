import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mCount: 0, bCount: 0}

  IncrementMango = () => {
    this.setState(prevObj => ({mCount: prevObj.mCount + 1}))
  }

  IncrementBanana = () => {
    this.setState(prevObj => ({bCount: prevObj.bCount + 1}))
  }

  render() {
    const {mCount, bCount} = this.state

    return (
      <div className="main">
        <div className="container">
          <h1>
            Bob ate <span>{mCount}</span> mangoes <span>{bCount}</span> bananas
          </h1>
          <div className="imageCard">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
            </div>
          </div>
          <div className="buttonContainer">
            <div>
              <button type="submit" onClick={this.IncrementMango}>
                Eat Mango
              </button>
            </div>
            <div>
              <button type="submit" onClick={this.IncrementBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
