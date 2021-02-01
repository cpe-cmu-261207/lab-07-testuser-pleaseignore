import Link from 'next/link'
const Gallery = () => {
  return (
    <>
        <table>
        <tr align="center">
                <td><Link href="/">HOME</Link></td>
                <td><Link href="/gallery">GALLERY(MEMES)</Link></td>
                <td><Link href="/contact">CONTACT</Link></td>
                <td><Link href="/gpa">GPA CALCULATOR</Link></td>
            </tr>
        </table>
        <table align="center">
            <tr >
                <td><h1>WARADORN SIRIPUNT</h1>
                    <h2>Front End Developer Trainee</h2>
                    <h2>waradorn_sir@cmu.ac.th</h2></td>
                <td><img src="photo/download.jpg" alt="CPE!"/></td>
            </tr>
        </table>
        
        <h1>Gallery</h1>
        <table align="center" border="1px">
            <tr align="center">
                <td><img src="photo/1.jpg" alt="pic1" />
                    <p>#include Comment</p>
                </td>
                <td><img src="photo/2.jpg" alt="pic2" />
                    <p>EZ!</p>
                </td>
                <td><img src="photo/3.png" alt="pic3" />
                    <p>So Sad</p>
                </td>
                <td><img src="photo/4.jpg" alt="pic4" />
                    <p>Nom Nom</p>
                </td>
            </tr>
            <tr align="center">
                <td><img src="photo/5.jpg" alt="pic5" />
                <p>Wait What?</p>
            </td>
                <td><img src="photo/6.jpg" alt="pic6" />
                <p>Liar!</p>
            </td>
                <td><img src="photo/7.jpg" alt="pic7" />
                <p>LOL</p>
            </td>
                <td><img src="photo/8.jpg" alt="pic8" />
                <p>okeyyy</p>
            </td>
            </tr>
        </table>
    </>  
  )
}

export default Gallery