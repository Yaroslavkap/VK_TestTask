import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { allRoutes } from './routes'

function AppRouter() {
  return (
    <Routes>
        {allRoutes.map(route => 
            <Route 
            element={route.element}
            path={route.path}
            exact={route.exact}
            key={route.path}
            />
        )}
        <Route path="*" element={<Navigate to ="/task1" />}/>
    </Routes>
    
  )
}

export default AppRouter