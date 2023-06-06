import { NavLink, Outlet } from "react-router-dom";

function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Help</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
        veniam possimus odit ab sunt quae suscipit obcaecati harum quis iure
        quas ipsam illo cum unde perferendis blanditiis voluptate, saepe fugit!
      </p>

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">contact us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default HelpLayout;
