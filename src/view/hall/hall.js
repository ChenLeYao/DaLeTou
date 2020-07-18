import React , { Component } from 'react';
import data from './data.js';
import { NavInIt , countDown  } from '../../js/plugin-all.js';

let period_color = {
    '0': { color : '#ffffff', background :'#3ba326'} ,
    '1': { color : '#ffffff', background :'yellow'} ,
    '2': { color : '#ffffff', background :'#219dff'} ,
    '3': { color : '#ffffff', background :'#444e4d'} ,
    '4': { color : '#ffffff', background :'orange'} ,
    '5': { color : '#ffffff', background :'#04e0d4'} ,
    '6': { color : '#ffffff', background :'#5009fb'} ,
    '7': { color : '#ffffff', background :'#c8c8c8'} ,
    '8': { color : '#ffffff', background :'red'} ,
    '9': { color : '#ffffff', background :'#7c0113'}
}
class Hall extends Component {
    render(){
        return (  <div>
                    <HallClass/>
                 </div> )
    }
}

class HallClass extends  Component {
    constructor( props ){
        super(props);
        let dataList = data;
        dataList.map( item =>
            item.content.map( content =>
                content.remain_time = countDown(content.start_time , content.end_time )
            )
        )
        this.state = {
            data : dataList ,
            isActive : 0
        }

    }
    componentDidMount() {
        NavInIt();
        this.timeCountDown();
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    timeCountDown(){
     this.timer = setInterval(()=>{
           let dataList = this.state.data;
           dataList.map( item =>
               item.content.map( content =>
                   content.remain_time = countDown(content.start_time , content.end_time )
               )
           );
           this.setState({
               data : data
           })
       },1000)
   }
    render(){
        return (
            <div className="dish_body">
                <div className="dish_header">购彩大厅</div>
                <div className="hall_nav">
                    <ul className="hall_nav_ul">
                        {  this.state.data.map( ( item , index ) =>
                                <li   key={index + item.path  }   className={ this.state.isActive == index ? 'active' : ''}>
                                    <a><img src={ item.path }/> </a>
                                    <span>{ item.name }</span>
                                </li> )
                        }
                    </ul>
                    <div className="bottom_line"></div>
                </div>
                <div className="hall_content">
                    <div className="hall_content_wrap">
                        {  this.state.data.map( ( item , index ) =>
                                <ul   key={index + index.toString() }  className="hall_content_item">
                                    { item.content.map( ( content , index ) =>{
                                                return <li className="hall_con" key={ index + content.path }>
                                                        <div>
                                                            <div className="hall_con_child">
                                                                <div><img src={ content.path }/> </div>
                                                                <div>
                                                                    <h3>{ content.title }</h3>
                                                                    <p> 距离第{ content.period }期截止还有<span>{ content.remain_time }</span></p>
                                                                </div>
                                                            </div>
                                                            <ul className="hall_number">
                                                                {   content.number.toString().split('').map( ( number , index ) =>
                                                                    <li key={ index + '_' + number  } style={ { color : period_color[number].color , background : period_color[number].background }}>{ number }</li>
                                                                )}
                                                            </ul>
                                                            <div className='hall_tab'>
                                                                <div><span className={ `ic ic1`}></span><a>开奖结果</a></div>
                                                            <div><span className={ `ic ic2`}></span><a>玩法走势</a></div>
                                                            <div><span className={ `ic ic3`}></span><a>基本说明</a></div>
                                                        </div>
                                                    </div>
                                                    </li> })  }
                                 </ul> ) }
                    </div>
                </div>
            </div>
        )}
}


export default Hall
