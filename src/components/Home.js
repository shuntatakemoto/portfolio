import React from 'react'


class Home extends React.Component {
    state = { isVisible: false };

    componentDidMount() {
      setTimeout(() => {
        this.setState({ isVisible: !this.state.isVisible });
      }, 1000);
    }
    render(){
      return(
        <div  className="wrapper">
          <div className="home__main">
            <div className="home__name">
              <div className="home__description">
                <h1>SHUNTA TAKEMOTO</h1>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }


  export default Home;