import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from 'pages/home'
import Error from 'pages/error'
import Blog from 'pages/blog'

const App: FC = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
