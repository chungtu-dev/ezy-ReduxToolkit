import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../reducers/user'

const Login = () => {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      name, age, email
    }
    dispatch(login(data))
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="number" onChange={(e) => setAge(e.target.value)} placeholder="Age" />
        <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />

        <input type="submit" name="Login" />
      </form>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  )
}

export default Login