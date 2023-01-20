import "./App.css";
import Header from "./components/header/Header";
import Form from "./components/form_search/Form";

function App() {

  return(
    <div className="App">
      <Header/>
      <Form/>


      {/* <input type="text" value={search} onChange={ (e)=> setSearch(e.target.value) } />
      <button onClick={searchProfile}>Search Profile in GitHub</button>
        <span >Nome: {user.name}</span>
      <div >
        <img className="avatar" src={user.avatar_url} alt="" />
      </div> */}
    </div>

  )
  }

export default App;
