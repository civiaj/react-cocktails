// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import { Provider } from 'react-redux';
import { store } from './store/store';
import DrinkInfo from './components/DrinkInfo';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="details/:id" element={<DrinkInfo />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </>
    )
  );

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
