import { Link  } from 'react-router-dom';

const navDate = [
    {
        title : '首页',
        path : '/home/index' ,
        icon : "nav_icon_1"
    } ,
    {
        title : '彩票大厅',
        path : '/home/hall' ,
        icon : "nav_icon_2"
    } ,{
        title : '分享',
        path : '/home/share' ,
        icon : "nav_icon_4"
    }
    ,{
        title : '大转盘',
        path : '/home/turntable' ,
        icon : "nav_icon_5"
    },
    {
        title : '我的',
        path : '/home/user' ,
        icon : "nav_icon_3"
    }
];
class Nav extends Component {
    constructor( props ){
        super(props);

    }
    changeActive( path , itemPath ,index  ){
        if ( path == '/home' && index == 0 ){
            return 'active'
        }else{
            return  path == itemPath ? 'active' : '' ;
        }
    }
    render( ) {

        const path = this.props.pathname;
        return (
            <div className="dish">
                {   navDate.map( ( item , index ) =>{
                    let active =  this.changeActive( path , item.path , index  );
                    return (
                        <Link key={ index + item.path   }  className={ active } to={ item.path } >
                            <span className={ active ? `nav_icon ${item.icon} active` :   `nav_icon ${item.icon}`  }></span>
                            <span>{ item.title }</span>
                        </Link> )

                 } )
                }
            </div>
        )
    }
}


export default Nav;

