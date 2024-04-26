import './topBox.scss'
import { topDealUsers } from '../../data'
const TopBox = () => {
    return (
        <div className='topBox'>
            <h1>Top Deals</h1>
            <div className="list">
                {
                    topDealUsers.map(user => (
                        <div key={user.id} className="listItem">
                            <div className="user">
                                <img src={user.img} alt="" />
                                <div className="userTexts">
                                    <span className="username">{user.username}</span>
                                    <span className="email">{user.email}</span>
                                </div>
                            </div>
                            <div className="aomunt">${user.amount}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TopBox