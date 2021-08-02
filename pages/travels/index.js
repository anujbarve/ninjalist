import styles from '../../styles/Travels.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props:{
            travels:data
        }
    }
}

const Travels = ({travels}) => {
    return ( 
        <div>
            <h1>
                Travels
            </h1>
            {travels.map(travel => (
                <Link href={'/travels/' + travel.id} key={travel.id}>
                    <a className={styles.single}>
                        <h3>{travel.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
     );
}
 
export default Travels;