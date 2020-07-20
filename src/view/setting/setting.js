import { Link } from 'react-router-dom';
class Setting extends Component{
    render(){
        return(
            <div className="dish_body">
                <div className="dish_header red">
                    <a className="back" onClick={ this.props.history.goBack }></a>
                    设置
                </div>
                <div className="user-list">
                    <ul>
                        <li><Link to="password" className="noleft">修改登录密码<span></span></Link></li>
                        <li><Link to="password"  className="noleft">修改提现密码<span></span></Link></li>
                        <li><Link to="/" className="noleft">联系客服<span></span></Link></li>
                        <li><Link to="/help" className="noleft">帮助中心<span></span></Link></li>
                        <li><Link to="/bindaccount" className="noleft">绑定已有账号<span></span></Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Setting;
