import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from 'pages/home'
import Error from 'pages/error'
import Blog from 'pages/blog'
import BlogDetail from 'pages/blog-detail'

const App: FC = () => {
  return (
    <BrowserRouter basename='nostalgic'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/blog/:title' element={<BlogDetail />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
