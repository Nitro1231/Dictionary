import React from 'react'
import searchimg from '../assets/img/Search.svg'

class Main extends React.Component {
  render() {
    return (
      <>
        <div className='search'>
          <input className='searchbox' type='search' placeholder='Search' />
          <img className='searchimg' src={searchimg} />
        </div>
        <div className='itembox'> asdasd</div>
      </>
    )
  }
}

export default Main
