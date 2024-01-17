import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import style from '../style/style.module.scss'
import Navbar from '../components/Navbar'

function Detail() {
    const [detail, setDetail] = useState()
    const { id } = useParams()

    async function fetchDetail() {
        try {
            const response = await axios.get(`http://localhost:3000/password/${id}`)
            setDetail(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchDetail()
    }, [id])

    return (
        <div className={style.container}>
            <Navbar />
            <div className={style.formContainer}>
                <div className={style.formCard}>
                    <h2>Detail Account</h2>
                    <form id="add-account-form">
                        <label for="email">Email:</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={detail?.email}
                            required
                            disabled />
                        <label for="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={detail?.password}
                            required
                            disabled />
                        <label for="provider">Provider:</label>
                        <input
                            type="text"
                            id="provider"
                            name="provider"
                            value={detail?.provider}
                            required
                            disabled />
                        <label for="category">Category:</label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            value={detail?.category}
                            required
                            disabled />
                        <Link to="/">
                            <button type="button">Back</button>
                        </Link>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Detail