import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(email, password)

    setEmail('')
    setPassword('')

  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form 
             onSubmit={submitHandler}
            className='flex flex-col items-center justify-center'>

                <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required className='border-2 text-white outline-none bg-transparent
                 border-emerald-600 rounded-full py-2 px-6 placeholder:text-gray-400' 
                 type='email' placeholder='Enter Your Email' />

                <input
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                required className='border-2 text-white outline-none bg-transparent
                 border-emerald-600 rounded-full py-2 px-6 mt-3 placeholder:text-gray-400'
                   type='password' placeholder='Enter Your Password' />

                <button className='border-2 text-white outline-none border-none hover:bg-emerald-700
                 bg-emerald-600 rounded-full py-2 px-8 mt-7 font-semibold'
                  type='submit'>Login</button>

            </form>
        </div>
    </div>
  )
}

export default Login