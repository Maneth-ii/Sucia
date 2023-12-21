import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-slate-200 text-slate-800 flex flex-col gap-4 p-4 rounded-md">
          <h1 className="self-center text-3xl font-semibold">Login</h1>
          <input className="px-4" type="text" name="email" placeholder="Enter Your Email"/>
          <input className="px-4" type="password" name="password" placeholder="Enter your Password"/>
          <input type="submit" name="login" value={"Login"} className="bg-slate-800 w-30 rounded-md self-center text-slate-200 px-3 active:focus:scale-95"/>
          <p>Don`t Have an account <span className="text-slate-500"><Link to={'/register'}>Register</Link></span></p>
      </div>
    </div>
  )
}

export default Login