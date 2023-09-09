import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeTheme } from '../reducers/theme'

const Theme = () => {
    const [color, setColor] = useState('')
    const dispatch = useDispatch()
    return (
        <div>
            <input type="text" onChange={(e) => setColor(e.target.value)} />
            <button type="" onClick={() => dispatch(changeTheme(color))}>Change Theme</button>
        </div>
    )
}

export default Theme