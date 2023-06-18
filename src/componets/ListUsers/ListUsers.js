import React , {useState, useEffect}from 'react';
import CardUser from '../CardUser/CardUser';
import "./ListUsers.css"
import { Link } from 'react-router-dom';

const ListUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(json => setUsers(json))
    },[])
    return (
        <div>
            <h1 className='title'>lista</h1>
            <div className='general'>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <Link to={`/item/${user.id}`}>
                            <CardUser userData = {user}/>   
                        </Link>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default ListUsers