import React, { Component } from 'react';
import './waterfall.css';
// import { Route, Link } from 'react-router-dom';
// import Cardview from './Cardview';
import Fade from 'react-reveal/Fade';

export class Photolist extends Component {
  
  state = {
    modal: false,
    modalPic: null,
  }
  
     modalOn = (pic) => {
      this.setState({ modal : !this.state.modal, modalPic: pic }); 
      console.log('this was clicked')
      console.log(this.state.modal)
      console.log(this.props.pics)
    };
  

  render(props) {

    return (
      
      !this.state.modal ? (
      <div
        style={cardContainer} 
      >
        {this.props.pics.map(pic => (
          <Fade bottom cascade>
              <div className="cards" onClick={ () => this.modalOn(pic)} style={cardstyle} key={pic.id} >
                <div style={{ height: '100px' }}>
                  <h4
                    style={cardTitle}
                  >
                    {pic.title}
                  </h4>
              </div>
                <img
                  src={pic.secure_url}
                  alt="pic"
                  style={{
                    height: '200px',
                    minWidth: '200px',
                    maxWidth: '250px',
                    position: 'relative',
                    bottom: '10px'
                  }}
                />
              <p
                style={{
                  color: '#364f6b',
                  TextShadow: '-2px 3px 3px rgba(150, 150, 150, 1)',
                  fontSize: '2.2rem',
                  fontWeight: 'bold'
                }}
              >
               <h3> Tags: {pic.tags}</h3>
              </p>
              {/* <Link to={`/photolist/${props.match.params.id}`}/>
                <Route path={`/photolist/${props.match.params.id}`}  render={ props =>  <Cardview {...this.props} /> */}
              </div>
            
          </Fade>
        ))}
        
      </div>) : (
        <div
        style={cardContainer} 
      >
        {this.props.pics.map(pic => (
          <Fade bottom cascade>
              <div className="cards" style={cardstyle} key={pic.id} >
                <div style={{ height: '100px' }}>
                  <h4
                    style={cardTitle}
                  >
                    {pic.title}
                  </h4>
              </div>
                <img
                  src={pic.secure_url}
                  alt="pic"
                  style={{
                    height: '200px',
                    minWidth: '200px',
                    maxWidth: '250px',
                    position: 'relative',
                    bottom: '10px'
                  }}
                />
              <p
                style={{
                  color: '#364f6b',
                  TextShadow: '-2px 3px 3px rgba(150, 150, 150, 1)',
                  fontSize: '2.2rem',
                  fontWeight: 'bold'
                }}
              >
               <h3> Tags: {pic.tags}</h3>
              </p>
              {/* <Link to={`/photolist/${props.match.params.id}`}/>
                <Route path={`/photolist/${props.match.params.id}`}  render={ props =>  <Cardview {...this.props} /> */}
              
              </div>
          </Fade>
        ))}
        <div style={cardContainerModal}>  
          <Fade bottom cascade>
             <div style={cardstyleModal}>
              <div className="cards" onClick={this.modalOn} style={modalstyle}>
                <div style={{ height: '100px' }}>
                  <h4
                    style={cardTitle}
                  >
                    {this.state.modalPic.title}
                  </h4>
              </div>
                <img
                  src={this.state.modalPic.secure_url}
                  alt="pic"
                  style={{
                    height: '200px',
                    minWidth: '200px',
                    maxWidth: '250px',
                    position: 'relative',
                    bottom: '10px'
                  }}
                />
              <p
                style={{
                  color: '#364f6b',
                  TextShadow: '-2px 3px 3px rgba(150, 150, 150, 1)',
                  fontSize: '2.2rem',
                  fontWeight: 'bold'
                }}
              >
               <h3> Tags: {this.state.modalPic.tags}</h3>
              </p>
              {/* <Link to={`/photolist/${props.match.params.id}`}/>
                <Route path={`/photolist/${props.match.params.id}`}  render={ props =>  <Cardview {...this.props} /> */}
              
              </div>
            </div>
          </Fade>

        
        
        </div>
      </div>
      )
    );
  }
}
export default Photolist;
 
  const cardContainerModal ={
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 'auto',
    background: 'blue',
    width: '96%',
    borderRadius: '10px',
    paddingTop: '15px'
}

  let cardstyle = {
      fontSize: '1rem',
      background: '#f0f0f0',
      padding: '10px',
      width: '300px',
      height: '350px',
      margin: '18px',
      borderRadius: '8px',
      boxShadow: '2px 2px 4px 2px rgba(67,221,230,1)',
      cursor: 'pointer'
      // marginTop: index %2 === 0 ? '-140px': '0px',
    };

    let cardstyleModal = {
      //display: 'none',
      position: 'fixed',
      zIndex: '1',
      left: '0',
      top: '0',
      width: '100%',
      height: '100%',
      overflow: 'auto',
      //backgroundColor: 'rgb(0,0,0)', //black background
      backgroundColor: 'rgba(0,0,0,0.4)', //lower opacity background
    };
 
 const modalstyle = {
       backgroundColor: '#fefefe',
        margin: "15% auto",
        padding: "20px",
        border: "1px solid #888",
        width: '80%',
        height: '80%'
    };

const cardTitle={
  color: '#fc5185',
  fontSize: '2rem',
  marginBottom: '20px'
}
const cardContainer ={
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  margin: 'auto',
  background: '#364f6b',
  width: '96%',
  borderRadius: '10px',
  paddingTop: '15px'
}

