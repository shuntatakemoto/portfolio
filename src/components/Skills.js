import React from 'react';
import Card from "./Card";
import './Skills.css'

class Skills extends React.Component {
    render() {
        const skillsList = [
            {
                name: 'Javascript',
                image: 'javascript.svg',
                lead:''
            },
            {
                name:'Typescript',
                image:'typescript.svg',
                lead:''
            },
            {
                name:'React',
                image:'react.svg',
                lead:''
            },
            {
                name:'Python',
                image:'python.svg',
                lead:''
            },
            {
                name:'C',
                image:'c.svg',
                lead:''
            },
            {
                name:'MySQL',
                image:'mysql.svg',
                lead:''
            },
            {
                name:'HTML5',
                image:'html-5.svg',
                lead:''
            },
            {
                name:'CSS3',
                image:'css-3.svg',
                lead:''
            },
            {
                name:'Firebase',
                image:'firebase.svg',
                lead:''
            },
            {
                name:'Github',
                image:'github.svg',
                lead:''
            },
            {
                name:'Visual Studio Code',
                image:'visual-studio-code.svg',
                lead:''
            },
        ];
        return (
        <div className='skills-wrapper'>
            <div className='skills'>
            <div className='title-container'>
                <h1>Skills</h1>
            </div>
            <div className='skills-container'>
            {skillsList.map((skillsItem)=>{
                return(
                <Card
                    name={skillsItem.name}
                    image={skillsItem.image}
                />
                )
            })}

            </div>
            </div>
        </div>
        );
    }
}

export default Skills;