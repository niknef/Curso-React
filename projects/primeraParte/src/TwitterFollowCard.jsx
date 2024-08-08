import { useState } from 'react'; // este es un hook de React

export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
    const [isFollowing, setFollowing] = useState(initialIsFollowing);
    
    const formatUserName = (userName) => `@${userName}`;
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

    const handleClick = () => {
        setFollowing(!isFollowing);
    };

    return (
        <>
            <article className='tw-follow-card'>
                <header className='tw-followCard-header'>
                    <img src={`https://unavatar.io/${userName}`} className='tw-followCard-avatar' alt={`${userName}'s avatar`} />
                    <div className='tw-followCard-info'>
                        <strong className='tw-followCard-name'>{children}</strong>
                        <span className='tw-followCard-id'>{formatUserName(userName)}</span>
                    </div>
                </header>

                <aside>
                    <button className={buttonClassName} onClick={handleClick}>
                        <span className="tw-followCard-followdisplay">{text}</span>
                        <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                    </button>
                </aside>
            </article>
        </>
    );
}
