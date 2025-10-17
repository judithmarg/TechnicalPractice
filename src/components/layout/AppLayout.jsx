import React from 'react'
import { Outlet } from 'react-router'
import './styles.css'

export const AppLayout = () => {
  return (
    <div className='layout'>
        <div className='header'>My App</div>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100%"}}>
          <Outlet />
        </div>
        
    </div>
  )
}
