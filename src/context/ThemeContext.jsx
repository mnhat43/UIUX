// import API from "api/axiosClient";
import WithAxios from 'helpers/WithAxios'
import { createContext, useEffect, useState } from 'react'
import user from 'api/user'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {

  const [dark, setDark] = useState('off');
  const handleDark = (value) => {
    setDark(value);
  };
  return (
    <ThemeContext.Provider
      value={{
        dark,
        setDark,
        handleDark
      }}
    >
      <WithAxios>{children}</WithAxios>
    </ThemeContext.Provider >
  )
}

export default ThemeContext
