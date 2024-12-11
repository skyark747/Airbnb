
const Login = ({setShowLogin}) => {
    return (
        <>
         <div class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50" >
        <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6 space-y-6">
            
            <div class="flex justify-between items-center">
                <h2 class="text-lg font-semibold">Log In or Sign Up</h2>
                <button class="text-gray-500 hover:text-gray-700" aria-label="Close" onClick={() => setShowLogin(false)}>
                    &times;
                </button>
            </div>

            <form class="space-y-4">
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                        placeholder="you@example.com"
                        required
                    />
                </div>

                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <button
                    type="submit"
                    class="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-red-600 transition"
                >
                    Continue
                </button>
            </form>

            <div class="flex items-center space-x-2">
                <hr class="flex-1 border-gray-300" />
                <span class="text-sm text-gray-500">or</span>
                <hr class="flex-1 border-gray-300" />
            </div>

            <div class="space-y-3">
                <button
                    type="button"
                    class="w-full flex items-center justify-center bg-gray-100 text-gray-800 py-2 rounded-md hover:bg-gray-200 transition"
                >
                <img src="https://th.bing.com/th/id/OIP.lsGmVmOX789951j9Km8RagHaHa?rs=1&pid=ImgDetMain" alt="Google" class="w-5 h-5 mr-2" />
                    Continue with Google
                </button>
                <button
                    type="button"
                    class="w-full flex items-center justify-center bg-gray-100 text-gray-800 py-2 rounded-md hover:bg-gray-200 transition">
                            <img src="https://i.pinimg.com/736x/27/cf/e3/27cfe319fc5316995f755cee7c78442b.jpg" alt="Facebook" class="w-5 h-5 mr-2" />
                    Continue with Facebook
                </button>
            </div>
        </div>
        </div >
    </>

    )
}

export default Login;