import React from 'react'
import styles from '../Card/Card.module.css'
const Card = (props) => {
    console.log(props.user);
  return (
    
      <div className={styles.card}>
        <h1>{props.user},{props.age}</h1>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum illum reprehenderit natus ratione impedit delectus nemo fuga ut, soluta accusantium!</h4>
      </div>
   
  )
}

export default Card
