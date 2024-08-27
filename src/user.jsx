import { useNavigate } from 'react-router-dom'
import './App.css'
import { deleteUser } from './api'
import { useState } from 'react'
//To view the user details
const Users = ({user, render, setRender, getEditData}) => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
//To delete the user
    const removeUser = async (id) => {
        setLoading(true)
        await deleteUser(id)
        setRender(render + 1)
    }
//To edit the user and navigate
    const getUserData = (userData) => {
        getEditData(userData)
        navigate('/add-user')
    }
    return(
        <div className="d-flex flex-column justify-content-between align-items-center m-2 p-2 rounded"
        style={{width:'50vh', textAlign:'center', fontsize:'3vh', height:'35vh', backgroundColor:'peachpuff'}}>
            <div onClick={() => navigate(`/${user.id}`)}>
                <h2>{user.name}</h2>
                <p><strong>Email:</strong>{user.email}</p>
                <p><strong>Company:</strong>{user.company}</p>
                <p><strong>Address:</strong>{user.address}</p>
                <p><strong>Mobile:</strong>{user.mobile}</p>
                
            </div>
            <div className="d-flex">
                <button className="btn btn-info me-2"
                style={{width:'75px'}}
                onClick={() =>getUserData(user)}>Edit</button>
                <button className="btn btn-danger"
                style={{width:'75px'}}
                onClick={() => removeUser(user.id)}>
                {loading ? <div className="spinner-border spinner-border-sm text-light" role="status">
                    <span className="sr-only">Loading...</span></div>:'Delete'}</button></div>
            </div>
    )
}

export default Users