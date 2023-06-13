import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'
import { DefaultLayout } from '../components/layouts/DefaultLayout'
import ErrorPage from '../pages/Erro'

const HomePage = lazy(() => import('../pages/Home'))
const CartPage = lazy(() => import('../pages/Cart'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/carrinho',
        element: <CartPage />,
      },
    ],
  },
  {
    path: '/components',
    element: <App />,
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
