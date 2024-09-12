import { useGlobalState } from "../Components/utils/global.context";
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useGlobalState()
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {state.users.map((user)=>(
          <Card key={user.id} user={user}/>
        ))}
      </div>
    </main>
  )
}

export default Home