/* import logo from './logo.svg'; */
import './App.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import img from './resources/img/backGround.jpg';


function App() {
/*   return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
 ); */


return (
<Container>
<Row>
  <Col xs={12} md={6} xxl={6}> 
    <Image className='Img'  src={img} roundedCircle />
  </Col>
  <Col xs={12} md={6} xxl={6}> 
    <Image className='Img' src={img} roundedCircle />
  </Col>
</Row>
</Container>
);
}

export default App;
