import {createGlobalStyle} from 'styled-components'

const StyleReset = createGlobalStyle`

html,body {
    height: 100vh;
    background: #f5fbff;
    font-family: Helvetica, sans-serif;
    font-size: 16px;
    overflow:hidden;
  }
  
#root {
    height: 100vh;
}

* {
    padding : 0;
    margin: 0;
}
`

export default StyleReset