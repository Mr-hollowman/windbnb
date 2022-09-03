import React from 'react'
import NavBar from './NavBar'
import RoomList from './RoomList'

export default function RoomsView({roomList}) {
  return (
    <div>
        <NavBar />
        <div className='d-flex justify-content-between header-view'>
            <h3>Stays in Finland</h3>
            <span>12 stays</span>
        </div>
        <RoomList roomList={roomList} />
    </div>
  )
}
