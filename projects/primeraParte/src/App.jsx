import { TwitterFollowCard } from './TwitterFollowCard'
import './App.css'

function App() {
    
  return (
    <>
      <section className='App'>
        <TwitterFollowCard isFollowing={true} userName='midudev'>
          <h1>Miguel Angel Duran</h1>
        </TwitterFollowCard>
        
        <TwitterFollowCard isFollowing={false} userName='niicofirpo'>
          <h1>Niico Firpo</h1>
        </TwitterFollowCard>
        
        <TwitterFollowCard isFollowing={true} userName='abbi_gonzalez8'>
          <h1>Abbi Gonzalez</h1>
        </TwitterFollowCard>
      </section>
    </>
  )
}

export default App
