import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Detail from '../detail';
import List from '../list';
import Error from '../error';
import { listLoader, itemLoader } from './loaders';

export default function Router() {
    const router = createBrowserRouter([
        {
            path: '/securities',
            element: <List />,
            errorElement: <Error />,
            loader: listLoader
        },
        {
            path: '/securities/:id',
            element: <Detail />,
            errorElement: <Error />,
            loader: itemLoader
        },
        {
            path: '*',
            element: <Navigate to="/securities" replace={false} />,
            errorElement: <Error />
        }
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}
