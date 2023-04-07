import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('isUserlogedin') !== 'true') {
      navigate('/signup');
    }
  }, [])
  return (
    <div>
      <h1>Home pages</h1>
    </div>
  )
}

export default Home