import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { getPostsById } from '../services/useApi';

export const UserPosts = () => {
    const [posts, setPosts] = useState([])
    const params = useParams();
    const { id } = params;
    const [isLoading, setIsLoading] = useState(true);
    const user = localStorage.getItem("user");
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        const fetching = async () => {
            try {
                const data = await getPostsById(id);
                console.log("data", data)
                setPosts([data]);
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false);
            }
        }
        fetching();
    }, [])

    const goToPostCom = (post) => {
        const {id, title, body} = post
        localStorage.setItem("title", title)
        localStorage.setItem("content", body)
        navigate(`/posts/${id}/comments`)
    }
    if (isLoading) return <h4>Loading posts...</h4>
    
    return (
        <div>
            <h2>{user}</h2>
            <div>
                {posts.map((post) => {
                    return (
                        <div key={post.id} onClick={()=>goToPostCom(post)}>
                            <h3>{post.title}</h3>
                            {/* <p>{post.body}</p> */}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
