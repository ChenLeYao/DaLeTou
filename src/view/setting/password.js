class Password extends Component{
    render(){
        return(
            <div>
                <div className="dish_body">
                    <div className="dish_header red">
                        <a className="back" onClick={ this.props.history.goBack }></a>
                        修改密码
                    </div>
                    <div className="changePws">
                        <div><span>原密码</span><input type="text" placeholder="请输入原密码"/></div>
                        <div><span>新密码</span><input type="password" placeholder="请输入新密码"/></div>
                        <div><span>确认密码</span><input type="password" placeholder="确认新密码"/></div>
                    </div>
                </div>
                <div className="re-con">确认修改</div>
            </div>
        )
    }
}
export default Password;
