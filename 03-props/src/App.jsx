import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div>
      <Card name='Manisha' age={30} img='https://images.unsplash.com/photo-1770983438085-f840f1a72504?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card name='Girish' age={32} img='https://plus.unsplash.com/premium_photo-1772490551058-c5de16b885b0?q=80&w=326&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  ) 
}

export default App
