import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-red-600'>
            <form className='flex flex-col items-center justify-center'>
                <input className='border-2 text-white outline-none bg-transparent border-emerald-600 rounded-full py-3 px-5 placeholder:text-white' type='email' placeholder='Enter Your Email' />
                <input type='password' placeholder='Enter Your Password' />
                <button type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login