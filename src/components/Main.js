import React from 'react'

export default function Main(props){

  const [thing, setThings] = React.useState(['Added Item to cart->'])

  // const value = thing.map(function(item){
  //   return console.log(item)
  // })

  function addItem(){
    setThings(function(item){
      return(
        [...item, `Item ${thing.length}`]
        )
        
    })
  }

  console.log(thing)


  return (

    <div className='div-main' data-aos="fade-up">
        <div className='div-img'>
            <img src={props.image} alt='shoe'/>
        </div>

        <div className='div-secondary'>
                <h1>{props.name}</h1>
                <h4>{props.founded}</h4>
                <p>{props.description}</p>
                <button onClick={addItem} className='button1'>Add to cart</button>
        </div>
    </div>
  )
}

