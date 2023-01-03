import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Column } from 'components/common/layout'
import { AiOutlineArrowUp, AiFillEdit } from 'react-icons/ai'
import { theme } from 'styles/theme'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from 'environments/constant'

export const Float: React.FC = () => {
  const [scrollY, setScrollY] = useState(0)
  const nav = useNavigate()
  useEffect(() => {
    setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => setScrollY(window.scrollY)

  return (
    <>
      <Sub
        style={{ display: scrollY < 700 ? 'none' : '' }}
        onClick={() =>
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          })
        }
      >
        <AiOutlineArrowUp size='24' style={{ color: theme.color.primary }} />
      </Sub>
      {/* <Main onClick={() => nav(`${BASE_URL}/blog/upload`)}>
        <AiFillEdit size='24' style={{ color: theme.color.white }} />
      </Main> */}
    </>
  )
}

const Main = styled(Column)`
  width: 55px;
  height: 55px;
  border-radius: 100%;
  background-color: ${(p) => p.theme.color.primary};
  z-index: 100;
  position: fixed;
  right: 40px;
  bottom: 40px;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  box-shadow: 0px 2px 8px 0px #14141485;
  cursor: pointer;
  :hover {
    background-color: ${(p) => p.theme.color.primary}cc;
  }
  :active {
    background-color: ${(p) => p.theme.color.primary}ee;
  }
`

const Sub = styled(Main)`
  background-color: ${(p) => p.theme.color.white};
  bottom: 110px;
  @keyframes comeUpFloat {
    0% {
      bottom: 40px;
    }
    100% {
      bottom: 110px;
    }
  }
  animation: comeUpFloat 0.8s;
  :hover {
    background-color: ${(p) => p.theme.color.white}88;
  }
  :active {
    background-color: ${(p) => p.theme.color.white}00;
  }
`
