import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


const app = new Clarifai.App({
  apiKey: '9b9a8e48ea864d17873c731910a63d6d'
});

const ParticlesOptions = {

  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800

      }
    }
  }

}

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: '',
      box: {},
      route: 'SignIn',
      isSignedIn: false
    }

  }

  calculateFaceLocation = (data) => {

    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
    }



  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({ box: box })
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {

    this.setState({ imageURL: this.state.input });
    console.log(this.state.imageURL);

    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        // URL
        this.state.input
      )
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      // console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      .catch(err => console.log(err));

  }

  onRouteChange = (route) => {

console.log('new route ', route);

    // if (this.state.route === 'SignIn' || this.state.route === 'Register') {
    //   this.setState({ isSignedIn: false })
    // }

    // else if (this.state.route === 'home') {
    //   this.setState({ isSignedIn: true })
    // }

    // this.setState({ route: route });
    // console.log('old route ', this.state.route);

    if (route === 'SignIn' || route === 'Register') {
      this.setState({ isSignedIn: false, route: route })
    }

    else if (route === 'home') {
      this.setState({ isSignedIn: true, route: route })
    }

    this.setState({ route: route });
    // console.log('old route ', route);


  }

  render() {

    return (
      <div className="App">
        <Particles className='particles'
          params={ParticlesOptions}
        />

        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />

        {this.state.route === 'home'

          ? <div>
            <Logo />
            { /*  <Rank /> */}
            <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />

            <FaceRecognition box={this.state.box} imageURL={this.state.imageURL} />
          </div>

          : (this.state.route === 'SignIn'
            ? <SignIn onRouteChange={this.onRouteChange} />
            : <Register onRouteChange={this.onRouteChange} />

          )




        }

      </div>
    );
  }
}
export default App;
