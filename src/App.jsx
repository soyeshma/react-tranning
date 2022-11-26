import {Routes, Route,Link,Outlet} from "react-router-dom"
import Game from"./components/Game";
export default function App(){
  return(
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/game">Game</Link>
          </li>
          
        </ul>
      </nav>
      <Routes>
      <Route path="/" element={<Home />}>
       <Route path="/posts" element={<Post />} />
       <Route path="/game" element={<Game />} />
      </Route>

        <Route path="/game" element={<Game />} />
      </Routes>
    </div>

  );
}

function Home(){
  return(
    <>
    <div> Header </div>
    <div> sidebar </div>
    <Outlet />
    <div> footer </div>
    </>
    
  )
}

function Post(){
  return(
    <div>My posts</div>
  )
}