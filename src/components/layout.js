import React from 'react'
import {Global, css} from '@emotion/core'

const layout = ({ children}) => (
  <>
  <Global styles={css`
    *{
    box-sizing:border-box;
    margin:0;
    
    }
    *+* {
    margin-top:1rem;
    }
    
    html,
    body {
    margin:0;
    
    
    
  `}
/>

  </>
)