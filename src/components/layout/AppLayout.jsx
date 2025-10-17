import React from 'react'
import { Outlet } from 'react-router'

export const AppLayout = () => {
  return (
    <div>
        <div>My App</div>
        <Outlet />
    </div>
  )
}
