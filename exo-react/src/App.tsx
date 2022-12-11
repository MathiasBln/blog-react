import logo from './logo.svg';
import './App.css';
import Form from './Form';
import ListPost from './ListPost';
import {useState} from "react"

function App() {
  const [posts, setPosts] = useState<Array<object>>([])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form setPosts={setPosts}/>
        <ListPost data={posts}/>
      </header>
    </div>
  );
}

export default App;
