import React  from 'react'
import styled from 'styled-components'

const Link = ({href, children, className}) => <span className={className}><a rel="noopener noreferrer" href={href} target="_blank">{children}</a></span>
const StyledLink = styled(Link)`
  margin-left: 0.4rem;
   &:before {
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    content: " · ";
  }
  
  a {
    color: #E8BD36;
    font-weight: 300;
    &:hover {
      text-decoration: underline;
    }
  }
`

export default StyledLink