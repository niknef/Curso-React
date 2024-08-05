export function TwitterFollowCard({children, userName, isFollowing}) {
    const formatUserName = (userName) => `@${userName}`
    
    return (
      <>
        <article className='tw-follow-card'>
          <header className='tw-followCard-header'>
            <img src={`https://unavatar.io/${userName}`} className='tw-followCard-avatar'/>
            <div className='tw-followCard-info'>
              <strong className='tw-followCard-name'>{children}</strong>
              <span className='tw-followCard-id'>{formatUserName(userName)}</span>
            </div>
          </header>

          <aside>
            <button className='tw-followCard-button'>
              {isFollowing ? 'Siguiendo' : 'Seguir'}
            </button>
          </aside>
        </article>
      </>
    )
} 
