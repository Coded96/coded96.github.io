import React, { useReducer } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MenuMain from './Components/Menu/menuMain.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContext from './Store/Context.ts';
import JuegoReducer, { initialState } from './Store/Juego/Reducer.ts';
import JuegoMain from './Components/MainGame/juegoMain.tsx';


const router = createBrowserRouter([
  {
    children: [
      {
        path: "/Juego",
        element: <JuegoMain />,
      },
      {
        path: "/",
        element: <MenuMain />,
      },
    ]
  }
]);


// eslint-disable-next-line react-refresh/only-export-components
const MainCompo = () => {
  const [state, dispatch] = useReducer(JuegoReducer, initialState);

  const providerState = {
    state,
    dispatch,
  };

  return (
    <div className='dark'>
      <div className='bg-neutral-900 text-white'>
        <MainContext.Provider value={providerState}>
          <RouterProvider router={router} />
        </MainContext.Provider>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainCompo />
  </React.StrictMode>,
)


// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
