import React from 'react'
import styled from 'styled-components'

const Hero = ({ children, image, ...rest }) => {
  const Div = styled.div`
    position: relative;
    background: url(${image.heroImage}) center no-repeat;

    &:after {
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 0;
      background-color: rgba(0, 0, 0, 0.8);
    }

    & > * {
      position: relative;
      z-index: 1;
    }
  `
  return <Div {...rest}>{children}</Div>
}

export default Hero
