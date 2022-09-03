import React from 'react'
import RoomList from './RoomList'

export default function RoomsView({roomList}) {
  return (
    <div>
        <div>
            <h3>Stays in Finland</h3>
            <span>12 stays</span>
        </div>
        <RoomList roomList={roomList} />
    </div>
  )
}
