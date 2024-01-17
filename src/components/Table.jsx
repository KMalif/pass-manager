import React from 'react'
import style from '../style/style.module.scss'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Table({ persons, setPersons }) {

    const handleDelete = async (id) => {
        const confirmed = window.confirm('Apakah Anda yakin ingin menghapus akun ini?');

        if (!confirmed) {
            return;
        }

        try {
            const method = await axios.delete(`http://localhost:3000/password/${id}`);

            setPersons((prevState) => prevState.filter((el) => el.id !== id));
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
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
                    persons?.map((el, index) => (
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
    )
}

export default Table