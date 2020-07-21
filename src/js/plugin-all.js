// import {message} from "antd";

function toDateString(date) {
    var dayString = (date.getFullYear()) + '-' + (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
    return dayString;
};

export function countDown( start , end ) {
    let startTime = new Date(start).getTime();
    let endTime = new Date(end).getTime();
    let nowTime = new Date().getTime();
    let remainTime = nowTime - endTime;
    if ( remainTime >= 0  ){
         return '已封盘';
    }else if ( remainTime < 0  ){
        if ( nowTime < startTime ){
            remainTime = startTime - nowTime;
        }
    }
    let hours = Math.floor( remainTime/( 1000 * 60 * 60 ) );
    let minutes =  Math.floor(remainTime%( 1000 * 60 * 60 )/( 1000 * 60 ));
    let seconds =  Math.floor(remainTime%( 1000 * 60  )/1000);
    minutes = minutes < 10 ? '0' + minutes : minutes ;
    seconds = seconds < 10 ? '0' + seconds : seconds ;
    return `${hours}:${minutes}:${seconds}`;
}

export function NavInIt (){
    var NavLi = document.querySelectorAll('.hall_nav_ul li');
    var bottomLine = document.querySelector('.bottom_line');
    var offsetWidth = NavLi[0].offsetWidth;
    var contentWrap =  document.querySelector('.hall_content_wrap');
    var WrapWidth = contentWrap.querySelectorAll('.hall_content_item')[0].offsetWidth;
    for(var i = 0; i < NavLi.length; i++) {
        NavLi[i].index = i ;
        NavLi[i].onclick = function() {
            bottomLine.style.left =  (this.index *  offsetWidth) + 'px';
            contentWrap.style.left = WrapWidth* this.index *-1 + 'px';
            document.querySelector('.hall_nav_ul .active').classList.remove('active');
            if( !this.classList.contains('active') ) this.classList.add('active');
        }
    }
}

export function getDate(date) {
    var arr = [
        [],
        [],
        [],
        [],
        [],
        []
    ];
    var day = date.getDate();
    var week = date.getDay();
    //昨天
    date.setDate(day - 1);
    arr[0][1] = arr[0][0] = toDateString(date);
    //今天
    date.setDate(day);
    arr[1][1] = arr[1][0] = toDateString(date);
    //本周
    date.setDate(day - (week - 1));
    arr[2][0] = toDateString(date);
    date.setDate(day);
    arr[2][1] = toDateString(date);
    //上周
    date.setDate(day - week - 6);
    arr[3][0] = toDateString(date);
    date.setDate(day - week);
    arr[3][1] = toDateString(date);
    //本月
    date.setDate(1);
    arr[4][0] = toDateString(date);
    date.setDate(day);
    arr[4][1] = toDateString(date);
    //上月
    date.setDate(-30);
    arr[5][0] = toDateString(date);
    date.setDate(date.getDate() + 30);
    arr[5][1] = toDateString(date);
    return arr;
}

