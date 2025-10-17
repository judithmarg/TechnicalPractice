import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { getCommentsByPostId, getPostsById } from '../services/useApi';

export const PostComments = () => {
    const [comments, setComments] = useState([]);
    const params = useParams();
    console.log(params)
    const { id } = params;
    const [isLoading, setIsLoading] = useState(true);
    const user = localStorage.getItem("user");
    const title = localStorage.getItem("title");
    const content = localStorage.getItem("content");


    useEffect(() => {
        setIsLoading(true);
        const fetching = async () => {
            try {
                const data = await getCommentsByPostId(id);
                console.log("data", data)
                setComments([data]);
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false);
            }
        }
        fetching();
    }, [])
    if (isLoading) return <h4>Loading posts...</h4>

    return (
        <div>
            <div>
                <div>{title}</div>
                <div>{content}</div>
            </div>
            <h3>{user}</h3>
            <div>
                {comments.map((comment) => {
                    return (
                        <div key={comment.id}>
                            <h3>{comment.name}</h3>
                            <h3>{comment.email}</h3>
                            <h3>{comment.body}</h3>
                            {/* <p>{post.body}</p> */}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
