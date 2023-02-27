import React from "react";

import "components/Button.scss";

export default function Button(props) {
   let buttonClass = "button";

  if (props.confirm) { //就是stories中的confirm
    buttonClass += " button--confirm";
  }

  if (props.danger) {
   buttonClass += " button--danger";
 }
 


  return (

   <button 
   className={buttonClass}
   onClick={props.onClick}
   disabled={props.disabled}
   >
   {props.children}
   </button>
   );
} //从stories的index。js文件传送子元素和信息过来「confirm, danger,onclick,disabled」
//stories的每一个add。都是单独的个体
//buttons已经在那边创建好了，只是利用这个component的button.scss来渲染
//还可以利用这里来写一些function