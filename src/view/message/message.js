import { Link } from 'react-router-dom';
class Message extends Component{
    render(){
        return(
            <div className="dish_body">
                <div className="dish_header red">
                    <a className="back" onClick={ this.props.history.goBack }></a>
                    消息中心
                </div>
                <div className="mes-list">
                    <ul className="mes-list-ul">
                        <li>
                            <Link to="/messagedetail">
                                <p>系统消息<span>8月26日</span></p>
                                <div>尊敬的玩家，恭喜您注册成功<span>已读</span></div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/messagedetail">
                                <p>系统消息<span>8月26日</span></p>
                                <div>尊敬的玩家，恭喜您注册成功<span>已读</span></div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Message;
