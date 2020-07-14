
class Account extends Component{
    render(){
        return(
            <div className="dish_body">
                <div className="dish_header red">
                    <a className="back" onClick={ ()=>{ this.props.history.goBack()  } } ></a>
                    资产明细
                </div>
                <div className="box-bg">
                    <p>我的余额(元)</p>
                    <p>￥1000.00</p>
                </div>
                <div>
                    <ul className="list">
                        <li>
                            <p>微信充值</p>
                            <p>2019-10-10 11:10:01</p>
                            <span className="number">+100.00</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Account;
