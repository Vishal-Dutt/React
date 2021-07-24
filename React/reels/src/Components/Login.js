import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false);
  const { login, currentUser } = useContext(AuthContext);

  // useHistory Hook give access to the history hook
  const history = useHistory();


  const handleSubmit = async (e) => {
    console.log('hi');
    e.preventDefault();

    try {
      console.log('Logging in user')
      setLoading(true)
      await login(email, password)
      setLoading(false)
      history.push('/')
    } catch {
      setError("Failed to log in")
      setTimeout(() => setError(''), 2000)
      setLoading(false)
    }
  }

  // Checks if the User is logged in then no need to show the login route redirect it to the feed component
  // ComponentDidMount
  useEffect(() => {
    if (currentUser) {
      history.push('/')
      // history set the component route in this case it set to the feed page. 
    }
  }, [])


  return (
    <div>
      <form onSubmit={handleSubmit} >

        <div>
          <label htmlFor=''>Email</label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label htmlFor=''>Password</label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type='submit' disabled={loading}>Login</button>
        {error ? <h1>{error}</h1> : <></>}
      </form>

    </div>
  )
}

export default Login