import { Link  } from 'react-router-dom';
const navDate = [
    {
        title : '首页',
        path : '/index' ,
        icon : '/src/image/icon/index_font_1.png',
        icon_on : '/src/image/icon/index_font_1_on.png'
    } ,
    {
        title : '彩票大厅',
        path : '/hall' ,
        icon : '/src/image/icon/index_font_2.png',
        icon_on : '/src/image/icon/index_font_2_on.png'
    } ,{
        title : '分享',
        path : '/share' ,
        icon : '/src/image/icon/index_font_4.png',
        icon_on : '/src/image/icon/index_font_4_on.png'
    }
    ,{
        title : '大转盘',
        path : '/turntable' ,
        icon : '/src/image/icon/index_font_5.png',
        icon_on : '/src/image/icon/index_font_5_on.png'
    },
    {
        title : '我的',
        path : '/user' ,
        icon : '/src/image/icon/index_font_6.png',
        icon_on : '/src/image/icon/index_font_6_on.png'
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

