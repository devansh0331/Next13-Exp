"use client"

export default function Error({error , reset}) {
    return (
    
    <>
    <h1>The page isn't loading : {error.message}</h1>
    <button onClick={() => reset()}>Reload</button>
    
        </>
    )
  }