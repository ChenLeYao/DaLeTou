import { Link  } from 'react-router-dom';
import index_font_1 from '../../image/icon/index_font_1.png';
import index_font_1_on from '../../image/icon/index_font_1_on.png';
import index_font_2 from '../../image/icon/index_font_2.png';
import index_font_2_on from '../../image/icon/index_font_2_on.png';
import index_font_4 from '../../image/icon/index_font_4.png';
import index_font_4_on from '../../image/icon/index_font_4_on.png';
import index_font_5 from '../../image/icon/index_font_5.png';
import index_font_5_on from '../../image/icon/index_font_5_on.png';
import index_font_6 from '../../image/icon/index_font_6.png';
import index_font_6_on from '../../image/icon/index_font_6_on.png';
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
];
// function Nav( props ) {
//         return (
//             <div className="dish">
//                 {   navDate.map( ( item , index ) =>
//                         <Link key={ index + item.path } className={ props.match.path == item.path ?  'active' :  '' } to={ item.path } >
//                             <img src={ props.match.path == item.path ? item.icon_on :  item.icon }/>
//                             <span>{ item.title }</span>
//                         </Link> )
//                 }
//             </div>
//      )
// }

function Nav( props ) {
    return (
        <div className="dish">
            <Link to={ navDate[0].path } className={ props.match.path == navDate[0].path ?  'active' :  '' }  >
                <img src={ props.match.path == navDate[0].path ? navDate[0].icon_on :  navDate[0].icon }/>
                <span>{ navDate[0].title }</span>
            </Link>
            <Link to={ navDate[1].path }  className={ props.match.path == navDate[1].path ?  'active' :  '' } >
                <img src={ props.match.path == navDate[1].path ? navDate[1].icon_on :  navDate[1].icon }/>
                <span>{ navDate[1].title }</span>
            </Link>
            <Link to={ navDate[2].path }  className={ props.match.path == navDate[2].path ?  'active' :  '' } >
                <img src={ props.match.path == navDate[2].path ? navDate[2].icon_on :  navDate[2].icon }/>
                <span>{ navDate[2].title }</span>
            </Link>
            <Link to={ navDate[3].path }  className={ props.match.path == navDate[3].path ?  'active' :  '' } >
                <img src={ props.match.path == navDate[3].path ? navDate[3].icon_on :  navDate[3].icon }/>
                <span>{ navDate[3].title }</span>
            </Link>
            <Link to={ navDate[4].path } className={ props.match.path == navDate[4].path ?  'active' :  '' } >
                <img src={ props.match.path == navDate[4].path ? navDate[4].icon_on :  navDate[4].icon }/>
                <span>{ navDate[4].title }</span>
            </Link>

        </div>
    )
}

export default Nav;

