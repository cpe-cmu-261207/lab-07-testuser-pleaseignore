import {useEffect} from 'react';
import axios from 'axios'
import Link from 'next/link'
const baseURL = 'https://dummyapi.io/data/api'
const Home = () => {
  return (
    <>
      <table >
            <tr align="center">
                <td><Link href="/">HOME</Link></td>
                <td><Link href="/gallery">GALLERY(MEMES)</Link></td>
                <td><Link href="/contact">CONTACT</Link></td>
                <td><Link href="/gpa">GPA CALCULATOR</Link></td>
                <td><Link href = "/post"><button>see post</button></Link></td>
            </tr>
        </table>
        <table align="center">
            <tr >
                <td><h1>WARADORN SIRIPUNT</h1>
                    <h2>Front End Developer Trainee</h2>
                    <h2>waradorn_sir@cmu.ac.th</h2></td>
                <td><img src="photo/download.jpg" alt="CPE!" /></td>
            </tr>
        </table>
        <h1 >Home</h1>        
        <table>
            <tr>
                <td>
                    <h2 >About me</h2>
                    <p>I am sophomore student in Department of Computer Engineering at Chiang Mai university.</p>
                </td>
            </tr>
            <tr>
                <td>
                    <h2 >Skills</h2>
                    <table>
                        <tr align="center">
                            <td >PYTHON3 B+</td>
                            <td >JAVA C+</td>
                            <td >C++ C+</td>
                        </tr>
                        <tr align="center">
                            <td >ENGLISH A</td>
                            <td >JAPANESE B</td>
                            <td >KOREAN C+</td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <h2 >Hobby</h2>
                    <table >
                        <tr>
                            <td ></td>
                            <td>
                                <ul>
                                    <li>Coding</li>
                                    <li>Surfing Net</li>
                                    <li>Streaming</li>
                                    <li>Running</li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </>  
  )
}

export default Home
