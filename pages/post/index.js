import {useEffect,useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'
const APP_ID = '60167ebb95ee67389da14ccc';
const Posts = () => {
    const [posts,setPosts] = useState([])
    const fetchPosts = async () => {
        const response = await axios.get(`${baseURL}/post`, { headers: { 'app-id': APP_ID } })
        console.log(response.data.data)
        setPosts(response.data.data)

    }

    useEffect(fetchPosts,[])
    return (
        <>
            <Link href = "/"><button>Homepage</button></Link>
            <h1>All Posts</h1>
            {
                posts.map(post => {
                    return (
                        <>
                            <p>post: {post.text}</p>
                            <img src={post.image} />
                            <p>Likes: {post.likes}</p>
                            <Link href={`/post/${post.id}`}>
                                <button>see more</button>
                            </Link>
                        </>)
                })
            }
        </>
    )
}

export default  Posts
