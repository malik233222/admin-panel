import Single from '../../components/single/Single'
import {  singleUser } from '../../data'
import './user.scss'

const User = () => {

    //fetch data and send to Single Component

    return (
        <div className='user'>
            <Single {...singleUser} />
        </div>
    )
}

export default User