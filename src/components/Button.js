import React from "react";

import "components/Button.scss";

import classNames from "classnames";

export default function Button(props) {

 let buttonClass = classNames("button", {"button--confirm":props.confirm, "button--danger":props.danger})
 //如果confirm为false（不存在），那一条的classname就是“button”
 //如果存在，就是“button 和 button--confirm都适用那一条
 


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