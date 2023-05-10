import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
export default function App({ Component, pageProps }) {
  const router = useRouter()
    const [token, setToken] = useState("");

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setToken(localStorage.getItem("token"));
        }
    }, [])
  return (
    <>
      <Navbar />
      <Component {...pageProps} token={token} />
    </>

  )

}
