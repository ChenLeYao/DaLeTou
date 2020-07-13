import  { Swiper , SwiperSlide  }  from 'swiper/react';
import { Link } from 'react-router-dom';
import data from './data.js';
import { countDown } from '../../js/plugin-all.js';
import banner3 from '../../image/common/banner-3.png';
import banner4 from '../../image/common/banner-4.png';
import banner5 from '../../image/common/banner-5.png';
class Index extends Component {
    render(){
        return (
            <div>
                <SwiperTab/>
                <Server/>
                <LotteryClass/>
            </div>
        )
    }
}

function SwiperTab() {
   return (
       <div>
           <div className="dish_header">迪士尼彩乐园</div>
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

function  Server() {
    const serverList = [
        { name : '充值中心', url :'/src/image/icon/nav_3.png' , path : '/recharge' },
        { name : '消息公告', url :'/src/image/icon/nav_4.png' , path : '/notice'},
        { name : '优惠活动', url :'/src/image/icon/nav_2.png' , path : '/discount'},
        { name : '添加客服', url :'/src/image/icon/nav_5.png' , path : '/addservice'},
        { name : '联系客服', url :'/src/image/icon/nav_1.png' , path : '/connectservice'}
    ]
    return (
        <ul className="dish_nav">
            {  serverList.map( ( item , index ) =>
                <li key={ index }>
                    <Link to={ item.path }>
                        <span> <img src={ item.url }/> </span>
                        <span>{ item.name }</span>
                    </Link>
                </li> )}
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
                            return (<div  key={index}  className="dish_hall_item"  style={{ display : display }} key={ index }>
                                <div><img src={ item.url}/></div>
                                <div>
                                    <span className="dishheader">{ item.name }</span>
                                    <p><span>{ item.name }</span></p>
                                    <p>
                                        <span className="dash_time"> { item.remain_time }</span>
                                        <span className="dash_right">
								     <img src={ item.isCollection ? "/src/image/icon/red-heart1.png" : "/src/image/icon/red-heart.png"}/>
						            </span>
                                    </p>
                                </div>
                            </div>) } )
                    }
                </div>
            </div>
        )
    }
}

export default Index;
