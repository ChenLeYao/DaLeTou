import data from './data.js';
import  { Link } from 'react-router-dom';
import background from '../../image/icon/user.png';
import nav from '../../image/icon/nav_1.png';
class User extends Component {
    render(){
        return <div className="user-body dish_body">
            <div className="user-bg">
                <div className="user-bg-l">
                    <div> <img src={ background }/></div>
                    <div>
                        <a  style={ {display:'block', color:'#FFFFFF'} }>
                            <h3>小明</h3>
                            <p>设置用户</p>
                        </a>
                    </div>
                    <span className="server">
                    <a><img src={ nav }/></a></span>
                </div>
                <ul>
                    <li>
                        <span>0</span><p>可提余额</p>
                    </li>
                    <li>
                        <span>0</span><p>余额</p>
                    </li>
                </ul>
            </div>
            <UserFun/>
        </div>
    }
}

class UserFun extends Component {
    render(){
        return <div className="user-list">
                { data.map( ( item , index ) =>
                    <ul> {
                            item.map( fn =>
                                <li key={ index + fn.name }><Link to={ fn.path}><span className={`user ${fn.icon}`}></span>{ fn.name }<span></span></Link></li> )
                         }
                    </ul>
                 )}
              </div>
    }
}

export default User
