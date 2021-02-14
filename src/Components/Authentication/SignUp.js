import React, { useRef,useState} from 'react'
import {useAuth} from '../../contexts/AuthContext'

export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
    
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }
    
        try {
          setError("")
          setLoading(true)
          await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
          setError("Failed to create an account")
        }
    
        setLoading(false)
      }

    return (
        
        <div className="signIn-page bg-gray-500 min-h-screen">
        <br />
        <br />
        <div className="p-10">
          <h2 className="text-center text-3xl leading-9 
            font-extrabold text-gray-300">
            Sign Up Here
          </h2>
          <p className="text-center text-sm leading-5 text-gray-300">
            <span className="text-teal-400 mx-2">
              Create an account
            </span>
            It's simple and easy
            <br />
          </p>
          <br />
          <br />
          {error && 
           <div className="flex justify-center"><div class="lg:w-1/3 md:w-2/3 w-full align-center
                    py-2 px-4 text-red-700 bg-red-100 rounded-lg mb-3" role="alert">
  <p>{error}</p>
</div></div>}
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center">
              <div className="lg:w-1/3 md:w-2/3 w-full">
                <label 
                className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
                htmlFor="email"
                >
                  Email
                </label>
                <input 
                  type="email"
                  name="email"
                  id="email"
                  placeholder="test.js@gmail.com"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full 
                    py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                  ref={emailRef}
                    required
                />
              </div>
            </div>
  
            <div className="flex justify-center mt-4">
              <div className="lg:w-1/3 md:w-2/3 w-full">
                <label 
                className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
                htmlFor="password"
                >
                  Password
                </label>
                <input 
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*********"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full 
                    py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                    ref={passwordRef}
                    required
                />
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <div className="lg:w-1/3 md:w-2/3 w-full">
                <label 
                className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
                htmlFor="password"
                >
                  Confirm Password
                </label>
                <input 
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*********"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full 
                    py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                    ref={passwordConfirmRef}
                    required
                />
              </div>
            </div>
        
            <div className="mt-4 flex justify-center">
              <button disabled={loading} 
                type="submit"
                className="group w-full lg:w-1/3 md:w-2/3 py-2 px-4  border border-transparent text-sm leading-5 font-medium 
                  rounded-md text-white bg-black hover:bg-teal-400 focus:outline-none focus:border-teal-400 
                  focus:shadow-outline-teal active:bg-teal-400 active:outline-none transition duration-150 ease-in-out"
              >
                Sign Up
              </button>
            </div>
            <h3 className="text-center mt-10 text-gray-200">Already have an account? Log In Here</h3>
          </form>
        </div>
      </div>
        

  
    )
}
