import React from 'react';

const Card = ({name, username, email}) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow -5">
            <img src={`https://robohash.org/${username}`} width="200" height="200" alt='robot'/>
            <div>
                <h2>{name}</h2>
                <p className='b red'>Your email:</p>
                <p className='b ma0'>{email}</p>
            </div>
        </div>
    );
}

export default Card;