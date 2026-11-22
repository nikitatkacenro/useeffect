import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function ClickCounter({ name }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(`считаем: ${name}`)
  }, [count])

  return (
    <button onClick={() => setCount(prev => prev + 1)}>
      {name}: {count}
    </button>
  )
}

function Ticker() {
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("тик")
      setTick(prev => prev + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return <div>Прошло секунд: {tick}</div>
}

function App() {
  const [show, setShow] = useState(true)

  return (
    <div>
      <ClickCounter name="Первая кнопка" />
      <ClickCounter name="Вторая кнопка" />

      <hr />

      <button onClick={() => setShow(prev => !prev)}>
        {show ? "Скрыть тикер" : "Показать тикер"}
      </button>

      {show && <Ticker />}
    </div>
  )
}

export default App
