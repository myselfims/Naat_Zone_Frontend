import React from 'react'
import NavBar from './components/NavBar'
import Player from './components/Player'

const Base = ({page}) => {
  return (
    <div>
        <div>
            <NavBar/>
        </div>
        <div>
            {page}
        </div>
        <div className=' h-12'>
            <Player/>
        </div>
    </div>
  )
}

export default Base
