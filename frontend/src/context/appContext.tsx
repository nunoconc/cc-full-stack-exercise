import React, { createContext, useState } from 'react';
import SecurityService from '../services/securityService';
import { JSX } from 'react';

interface IAppContext {
    securityService: SecurityService;
}

/**
 * Used to store single instance of security service
 * Could also store more necessary configurations, services, etc..
 */
const AppContext = createContext<IAppContext>({
    securityService: new SecurityService(),
});

/**
 * Context component to wrapp around main application and save context around the app
 *
 * @param {{ children: JSX.Element }} param0
 * @param {JSX.Element} param0.children
 * @returns {*}
 */
export const AppContextProvider = ({ children }: { children: JSX.Element }) => {
    const [securityService] = useState(new SecurityService());

    return (
        <AppContext.Provider
            value={{
                securityService,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
