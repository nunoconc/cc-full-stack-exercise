import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Detail from '../detail';
import List from '../list';

export default function Router() {
    const router = createBrowserRouter([
        {
            path: '/securities',
            element: <List />,
        },
        {
            path: '/securities/:id',
            element: <Detail />,
        },
        {
            path: '*',
            element: <Navigate to="/securities" replace={false} />
        }
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}
