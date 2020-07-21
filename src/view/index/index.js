import  { Swiper , SwiperSlide  }  from 'swiper/react';

import { Link } from 'react-router-dom';
import data from './data.js';
import { countDown } from '../../js/plugin-all.js';
import { AlertMessage } from '../template/material';
import banner3 from '../../image/common/banner-3.png';
import banner4 from '../../image/common/banner-4.png';
import banner5 from '../../image/common/banner-5.png';
import heart1 from '../../image/icon/red-heart1.png';
import heart from '../../image/icon/red-heart.png';

class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            openFun : false
        };
        this.openFun = this.openFun.bind(this);
    }
     openFun(){
        this.setState({
            openFun : true
        })
    }

    render(){
        return (
            <div>
                <AlertMessage active={ this.state.openFun } />

                <SwiperTab/>
                <Server openFun={ this.openFun }/>
                <LotteryClass/>
            </div>
        )
    }
}

function SwiperTab() {
   return (
       <div>
           <div className="dish_header">迪士尼彩乐园</div>
           <Notice/>
           <Swiper
                   onSlideChange={() => {} }
                   onSwiper={(swiper) => {}}
                   direction="horizontal"
                   autoplay="3000">
               <SwiperSlide >
                   <img src={ banner5 }/>
               </SwiperSlide>
               <SwiperSlide>
                  <img src={ banner3 }/>
               </SwiperSlide>
               <SwiperSlide>
                   <img src={ banner4 }/>
               </SwiperSlide>
               <div className="swiper-pagination"></div>
           </Swiper>
       </div>
   )
}

function  Server(props) {
    const serverList = [
        { name : '充值中心', url : 'nav_1' , path : '/recharge' },
        { name : '消息公告', url : 'nav_2' , path : '/message'},
        { name : '优惠活动', url : 'nav_3' , path : '/discount'},
        { name : '添加客服', url : 'nav_4' , path : '/addservice' , callBack : props.openFun  },
        { name : '联系客服', url : 'nav_5' , path : '/connectservice' , callBack :  props.openFun  }
    ]
    return (
        <ul className="dish_nav">
            {  serverList.map( ( item , index ) =>{
                if( item.callBack ){
                return  <li key={ index }>
                            <a onClick={ item.callBack } >
                            <span>
                            <i className={`dish_nav_bg ${item.url}`}></i>
                            </span>
                            <span>{ item.name }</span>
                            </a>
                       </li> }
                else{
                return   <li key={ index }>
                            <Link to={ item.path} >
                            <span>
                            <i className={`dish_nav_bg ${item.url}`}></i>
                            </span>
                            <span>{ item.name }</span>
                            </Link>
                      </li> }
            })
            }
        </ul>
    )
}

class LotteryClass extends Component {
    constructor( props ){
        super( props );
        this.state = {
            isActive : 0 ,
            tab_class :  [
                { name : '全部彩种' , type : 'all' },
                { name : '热门彩种' , type : 'hot' },
                { name : '我的关注' , type : 'follow'}
            ],
            type : 'all'
        }
        this.changeActive = this.changeActive.bind( this );
    }
    changeActive ( index ){
        this.setState({
            isActive : index ,
            type : this.state.tab_class[index].type
        })
    }
    render (){
        return (
            <div className="dish_hall">
                <ul className="dish_hall_class">
                    {  this.state.tab_class.map( (item , index)=>
                     <li  key={index} onClick={()=> this.changeActive( index )  }>

                         <span className={  this.state.isActive == index ? 'active' : '' } >{ item.name }</span>
                     </li>) }
                </ul>
                <LotteryClassList type={ this.state.type }  data={data}/>
            </div>

        )
    }
}

class Notice extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
      this.scroll();
    }
    scroll(){
        let firstChild = this.notice.querySelectorAll('li')[0];
        firstChild.style.marginLeft = 0;
        this.timer =  setInterval(()=>{
            let marginLeft = parseInt(firstChild.style.marginLeft);
            let offsetWidth = firstChild.offsetWidth;
            if ( Math.abs( marginLeft ) >=  offsetWidth ){
                this.notice.appendChild( firstChild );
                firstChild.style.marginLeft = 0;
                firstChild = this.notice.querySelectorAll('li')[0];
                firstChild.style.marginLeft = 0;
                marginLeft = parseInt(firstChild.style.marginLeft);
            }
            firstChild.style.marginLeft = ( marginLeft - 1 ) + 'px';
        },100)
    }
    componentWillUnmount(){
        clearInterval( this.timer);
    }
    render(){
        return (
            <div className="notice-bar">
                <ul ref={ ( notice)=> this.notice = notice }>
                    <li>网站维护中.....部分功能暂未开放</li>
                    <li>网站维护中.....部分功能暂未开放</li>
                </ul>
            </div>
        )
    }
}
class LotteryClassList extends Component {
    constructor( props ){
        super(props);
        let data = props.data;
        data.map( item => item.remain_time = countDown(item.start_time , item.end_time ) );
        this.state = {  data : data  }
    }
    componentDidMount() {
        this.timer = setInterval(()=>{
            let data = this.state.data;
            data.map( item => item.remain_time = countDown(item.start_time , item.end_time ) );
            this.setState({
                data : data
            })
        },1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render(){
        return (
            <div className="dish_hall_box">
                <div className="get_box">
                    {  this.state.data.map(( item , index)=>
                        {   let display = 'flex';
                            if ( this.props.type == 'hot'){
                                !item.isHot && (  display = 'none')
                            }else if (  this.props.type == 'follow' ){
                                !item.isCollection && ( display = 'none' )
                            }else{
                                display = 'flex';
                            }
                            return (<Link   to="/betting"  key={index}  className="dish_hall_item"  style={{ display : display }} key={ index }>

                                <div><img src={ item.url}/></div>
                                <div>
                                    <span className="dishheader">{ item.name }</span>
                                    <p><span>{ item.name }</span></p>
                                    <p>
                                        <span className="dash_time"> { item.remain_time }</span>
                                        <span className="dash_right">
								     <img src={ item.isCollection ? heart1 : heart }/>
						            </span>
                                    </p>
                                </div>
                            </Link>) } )
                    }
                </div>
            </div>
        )
    }
}

export default Index;
