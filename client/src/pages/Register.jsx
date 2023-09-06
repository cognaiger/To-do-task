import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/auth/register", {
        email: email,
        username: username,
        password: password,
        repassword: repassword
      });

      if (response.status === 201) {
        navigate("/login");
      } else {
        setMsg("Register fail, please try again!");
      }
    } catch (err) {
      setMsg("Register fail, please try again");
    }
  }


    return (
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
              <img class="mx-auto h-10 w-auto" src="https://static.vecteezy.com/system/resources/previews/016/136/126/original/cartoon-alarm-clock-icon-in-comic-style-timer-sign-illustration-pictogram-stopwatch-splash-business-concept-vector.jpg" alt="Your Company" />
              <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create new account</h2>
            </div>

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form class="space-y-6" onSubmit={handleRegister}>
                <div>
                  <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                  <div class="mt-2">
                    <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md 
                    border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                    focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>

                <div>
                  <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
                  <div class="mt-2">
                    <input id="username" name="username" type="text" required class="block w-full rounded-md 
                    border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                    focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={username} onChange={(e) => setUsername(e.target.value)} />
                  </div>
                </div>

                <div>
                  <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                  </div>
                  <div class="mt-2">
                    <input id="password" name="password" type="password" required class="block w-full rounded-md border-0 
                    py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                    sm:text-sm sm:leading-6" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </div>

                <div>
                  <label for="repassword" class="block text-sm font-medium leading-6 text-gray-900">Confirmed password</label>
                  <div class="mt-2">
                    <input id="repassword" name="password" type="password" required class="block w-full rounded-md 
                    border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                    focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={repassword} onChange={(e) => setRePassword(e.target.value)} />
                  </div>
                </div>

                <div class="mt-10 text-center leading-9 tracking-tight text-gray-900">
                  {msg ? <p>{msg}</p> : null}
                </div>

                <div>
                  <button class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm 
                  hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  type="submit">
                    Register
                  </button>
                </div>
              </form>

              <p class="mt-10 text-center text-sm text-gray-500">
                Have already be a member?
                <button class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-2">
                  <Link to="/login">Login here</Link>
                </button>
              </p>
            </div>
        </div>
    )
}

export default Register;