import Home from "../pages/home";
import About from "../pages/about";
import Services from "../pages/services";
import Case from "../pages/case-studies";
import Contact from "../pages/contact";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/case-studies", element: <Case /> },
  { path: "/contact", element: <Contact /> },
];

export default routes;
