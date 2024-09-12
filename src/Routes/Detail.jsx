import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [user, setUser] = useState({})
  const params = useParams()
  console.log(params)

  const url =  `https://jsonplaceholder.typicode.com/users/${params.id}`

  useEffect(()=> {
    axios(url).then((res)=> {
      console.log(res.data)
      setUser(res.data)
    })
    .catch((err) => console.log(err))
}, [])
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div>
      <h1>Detail Dentist</h1>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{user.name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{user.email}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{user.phone}</td>
          </tr>
          <tr>
            <th>Website</th>
            <td>{user.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail