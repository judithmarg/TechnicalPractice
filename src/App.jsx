import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { useRoutes } from 'react-router'
import { routes } from './routes/routes'

function App() {
  const rutas = useRoutes(routes);

  return rutas;
}

export default App
