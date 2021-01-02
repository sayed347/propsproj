
import './App.css';
import Profile from './profile/Profile'


function App() {
  var propsData={
    fullName:'sayed drissi',
    bio:'im future fullstack developper',
    profession:'web developper'
  }
  
  const handleName = (name) => {alert(name);}
  return (
    <div style={{color:"red", textAlign:"center"}}>
   <Profile data={propsData}  handleName={() => handleName(propsData.fullName)} > <img src="/myPhoto.JPG" alt="myimage"/> </Profile> 
  </div>
  );
  
}

export default App;
