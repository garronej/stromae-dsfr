import reactLogo from 'assets/react.svg'
import viteLogo from 'assets/vite.svg'
import './App.css'
import { Outlet } from 'react-router'
import { AuthStatus } from '../AuthStatus'

export function Layout() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <AuthStatus />
      </div>
      <p className="read-the-docs">
        <Outlet />
      </p>
    </>
  )
}

