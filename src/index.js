import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(count)
  }, [count])

  return (
    <div>
      <h1>Hello world: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <div className={styles.test}>Example Component is an exa:m {text}</div>
    </div>
  )
}
