import {useRouter} from "next/router";
import {useEffect,useState} from 'react'
import axios from 'axios'
import Link from "next/link";
const baseURL = 'https://dummyapi.io/data/api'
const APP_ID = '60167ebb95ee67389da14ccc';
const Post = () => {
    const router = useRouter()
    const {postId} = router.query
    const [post,setPost] = useState(null)
    const [comment,setComment] = useState([])
    const fetch = async () => {
        const response = await axios.get(`${baseURL}/post/${postId}`, { headers: { 'app-id': APP_ID } })
        const reply = await axios.get(`${baseURL}/post/${postId}/comment`, { headers: { 'app-id': APP_ID } })
        console.log(response.data)
        setPost(response.data)
        setComment(reply.data.data)
    }

    useEffect(fetch,[])
    return (
        <>
        {
            post !== null ?(
                <>
                <h1>{post.text}</h1>
                <p>tags: {[...post.tags].toString()}</p>
                <img src={post.image}/>
                <p>{post.owner.firstName} {post.owner.lastName}</p>
                <p>Likes: {post.likes}</p>
                <p>Comments</p>
                {
                    comment.map(item => {
                        return (
                            <p>{item.owner.firstName} {item.owner.lastName} : {item.message}</p>
                            )
                    })
                }
                </>
            ) : null}
            <Link href="/post">
                Back
            </Link>
        </>
    )
}

export  default  Post

