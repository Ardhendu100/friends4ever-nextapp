import { useEffect, useState } from "react";

function HomePage(props) {
    const [postDetails, setPostDetails] = useState([]);
    // const { token } = props;
    const [token, setToken] = useState("");


    useEffect(() => {
        if (typeof window !== 'undefined') {
            setToken(localStorage.getItem("token"));
        }
        console.log(token)
        if (token) {
            fetchData();
        }
    }, [token]);

    const options = {
        method: 'GET',
    };
    async function fetchData() {
        console.log(token)
        const response = await fetch('http://127.0.0.1:8000/api/posts', options);
        console.log(response)

    }
    return (
        <>
            <div className="flex justify-center mt-5">
                <div className="flex-1 max-w-screen-sm">
                    <div>

                        <div
                            className="block mt-5 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">

                            <div className="shrink-0 ml-4">
                                <img className="h-16 w-16 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
                            </div>
                            <a href="#!" className="mt-2">
                                <img
                                    className="rounded-t-lg"
                                    src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                                    alt="" />
                            </a>
                            <div className="p-6">
                                <h5
                                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    Card title
                                </h5>
                                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </p>
                                <button
                                    type="button"
                                    className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Button
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default HomePage