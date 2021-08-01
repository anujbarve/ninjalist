import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';

const NotFound = () => {

    const router = useRouter();

    useEffect(()=>{
        setTimeout(() => {
            router.push('/');          
        },5000)
    },[])

    return ( 
        <div className="not-found">
            <h1>OOPSSS.....</h1>
            <h2>That page cannot be found</h2>
            <p>Go Back to <Link href="/"><a> Home Page </a></Link></p>
        </div>
     );
}
 
export default NotFound;