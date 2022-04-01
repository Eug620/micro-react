/*
 * @Author       : Eug
 * @Date         : 2022-03-31 16:16:43
 * @LastEditTime : 2022-04-01 16:30:08
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /github/micro-react/src/App.tsx
 */
import { useState } from 'react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>click</button>
    </div>
  )
}

export default App
