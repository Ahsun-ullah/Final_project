import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Profiles from './components/Profiles/Profiles'
import CreateProfiles from './components/CreateProfiles/CreateProfiles'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions'
import Header from './components/Header/Header'
import RequireAuth from './components/RequireAuth/RequireAuth'
import Footer from './components/Footer/Footer'
import UserSide from './components/ChatsComp/UserSide'

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home></Home>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/Home"
          element={
            <RequireAuth>
              <Home></Home>
            </RequireAuth>
          }
        ></Route>
        <Route path="/Profiles" element={<Profiles></Profiles>}></Route>
        <Route
          path="/CreateProfiles"
          element={<CreateProfiles></CreateProfiles>}
        ></Route>
        <Route
          path="/UserSide"
          element={
            <RequireAuth>
              <UserSide></UserSide>
            </RequireAuth>
          }
        ></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Register" element={<Register></Register>}></Route>
        <Route
          path="/TermsAndConditions"
          element={<TermsAndConditions></TermsAndConditions>}
        ></Route>
      </Routes>

      <Footer></Footer>
    </div>
  )
}

export default App
