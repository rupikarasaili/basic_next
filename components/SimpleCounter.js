import { useState } from 'react'

export default function SimpleCounter() {
    const {count, handleClick} = props
  return (
    <div>
      <button onClick={handleClick}>
      Plus
      </button> {count}
    </div>
  )
}
