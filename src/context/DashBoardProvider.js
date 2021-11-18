import React, { createContext } from 'react';
import useDashFunctions from '../hooks/useDashFunctions';

export const DashBoardContext = createContext();
const AuthProvider = ({ children }) => {
    const allContext = useDashFunctions();
    return (
        <div>
            <DashBoardContext.Provider value={allContext}>
                {children}
            </DashBoardContext.Provider>
        </div>
    );
};

export default AuthProvider;