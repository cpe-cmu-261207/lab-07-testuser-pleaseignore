import Link from 'next/link'
const Contact = () => {
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
                <td><img src="photo/download.jpg" alt="CPE!" /></td>
            </tr>
        </table>
        <h1>Contact</h1>
        <form action="">
            <table border="1px" >
                <tr >
                    <td><h4>Subject:</h4></td>
                    <td><input type="text" size="60px"/></td>
                </tr>
                <tr >
                    <td><h4>Massage:</h4></td>
                    <td><textarea name="message" id="massage" cols="30" rows="10"></textarea></td>
                </tr>
                <tr>
                    <td><h4>Name:</h4></td>
                    <td><input type="text" size="60px"/></td>
                </tr>
                <tr>
                    <td><h4>Gender:</h4></td>
                    <td>
                        <form>
                            <input type="radio" name="gender" />male
                            <input type="radio" name="gender" />female
                            <input type="radio" name="gender" />others
                        </form></td>
                </tr>
                <tr >
                    <td><h4>Phone:</h4></td>
                    <td><input type="text" size="60px"/></td>
                </tr>
                <tr style="background-color:#1697b7;">
                    <td><h4>Email:</h4></td>
                    <td><input type="text" size="60px"/></td>
                </tr>
                <tr style="background-color:#30c3cd;">
                    <td></td>
                    <td><button type="submit" id="submit">submit</button></td>
                </tr>
            </table>
        </form>
    </>  
  )
}

export default Contact
