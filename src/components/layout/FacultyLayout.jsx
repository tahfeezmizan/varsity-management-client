import React from 'react'
import { Outlet } from 'react-router-dom'

export default function FacultyLayout() {
    return (
        <div>
            <h1>This faculty Navbar</h1>
            <Outlet />
        </div>
    )
}
