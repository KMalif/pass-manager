import React, { useEffect, useState } from 'react'
import style from '../style/style.module.scss'
import Table from '../components/Table'
import axios from 'axios'
import Navbar from '../components/Navbar'
import { Link, useParams } from 'react-router-dom'

function Category() {
    const [categories, setCategories] = useState()
    const {id} = useParams()

    async function fetchByCategory() {
        try {
            const response = await axios.get(`http://localhost:3000/password?category=${id}`)
            setCategories(response.data)
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchByCategory()
    }, [id])
    return (
        <div className={style.container}>
            <Navbar />
            <div className={style.formContainer}>
                <Link to='/add'>
                    <button class={style.addButton}>Add</button>
                </Link>
            </div>
            <div>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Website Name</th>
                        <th>Email</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                    {
                        categories?.map((el, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{el?.provider}</td>
                                <td>{el?.email}</td>
                                <td>{el.category}</td>
                                <td>
                                    <Link to={`/${el.id}`}>
                                        <button className={style.detailButton}>Detail</button>
                                    </Link>
                                    <button onClick={() => handleDelete(el.id)} className={style.deleteButton}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>
    )
}

export default Category