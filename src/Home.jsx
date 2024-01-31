import React, { useState } from 'react'

const Home = () => {
    const [name, setname] = useState("")
    const [bookName, setBookName] = useState([])


    const myform = (e)=>{
        e.preventDefault()
        setBookName((old)=>{
            const newBook = {name}

            return [...old,newBook]
        })
        setname("")
    }

    const handleInput=(e)=>{
        setname(e.target.value)
    }
  return (
    <div>
        <form onSubmit={myform}>
        <input type="text"  value={name} onChange={handleInput}/>
        <button>add</button>
        <ol>
        {bookName.map((books)=>{
            const {name}=books
            return <li>
                {name}
            </li>
        })}
        </ol>
        </form>
    </div>
  )
}

export default Home