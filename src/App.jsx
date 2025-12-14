import './App.css';
import './output.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portofolio from './components/Portofolio/Portofolio';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
const routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home/> },
      { path: '/About', element: <About/> },
      { path: '/Portofolio', element: <Portofolio/> },
      { path: '/Contact', element: <Contact/> },
      { path: '/*', element: <NotFound/> },
    ]
  }
]);

function App() {
  
  return <RouterProvider router={routers} />;
}

export default App;
