import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const Navigate = useNavigate()
  const useLogin = () => {
    localStorage.setItem('token','现在登录了')
    Navigate('/dashboard', {
      replace:false,
      state: {
        form: 'login'
      }
    })
  }
  return (
    <div>
      <button onClick={useLogin}>login</button>
    </div>
  )
}
