import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  .cuisine-drop-down-item{
    .ant-select-dropdown-menu-item {
      display: flex;
      align-items: center;
      .cuisine-icon {
        font-size: 2rem;
      }  
      span {
        margin: 1rem;
      }
  
      img {
        width: 1rem;
      }
    }
  }
  
  .ant-input {
    padding: 1.2rem 0.8rem;
  }
`

export default GlobalStyle;