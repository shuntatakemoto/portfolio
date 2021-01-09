import React from 'react';
import Card from "./Card";
import './Skills.css'

class Skills extends React.Component {
    render() {
        const skillsList = [
            {
                name: 'Javascript',
                image: 'javascript.svg'
            },
            {
                name:'Typescript',
                image:'typescript.svg',
            },
            {
                name:'React',
                image:'react.svg',
            },
            {
                name:'Python',
                image:'python.svg',
            },
            {
                name:'C',
                image:'c.svg',
            },
            {
                name:'HTML',
                image:'html-5.svg',
            },
            {
                name:'CSS',
                image:'css-3.svg',
            },
            {
                name:'Firebase',
                image:'firebase.svg',
            },
            {
                name:'Github',
                image:'github.svg',
            },
            {
                name:'Visual Studio Code',
                image:'visual-studio-code.svg',
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