class  Userinfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            flex: 'flex'
        }
        console.log('useinfo')
    }
    render(){
        return  <div>
            <form>
                <div className="dish_body">
                    <div className="dish_header red">
                        <a className="back" onClick={ this.props.history.goBack}></a>
                        个人信息
                    </div>
                    <div className="changePws">
                        <div>
                            <img src="/src/image/icon/user.png" className="avatar" data-path="*" />
                            <label className="pic"  htmlFor="pic">点击修改头像</label>
                            <input type="file" accept="image/*" style={{ display: "none" }}  id="pic" />
                        </div>
                        <div>
                            <span>用户名</span>
                            <span className="name username">小明</span>
                        </div>
                        <div>
                            <span>真实姓名</span>
                            <input name="truename" className="truename" type="text"  placeholder="绑定真实姓名后不可修改"/>
                        </div>
                        <div>
                            <span>手机号</span>
                            <input name="phone" className="phone" type="text" placeholder="请输入手机号（便于密码找回）"/></div>
                        <div>
                            <span>微信账号</span>
                            <input name="WechatId" className="wechatId" type="text"  placeholder="请输入微信账号（便于密码找回）"/>
                        </div>
                    </div>
                </div>
                <div className="re-con">
                    <button>确认修改</button>
                </div>
            </form>
        </div>
    }
}

export default  Userinfo;
