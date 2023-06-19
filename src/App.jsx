import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './layout/main';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
function App() {
  // Router Path Setup
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '*',
          element: <Error></Error>
        }
      ]
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
