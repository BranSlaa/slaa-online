import React from 'react'
import styled from 'styled-components'

const Hero = ({ children, image, ...rest }) => {
  const div = styled.div`
    padding: '20rem 10%';

    &:before {
        content: '';
        position: fixed;
        left: 0;
        right: 0;
        z-index: -1;
        display: block;
        /* background-image: url(${props => props.image}); */
        background-color: red;
        padding: '20rem 10%';
        background-repeat: 'no-repeat';
        background-size: 'cover';
        background-position: 'bottom';

        filter: blur(5px);
    }
    `
  return <div {...rest}>{children}</div>
}

export default Hero
