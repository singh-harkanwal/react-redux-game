import React from 'react'
import Player from '../player'
import Map from '../map'
import {tiles} from '../../data/maps/1'
import store from '../../config/store'

const World = props => {
  store.dispatch({ type: 'ADD_TILES', payload:{
    tiles:tiles,
  } })
  return (
    <div>
      <h1 className="text">React Redux Game</h1>
      <div
        style={{
          position:'relative',
          width:'800px',
          height:'400px',
          margin:'20px auto'
        }}
      >
        <Map/>
        <Player/>
      </div>
      <p className="text">Please use arrow keys to reach the treasure box. You could walk through few trees.<i> Desktop Only</i></p>
    </div>
  )
}

export default World
