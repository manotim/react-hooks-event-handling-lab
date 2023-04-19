// Code Keypad Component Here
import React from 'react'

function Keypad() {
  function handlePassword(e) {
    // console.log(e.target.value)
    console.log('Entering password...')
  }
  return (
    <div>
      <label>
        Enter password:{' '}
        <input
          onChange={handlePassword}
          type='password'
          name='password'
          placeholder='enter password...'
        />
      </label>
    </div>
  )
}

export default Keypad
