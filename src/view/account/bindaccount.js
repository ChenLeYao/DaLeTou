class BindAccount extends Component{
    render(){
        return(
            <div className="dish_body">
            <form>
                    <div className="dish_header red">
                        <a className="back" onClick={ this.props.history.goBack}></a>
                        绑定已有账号
                    </div>
                    <div className="changePws">
                        <div><span>账号</span><input type="text" name="oldpwd" placeholder="请输入您已有的平台账号"/></div>
                        <div><span>密码</span><input type="password" name="newpwd" placeholder="请输入您的密码"/></div>
                        <div><span>验证码</span><input type="password" placeholder="请输入验证码"/></div>
                        <div className="box" >获取验证码</div>
                    </div>
                    <div className="content">
                        <p>绑定已有帐号后，已有帐号将成为您通过当前方式进入平台的默认帐号。此帐号的余额、订单等信息将无法恢复，请您谅解。</p>
                        <p>忘记或遗失了帐号密码，请右上角联系客服。</p>
                        <p>若绑定帐号前，账号有余额，建议您先进行提现。</p>
                    </div>
               
                <div className="re-con" >立即绑定</div>
            </form>
            </div>
        )
    }
}
export default BindAccount;
