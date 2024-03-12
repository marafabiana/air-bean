import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import Nav from "./pages/Nav/Nav";
import Menu from "./pages/Menu/Menu";
import About from "./pages/About/About";
import Profile from "./pages/Profile/Profile";
import Status from "./pages/Status/Status";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/"element={<Landing />} />
      <Route path="nav"element={<Nav />} />
      <Route path="menu"element={<Menu />} />
      <Route path="about"element={<About />} />
      <Route path="profile"element={<Profile />} />
      <Route path="/status"element={<Status />} />
    </Route>
  )
);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App