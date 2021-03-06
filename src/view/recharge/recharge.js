import wx from '../../image/icon/wx.png';
import zfb from '../../image/icon/zfb.png';

class Recharge extends Component{
    render(){
        return(
            <div>
                <div className="dish_body">
                    <div className="dish_header red">
                        <a className="back" onClick={ ()=>{ this.props.history.goBack()  } } ></a>充值中心
                    </div>
                    <div className="re-name">
                        <p>当前账号:<span>小明</span></p>
                    </div>

                    <div className="re-box">
                        <p>充值金额</p>
                        <p>
                            <span>￥</span><input type="number" placeholder="最低充值额度50"/>
                        </p>
                        <ul>
                            <li>100</li>
                            <li>500</li>
                            <li>1000</li>
                        </ul>
                    </div>
                    <p className="re-me">充值方式</p>
                    <ul className="re-method">
                        <li className="wx"><img src={ wx }/>微信<a className="active"></a></li>
                        <li className="zfb"><img src={ zfb }/>支付宝<a></a></li>
                    </ul>
                </div>
                <div className="re-con">确认充值</div>
            </div>
        )
    }
}
export default Recharge;
