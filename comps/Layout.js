import Head from 'next/head';
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return ( 
        <div className="content">
    <Head>
        <title>Travel List</title>
    </Head>
            <Navbar/>
            {children}
            <Footer/>
        </div>
     );
}
 
export default Layout;