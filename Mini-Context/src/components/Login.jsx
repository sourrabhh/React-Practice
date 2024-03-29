import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    // setUser is state in the context/UserContextProvider
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        // Stop the prevent Response of calling Post Method 
        e.preventDefault()
        setUser({userName, password}) // Send the data to userCOntextProvider
    }

  return (
    <div>
        <h2>Login </h2>

            <input type='text'
                value={userName}
                onChange={ (e) => setUserName(e.target.value)}
                placeholder='Username' />

            <input type='password' 
                value={password}
                onChange={ (e) => setPassword(e.target.value)}
                placeholder='Password' />

            <button type='submit' onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default Login