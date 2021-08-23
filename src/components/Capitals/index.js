import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitails extends Component {
  state = {country: 'India', name: 'NEW_DELHI'}

  stateChange = event => {
    console.log(event.target.value)
    const item = countryAndCapitalsList.filter(
      eachItem => eachItem.id === event.target.value,
    )

    this.setState({country: item[0].country, name: item[0].id})
  }

  Opts = item => (
    <option value={item.item.id}>{item.item.capitalDisplayText}</option>
  )

  render() {
    const {country, name} = this.state
    return (
      <div className="outerDiv">
        <h1>Countries and Capitals</h1>
        <div className="innerDiv">
          <select onChange={this.stateChange} className="select" value={name}>
            {countryAndCapitalsList.map(eachItem => (
              <this.Opts item={eachItem} key={eachItem.id} />
            ))}
          </select>
          <p>is capital of which country?</p>
        </div>
        <p>{country}</p>
      </div>
    )
  }
}

export default Capitails
