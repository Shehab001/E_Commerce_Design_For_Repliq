import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const Context = ({ children }) => {
  const [user, setUser] = useState({});
  console.log(user);

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default Context;
