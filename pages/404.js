import Link from 'next/link';

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>OOPSSS.....</h1>
            <h2>That page cannot be found</h2>
            <p>Go Back to <Link href="/"><a> Home Page </a></Link></p>
        </div>
     );
}
 
export default NotFound;