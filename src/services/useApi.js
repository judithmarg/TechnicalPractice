export async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if( !response.ok) throw new Error("error fetching")
        return await response.json()
    } catch (error) {
        console.error(error)
    }
}

export async function getPostsByUser(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        if( !response.ok) throw new Error("error fetching")
        return await response.json()
    } catch (error) {
        console.error(error)
    }
}


export async function getPostsById(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if( !response.ok) throw new Error("error fetching")
        return await response.json()
    } catch (error) {
        console.error(error)
    }
}


export async function getCommentsByPostId(postid) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postid}`);
        if( !response.ok) throw new Error("error fetching")
        return await response.json()
    } catch (error) {
        console.error(error)
    }
}