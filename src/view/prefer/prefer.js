import nodata from '../../image/common/nodata.png';
class Prefer extends Component{
    render(){
        return(
            <div className="dish_body">
                <div className="dish_header red">
                    <a className="back"  onClick={ ()=>{ this.props.history.goBack()  } }></a>
                    投注记录
                </div>
                <div className="nodata">
                    <img src={ nodata }/>
                    <p>当前页面没有相关数据哦</p>
                </div>
           </div>
        )
    }
}
export default Prefer;
