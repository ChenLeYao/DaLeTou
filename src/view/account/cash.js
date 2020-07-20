class Cash extends Component{
    render(){
        return(
            <div className="dish_body ">
                <form>
                <div className="dish_header red">
                    <a className="back" onClick={ this.props.history.goBack}></a>
                    我的提现
                </div>
                <div className="box-bg">
                    <div>
                        <p>可提金额</p>
                        <p className="money">0</p>
                    </div>
                </div>
                <div className="chooseB" >
                    <div><img src="/src/image/icon/bank.png"/></div>
                    <div>
                        <p>
                            添加银行卡
                        </p>
                        <p>
                            请添加银行卡收款
                        </p>
                        <span className="more_g"><img src="/src/image/icon/more_g.png"/></span>
                    </div>
                </div>
                <div className="re-box">
                    <p>提现金额</p>
                    <p>
                        <span>￥</span><input type="number" placeholder="最低提现额度50"/>
                    </p>
                    <p>
                        <span>提现密码</span><input style={{ border:'none' , marginLeft:'0.2rem',outline: 'none' }} type="text"
                                                placeholder="请输入提现密码"/>
                    </p>
                </div>
                <div className="re-con">确认提现</div>
                 <div className="cash-box">
                        <div className="dish_header">
                            <a className="back"></a>
                            选择银行卡
                        </div>

                        <div className="cash-carlist">
                            <div>
                                <h4>中国银行</h4>
                                <p>6221 8882 0060 4489 572</p>
                            </div>
                        </div>
                        <div className="cash-add">
                            <div><span></span><a>+添加银行卡</a></div>
                        </div>
                    </div>
                    </form>
            </div>
        )
    }
}
export default Cash;
