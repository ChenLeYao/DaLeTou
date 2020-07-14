import { Link  } from 'react-router-dom';
import index_font_1 from '../../image/icon/index_font_1.png';
import index_font_1_on from '../../image/icon/index_font_1.png';
import index_font_2 from '../../image/icon/index_font_2.png';
import index_font_2_on from '../../image/icon/index_font_2.png';
import index_font_4 from '../../image/icon/index_font_4.png';
import index_font_4_on from '../../image/icon/index_font_4.png';
import index_font_5 from '../../image/icon/index_font_5.png';
import index_font_5_on from '../../image/icon/index_font_5.png';
import index_font_6 from '../../image/icon/index_font_6.png';
import index_font_6_on from '../../image/icon/index_font_6.png';
const navDate = [
    {
        title : '首页',
        path : '/index' ,
        icon : index_font_1 ,
        icon_on : index_font_1_on
    } ,
    {
        title : '彩票大厅',
        path : '/hall' ,
        icon : index_font_2 ,
        icon_on : index_font_2_on
    } ,{
        title : '分享',
        path : '/share' ,
        icon : index_font_4 ,
        icon_on : index_font_4_on
    }
    ,{
        title : '大转盘',
        path : '/turntable' ,
        icon : index_font_5 ,
        icon_on : index_font_5_on
    },
    {
        title : '我的',
        path : '/user' ,
        icon : index_font_6 ,
        icon_on : index_font_6_on
    }

]
class Nav extends Component {
    constructor(props){
       super( props );
       this.state = {
           isActive : 0
       }
    }
    changeActive( index ){
        this.setState({
            isActive : index
        })
    }
    render(){
        return (
            <div className="dish">
                {
                    navDate.map( ( item , index ) =>
                        <Link  onClick={ ()=> this.changeActive( index ) } className={ this.state.isActive == index ?  'active' :  '' } to={ item.path } >
                            <img src={ this.state.isActive == index ? item.icon_on :  item.icon }/>
                            <span>{ item.title }</span>
                        </Link>
                    )
                }

            </div>
        )
    }
}

export default Nav;

