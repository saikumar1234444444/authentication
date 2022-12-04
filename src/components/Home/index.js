import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="bg-container">
        <Header />
        <div className="home-container">
          <div className="text-container">
            <h1>
              Clothes That Get You <br />
              Noticed
            </h1>
            <p>
              Fashion is part of the daily air, we have to maintain good attire
              in daily life to get noticed by someone, there are many shops in
              hyderabad to buy good clothes, best shop is good clothes store
            </p>
            <button type="button" className="button1">
              Shop Now
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="clothes-image"
          />
        </div>
      </div>
    )
  }
}
export default Home
