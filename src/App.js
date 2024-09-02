import React from 'react'
import "./App.css";

import Card from "react-bootstrap/Card";
import Name from "./components/Name";
import Description from "./components/Description";
import Price from "./components/Price";
import Image from "./components/Image";

const App = () => {
    let firstName = "khaled"
  return (
    <div className='App'>
         <Card style={{ width: '18rem' }}>
      < Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title><Name/> </Card.Title>
        <Card.Title><Description/></Card.Title>
        <Card.Title><Price/></Card.Title>
        <Image/>
       </Card.Body>  
    </Card>
    <p>
        {firstName ? `Hello, ${firstName}` : "Hello, there!"}
      </p>

      {firstName && (
        <img src="https://via.placeholder.com/100" alt="profile" />
      )}
    </div>
  )
}

export default App