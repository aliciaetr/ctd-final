import { useEffect, useState } from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const url = "https://jsonplaceholder.typicode.com/users"
  const [user, setUser] = useState([])
  
  useEffect(()=> {
    fetch(url)
      .then((res)=>{
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setUser(data)
      })
      .catch((err) => console.log(err))

  }, [])

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {user.map((user)=>(
          <Card key={user.id} user={user}/>
        ))}
      </div>
    </main>
  )
}

export default Home