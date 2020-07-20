class MessageDetail extends Component{
    render(){
        return(
            <div className="dish_body" style={{ background : '#ffffff'}}>
                <div className="dish_header red">
                    <a className="back" onClick={ this.props.history.goBack }></a>
                    消息详情
                </div>

                <div className="mes-header">
                    <h3>尊敬的玩家恭喜您注册成功</h3>
                    <p><span>2019-10-10</span><span>来源:系统消息</span></p>
                </div>

                <div className="mes-con">
                    <p>尊敬的玩家，恭喜您注册成功，您的账号初始登陆密码为:123456 ,初始资金密码为:123456,请尽快修改登陆密码和资金密码，使用此账号登陆APP,祝您游戏愉快!</p>
                </div>
            </div>
        )
    }
}
export default MessageDetail;
