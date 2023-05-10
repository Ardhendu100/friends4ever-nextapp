import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
function register() {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [emailValues, setEmailValues] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [registerUserData, setRegisterUserData] = useState([]);
    const router = useRouter();

    async function registerUser(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("username", username);
        formData.append("email", emailValues);
        formData.append("password", password);
        formData.append("confirm_password", confirmPassword);
        if (formData == null) {
            alert("hey")
        }
        else {
            let res = await fetch('http://127.0.0.1:8000/api/register', {
                method: "POST",
                body: formData,
            });
            res = await res.json();
            // console.log(result.user);
            if (res.code == 200) {
                setRegisterUserData([res.user]);
                router.push('/login');
            }
            else {
                alert(res.error)
                setEmailValues("")
                setPassword("")
                setName("")
                setUsername("")
                setConfirmPassword("")

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
                                Register
                            </h1>
                            <div className="py-2 text-left">
                                <input type="text" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                                    placeholder="Name"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="py-2 text-left">
                                <input type="email" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                                    placeholder="Email"
                                    required
                                    value={emailValues}
                                    onChange={(e) => setEmailValues(e.target.value)}
                                />
                            </div>
                            <div className="py-2 text-left">
                                <input type="text" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                                    placeholder="Username"
                                    required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
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
                            <div className="py-2 text-left">
                                <input type="password" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                                    placeholder="Confirm Password"
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            <div className="py-2">
                                <button type="submit" className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
                                    onClick={registerUser}
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                        <div className="text-center mt-12">
                            <span>
                                Already have an account?
                            </span>
                            <Link href="/login" className="font-light text-md text-indigo-600 underline font-semibold hover:text-indigo-800"> Login</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default register