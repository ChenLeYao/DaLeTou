import  bet1 from '../../../src/image/icon/bet-1.png';
import  bet2 from  '../../../src/image/icon/bet-2.png';
import  bet3 from  '../../../src/image/icon/bet-3.png';
import  bet4 from '../../../src/image/icon/bet-4.png';
import  bet6 from '../../../src/image/icon/bet-6.png';
import { Link } from 'react-router-dom';
const data = [
    {
        icon : bet2 ,
        name : '投注记录' ,
        path : '/history'
    },
    {
        icon : bet6 ,
        name : '今日盈亏￥0' ,
        path : '/'
    },
    {
        icon : bet1 ,
        name : '我要充值' ,
        path : '/recharge'
    },
    {
        icon : bet4 ,
        name : '开奖走势记录' ,
        path : '/trend'
    },
    {
        icon : bet3 ,
        name : '玩法规则' ,
        path : '/rule'
    }
]
class Menu extends Component {
    render(){

        const active = this.props.active && this.props.bgActive ? 'active' : '';
        return(
            <div>
                <div className="dish_header red">
                    <a className="back" onClick={ ()=>{ this.props.history.goBack()  } }></a>
                    <span className="betname">倍率房间</span>
                    <a className="serverx" >客服</a>
                    <span className="menu" onClick={()=> this.props.openActive() }></span>
                </div>
                <div className={ `pack ${active}`}>
                    <ul>
                        {
                            data.map( (  item ,index )=>
                                <li key={   item.path + index }>
                                    <div>
                                        <img src={ item.icon }/>
                                    </div>
                                    <div>
                                        <Link to={ item.path } > { item.name  }</Link>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>

            </div>
        )
    }
}

export  default Menu ;
