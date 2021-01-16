import React from 'react';
import '../styles/About.css'

class About extends React.Component {
    render(){
        return(
            <div  className="about_wrapper">
                <h1>About</h1>
                <div className="about_container">
                <table>
                <tr class="tr">
                    <td>Name</td>
                    <th>竹本春太</th>
                </tr>
                <tr class="tr">
                    <td>University</td>
                    <th>鹿児島大学 工学部</th>
                </tr>
                <tr class="tr">
                    <td>GitHub</td>
                    <th><a href="https://github.com/shuntatakemoto">haruta_8_</a></th>
                </tr>
                <tr class="tr">
                    <td>Twitter</td>
                    <th><a href="https://twitter.com/haruta_8_">@haruta_8_</a></th>
                </tr>
                <tr class="tr">
                    <td>Facebook</td>
                    <th><a href="https://www.facebook.com/people/%E7%AB%B9%E6%9C%AC%E6%98%A5%E5%A4%AA/100043836362686">竹本春太</a></th>
                </tr>
                <tr class="tr">
                    <td>Zenn</td>
                    <th><a href="https://zenn.dev/shuntatakemoto">HARUTA</a></th>
                </tr>
                </table>

                </div>
            </div>


        )
    }
}
export default About;