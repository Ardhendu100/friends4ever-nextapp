"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
function login() {

    const [emailValues, setEmailValues] = useState("");
    const [password, setPassword] = useState("");
    const [loginUserData, setLoginUserData] = useState([]);
    const router = useRouter();

    async function authUser(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", emailValues);
        formData.append("password", password);
        if (formData == null) {
            alert("hey")
        }
        else {
            let res = await fetch('http://127.0.0.1:8000/api/login', {
                method: "POST",
                body: formData,
            });
            res = await res.json();
            // console.log(result.user);
            if (res.code == 200) {
                console.log(res);
                localStorage.setItem("CurrentUser", JSON.stringify(res.user));
                localStorage.setItem("token", res.token);
                setLoginUserData([res.user]);
                router.push('/');
            }
            else {
                alert(res.error)
                setEmailValues("")
                setPassword("")
            }
        }
    }
    return (
        <>
            <section className="min-h-screen flex flex-col">
                <div className="flex flex-1 items-center justify-center">
                    <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                        <form className="text-center">
                            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                                Sign in
                            </h1>
                            <div className="py-2 text-left">
                                <input type="email" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                                    placeholder="Email"
                                    required
                                    value={emailValues}
                                    onChange={(e) => setEmailValues(e.target.value)}
                                />
                            </div>
                            <div className="py-2 text-left">
                                <input type="password" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                                    placeholder="Password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="py-2">
                                <button type="submit" className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
                                    onClick={authUser}
                                >
                                    Sign In
                                </button>
                            </div>
                        </form>
                        <div className="text-center">
                            <a href="#" className="hover:underline">Forgot password?</a>
                        </div>
                        <div className="text-center mt-12">
                            <span>
                                Don't have an account?
                            </span>
                            <a href="#" className="font-light text-md text-indigo-600 underline font-semibold hover:text-indigo-800">Create One</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default login