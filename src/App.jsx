import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './layout/main';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import QuizDetails from './components/QuizDetails/QuizDetails';
import BlogDetails from './components/Blog/BlogDetails';
import Signin from './components/Auth/Signin/Signin';
import Signup from './components/Auth/Signup/Signup';
function App() {
  // Router Path Setup
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>
        },
        {
          path: 'quizdetails/:id',
          loader: ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
          },
          element: <QuizDetails></QuizDetails>
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
          path: 'blogdetails/:id',
          loader: () => {
            return fetch('/api/blog.json')
          },
          element: <BlogDetails></BlogDetails>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/signin',
          element: <Signin></Signin>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },
        {
          path: '*',
          element: <Error></Error>
        }
      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
