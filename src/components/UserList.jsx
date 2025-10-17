import React, { useEffect, useState } from 'react'
import { getUsers } from '../services/useApi';
import { useNavigate } from 'react-router';

export const UserList = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        const fetching = async () => {
            try {
                const data = await getUsers();
                setUsers(data);
            } catch (error) {
                console.error("my error", error)
            } finally {
                setIsLoading(false);
            }
        }
        fetching();
    }, []);
    
    const goToPost = (idUser, userName) => {
        console.log(idUser, userName);
        localStorage.setItem("user", userName)
        navigate(`/users/${idUser}/posts`)
    }

    if (isLoading) return <h4>Loading...</h4>
    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Company name</th>
                </tr>
            
            {users.map((user) => (
                <tr key={user.id} onClick={() => goToPost(user.id, user.name)}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.company.name}</td>
                </tr>
            ))}
            </table>
        </div>
    )
}
