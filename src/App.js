import React, { Component } from 'react';
import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';
import image4 from './images/4.png';
import image5 from './images/5.png';
import image6 from './images/6.png';
import image7 from './images/7.png';
import image8 from './images/8.png';
import image9 from './images/9.png';
import image10 from './images/10.png';
import image11 from './images/11.png';
import image12 from './images/12.png';
import './App.css';

var images = [
  {
    id:1,
    path:image1,
    beenClicked: false,
  },
  {
    id:2,
    path:image2,
    beenClicked: false,
  },
  {
    id:3,
    path:image3,
    beenClicked: false,
  },
  {
    id:4,
    path:image4,
    beenClicked: false,
  },
  {
    id:5,
    path:image5,
    beenClicked: false,
  },
  {
    id:6,
    path:image6,
    beenClicked: false,
  },
  {
    id:7,
    path:image7,
    beenClicked: false,
  },
  {
    id:8,
    path:image8,
    beenClicked: false,
  },
  {
    id:9,
    path:image9,
    beenClicked: false,
  },
  {
    id:10,
    path:image10,
    beenClicked: false,
  },
  {
    id:11,
    path:image11,
    beenClicked: false,
  },
  {
    id:12,
    path:image12,
    beenClicked: false,
  },
]

class App extends Component {

  state = {
    score: 0,
    highScore: 0,
    images: images
  }

  
  shuffleArray = array => {
    for (
      let i = array.length - 1;
       i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i]= array[j];
        array[j]= temp;
        i--;
      
    }
    return array;
}
  
handleimageclick=(id) =>{
  console.log(id)
  

  for (let i = 0; i < images.length; i++) {


    if(images[i].id === id){
      if(images[i].beenClicked=== true){
        alert("Game is Over!")
        if(this.state.score > this.state.highScore){
          this.setState({
            highScore: this.state.score
          })
        }
        this.setState({
          score: 0
        })
        for (let i = 0; i < images.length; i++) {
         images[i].beenClicked= false
          
        }

      
      }else{
        this.setState({
          score: this.state.score + 1
        })
         
        images[i].beenClicked = true;
         
      }
    }
  

   

    
  }
    
  // figure out how to change beenclicked to TRUE
  // tip: change the original images array and that will automaticall update state
  // use id to determine which one to change
   images= this.shuffleArray([...this.state.images]);
  this.setState({images:images})
}

  render() {
    var displayImages= this.state.images.map(eachItem =>
      <div onClick={()=> this.handleimageclick(eachItem.id)} key={eachItem.id} className= "Image-container"><img  key={eachItem.id} alt={eachItem.id} src={eachItem.path}></img>
    </div>
    )
    return (
      <React.Fragment>
      <div className="App">
       <div className="Header">
        <div>Christmas Clicky</div>
        <div>Click an Image to begin Game! Good Luck!!</div>
        <div>Score: {this.state.score}  High Score: {this.state.highScore}</div>
       </div>
        <div className="Images">{displayImages}</div> 
      </div>
      </React.Fragment>
      );
  }
};

export default App;
