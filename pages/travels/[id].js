
 
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(travel => {
        return {
            params:{id: travel.id.toString()}
        }
    })

    return {
        paths:paths,
        fallback: false
    }
}


export const getStaticProps = async (context) =>{
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users' + id);
    const data = await res.json()

    return {
        props: {travels: data}
    }
}

const Details = ({travel}) => {
    return ( 
        <div>
            <p>{travel.name}</p>
            <p>{travel.website}</p>
        </div>
     );
}

export default Details;