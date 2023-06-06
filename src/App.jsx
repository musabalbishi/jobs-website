import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayOut from "./layouts/rootLayOut";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./pages/help/Contact";
import Careers, { careersLoader } from "./pages/careers/Careers";
import careerDetailsLoader from "./pages/careers/CareerDetails";
import CareerDetails from "./pages/careers/CareerDetails";
import NotFoundPage from "./pages/NotFoundPage";
import "./main.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayOut />}>
      <Route path="/" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      {/* help section */}
      <Route path="Help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="careers" element={<CareersLayout />}>
        <Route index element={<Careers />} loader={careersLoader} />
      </Route>

      <Route
        path="/:id"
        element={<CareerDetails />}
        loader={careerDetailsLoader}
      ></Route>
      {/* error handling */}
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
