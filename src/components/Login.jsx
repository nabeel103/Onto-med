import React from 'react'

const Login = () => {
    
  return (
    

    <div class="flex min-h-full flex-col justify-center px-6 py-24 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-20 w-auto" src={ require("./images/login.png")} />
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100">Sign in to your account</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
            <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                    Email address
                </label>
                <div class="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>

            <div>
                <div class="flex items-center justify-between">
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">Password</label>
                <div class="text-sm">
                    <a href="#" class="font-semibold text-green-500 hover:text-green-400">Forgot password?</a>
                </div>
                </div>
                <div class="mt-2">
                <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"/>
                </div>
            </div>

            <div>
                <button type="submit" class="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500">Sign in</button>
            </div>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a href="/signup" class="font-semibold leading-6 text-green-500  hover:text-green-400"> Create a new account</a>
            </p>

            


        </div>


        <div className='flex-col mt-20 max-w-[1230px] mx-auto'>
                
            <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Quick Login:</h2>
            <ul class="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                <li>
                    <a href="/admin">
                        Admin
                    </a>
                    
                </li>
                <li>
                    <a href="/patient">
                        Patient
                    </a>
                </li>
                <li>
                    <a href="/practitioner">
                        Practitioner
                    </a>
                </li>
                <li>
                    <a href="/researcher">
                        Researcher
                    </a>
                </li>
                <li>
                    <a href="/knowledgeengr">
                        Knowledge Engineer
                    </a>
                </li>
            </ul>

        </div>



    </div>
  )
}

export default Login