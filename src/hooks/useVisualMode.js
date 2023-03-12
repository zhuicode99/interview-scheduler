import { useState } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition (newMode, replace = false) {
    if (replace) { 
      setMode(newMode);
    } else {
      setMode(newMode) 
      setHistory(prev => [...prev, newMode])
    }
  }

  function back() {
    history.pop()

    if (history.length > 0) {
      setMode(history[history.length - 1]);
    }
  }

  return { mode, transition, back };
}
/* 这是一个自定义 Hook（useVisualMode），它是用来在 React 组件中管理 UI 状态的。该 Hook 利用了 React 的 useState Hook 来保存当前模式（mode）以及一个模式历史数组（history），然后提供了两个函数：

transition(newMode, replace)：该函数用于切换模式，传入新的模式（newMode）以及一个可选的布尔值 replace。如果 replace 为 true，那么新的模式将替换掉历史记录中的当前模式；否则，新的模式将被添加到历史记录中。

back()：该函数用于返回上一个模式。它会从历史记录中删除当前模式，并将当前模式设置为上一个模式。

该 Hook 最终返回了一个包含当前模式、切换模式的函数以及返回上一个模式的函数的对象。通过使用该 Hook，我们可以更方便地管理 React 组件中的 UI 状态。 */