import React from 'react';
import '../styles/Card.css'
class Card extends React.Component{
    render(){
       return(
        <div className='card'>
          <a href={this.props.link} className="card__link">
            <div class="card_image">
              <img
                className="card__img"
                src={this.props.image}
                alt={this.props.name}
              />
            </div>
            <div className="card__content">
              <div className="card__name">
                {this.props.name}
              </div>
              {/* <div className="card__lead">
              {this.props.lead}
              </div> */}
            </div>
          </a>
        </div>

        )
    }
  }

export default Card;