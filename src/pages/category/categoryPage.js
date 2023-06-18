import React from 'react';
import {useState ,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CardUser from '../../componets/CardUser/CardUser';

const CategoryPage = () => {

    const [datas, setDatas] = useState([]);
    let {categoryId} = useParams();

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(json => setDatas(json))
    },[])
    
    const datosCategoria = datas.filter((data)=>{
        return data.category === categoryId;
    })
    return (
        <div>
            <h1 style={{textAlign: "center"}}>{categoryId}</h1>
            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 10}}>
            {datosCategoria.map((user) => {
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

export default CategoryPage
