import React , {useState, useEffect} from 'react';
import CardUser from '../../componets/CardUser/CardUser'


const ItemPage = () => {

    const [user, setUser] = useState({});

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${user.id}`)
            .then(response => response.json())
            .then(json => setUser(json))
    },[])

    return (
        <div>
            <CardUser userData={user}/>
        </div>
    )
}

export default ItemPage