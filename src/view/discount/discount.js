import nodata from '../../image/common/nodata.png';
class Discount extends Component{
    render(){
        return(
            <div>
                <div className="dish_header red">  <a className="back" ></a>迪士尼彩乐园</div>
                <div className="nodata">
                    <img src={ nodata }/>
                    <p>当前页面没有相关数据哦</p>
                </div>
            </div>
        )
    }
}

export default Discount;
