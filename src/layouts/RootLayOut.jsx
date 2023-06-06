import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function RootLayOut() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default RootLayOut;
