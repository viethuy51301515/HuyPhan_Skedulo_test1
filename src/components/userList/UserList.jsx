import React,{memo} from 'react';

import './UserList.css'

const UserList = memo(({users,error})=>{
    return error || <div className='users-wrapper'>
            { users.length > 0 ? users.map( user => <div className='card' key={user.id}>
                <div className='card__image-section'>
                    <img src={user.avatar_url} alt='avatar'/>
                </div>
                <div className='card__info-section'>
                    <h1 className='card__info-name'>{user.login}</h1>
                    <div>
                    <h3 className='card__info-type'>Type : <span>{user.type}</span></h3>
                    <h3 className='card__info-score'>Score : <span>{user.score}</span></h3>
                    </div>
                </div>
            </div>) : <div> No data is showing</div>
            }
        </div>
    
})

export default UserList;