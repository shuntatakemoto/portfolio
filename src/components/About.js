import React from 'react';

class About extends React.Component {
    render(){
        return(
            <div  className="wrapper">
                <h1>HARUTA</h1>
                <div className="about__container">
                <table>
                <tr>
                    <td>Name</td>
                    <th>竹本春太</th>
                </tr>
                <tr>
                    <td>University</td>
                    <th>鹿児島大学　工学部</th>
                </tr>
                <tr>
                    <td>GitHub</td>
                    <th>haruta_8_</th>
                </tr>
                <tr>
                    <td>Twitter</td>
                    <th>@haruta_8_</th>
                </tr>
                </table>
                </div>
            </div>


        )
    }
}
export default About;