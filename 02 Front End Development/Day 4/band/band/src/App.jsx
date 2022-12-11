// import './App.css';
import './style.css';
import Navbar from './navbar';
import Bandimage from './bandimage';
import Content from './content';
import Img from "./ny.jpg"
import Bandmember from './members';
import Memberimg from "./bandmember.jpg"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Bandimage img={Img} title="New York" caption="The atmosphere in New York is lorem ipsum."/>
      <Content/>
      <div id="band-members">
        <div></div>
        <div></div>
        <Bandmember img={Memberimg} name="Name"/>
        <Bandmember img={Memberimg} name="Name"/>
        <Bandmember img={Memberimg} name="Name"/>
        <div></div>
      </div>
      
    </div>
  );
}

export default App;
