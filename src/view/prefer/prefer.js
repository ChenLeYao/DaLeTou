import nodata from '../../image/common/nodata.png';
class Prefer extends Component{
    render(){
        return(
            <div className="nodata">
                <img src={ nodata }/>
                    <p>当前页面没有相关数据哦</p>
            </div>
        )
    }
}
export default Prefer;
