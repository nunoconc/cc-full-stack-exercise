import React, { memo, useContext, useMemo } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from 'react-router-dom';
import Detail from '../detail';
import List from '../list';
import Error from '../error';
import { listLoader, itemLoader } from './loaders';
import AppContext from '../../context/appContext';

export default function Router() {
    const { securityService } = useContext(AppContext);
    const MemoError = memo(Error);

    const router = createBrowserRouter([
        {
            path: '/securities',
            element: <List />,
            errorElement: <MemoError />,
            loader: (args) => listLoader(args, securityService),
        },
        {
            path: '/securities/:symbol',
            element: <Detail />,
            errorElement: <MemoError />,
            loader: (args) => itemLoader(args, securityService),
        },
        {
            path: '*',
            element: <Navigate to="/securities" replace={false} />,
            errorElement: <MemoError />,
        },
    ]);

    return <RouterProvider router={router} />;
}
