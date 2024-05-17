import React, { useEffect } from 'react'
import AllRoutes from 'views/routes'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'context/ThemeContext'
import { ToastContainer } from 'react-toastify'
import { GlobalHistory } from 'components/globalhistory'
import 'react-toastify/dist/ReactToastify.css'
const App = () => {

  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <GlobalHistory />
          <AllRoutes />
        </BrowserRouter>
      </ThemeProvider>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
