import React from 'react'

import Styles from './input22.module.css'

const Input = React.forwardRef((props,ref) => {
  return (
    
<div className={Styles.input}>
<lable htmlFor={props.input.id}>{props.lable}</lable>
<input ref={ref} {...props.input}></input>

</div>
  )
});

export default Input