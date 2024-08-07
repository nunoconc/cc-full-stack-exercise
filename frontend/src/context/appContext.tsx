import React, { createContext, useState } from 'react';
import SecurityService from '../services/securityService';
import { JSX } from 'react';

interface IAppContext {
  securityService: SecurityService,
}

const AppContext = createContext<IAppContext>({
  securityService: new SecurityService(),
});

export const AppContextProvider = ({ children }: { children: JSX.Element}) => {
  const [securityService] = useState(new SecurityService());

  return (
    <AppContext.Provider value={{
      securityService,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
