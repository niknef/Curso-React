import { TwitterFollowCard } from './TwitterFollowCard'
import './App.css'


const users = [
  {
    name: 'Miguel Angel Duran',
    userName: 'midudev',
    isFollowing: true,
  },
  {
    name: 'Nico Firpo',
    userName: 'niicofirpo',
    isFollowing: true
  },
  {
    name: 'Abi Gonzalez',
    userName: 'abbi_gonzalez8',
    isFollowing: true
  }
]

function App() {
    
  return (
    <>
      <section className='App'>
        {
          users.map(({ name, userName, isFollowing }) => (
            <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={isFollowing}>
              <h1>{name}</h1>
            </TwitterFollowCard>
          ))
        }
        
      </section>
    </>
  )
}

export default App
