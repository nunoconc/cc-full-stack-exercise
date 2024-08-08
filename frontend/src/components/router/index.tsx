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

/**
 * Router component that handles all the paths and delivers the configured component
 *
 * @export
 * @returns {*}
 */
export default function Router() {
    // Loads securityService instance from the context
    const { securityService } = useContext(AppContext);
    // Memos error page to avoid rerenders since it's static
    const MemoError = memo(Error);

    const router = createBrowserRouter([
        // companies list route
        {
            path: '/securities',
            element: <List />,
            errorElement: <MemoError />,
            // set data loader
            loader: (args) => listLoader(args, securityService),
        },
        // company detail route
        {
            path: '/securities/:symbol',
            element: <Detail />,
            errorElement: <MemoError />,
            // set data loader
            loader: (args) => itemLoader(args, securityService),
        },
        // default route redirect to list route, also includes root '/'
        {
            path: '*',
            element: <Navigate to="/securities" replace={false} />,
            errorElement: <MemoError />,
        },
    ]);

    return <RouterProvider router={router} />;
}
