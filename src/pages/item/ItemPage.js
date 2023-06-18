import React , {useState, useEffect} from 'react';
import CardUser from '../../componets/CardUser/CardUser'
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';

const ItemPage = () => {

    let {id} = useParams();

    const [user, setUser] = useState({});

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(json => setUser(json))
    },[])

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <CardUser userData={user}/>
            <Button variant="contained" disableElevation>
                Price: ${user.price}
            </Button>
        </div>
    )
}

export default ItemPage