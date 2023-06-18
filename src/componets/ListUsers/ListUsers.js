import React , {useState, useEffect}from 'react';
import CardUser from '../CardUser/CardUser';
import "./ListUsers.css"

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
                        <CardUser userData = {user}/>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default ListUsers