import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
              <img class="mx-auto h-10 w-auto" src="https://static.vecteezy.com/system/resources/previews/016/136/126/original/cartoon-alarm-clock-icon-in-comic-style-timer-sign-illustration-pictogram-stopwatch-splash-business-concept-vector.jpg" alt="Your Company" />
              <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create new account</h2>
            </div>

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <div class="space-y-6">
                <div>
                  <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                  <div class="mt-2">
                    <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md 
                    border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                    focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div>
                  <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                  </div>
                  <div class="mt-2">
                    <input id="password" name="password" type="password" required class="block w-full rounded-md border-0 
                    py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                    sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div>
                  <label for="repassword" class="block text-sm font-medium leading-6 text-gray-900">Confirmed password</label>
                  <div class="mt-2">
                    <input id="repassword" name="password" type="password" required class="block w-full rounded-md 
                    border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                    focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div>
                  <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white 
                  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Register
                  </button>
                </div>
              </div>

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