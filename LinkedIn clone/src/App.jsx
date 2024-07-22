import { useSelector } from 'react-redux'
import './App.css'
import Feed from './Feed'
import Header from './Header'
import Post from './Post'
import Sidebar from './Sidebar'
import { selectUser } from './userSlice'
import Login from './Login'


function App() {
  const user = useSelector(selectUser)
  return (
    <>
      <div className='app'>
        <Header />

        {!user ? (<Login/>) : (
          <div className="app_body">
            <Sidebar />
            <Feed />
            {/* <Post/> */}
          </div>
        )}
      </div>
    </>
  )
}


export default App
