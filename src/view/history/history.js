import Filter from '../template/filter.js';
import unMountSelect from "../template/unmountSelect";
const filterData = [
    '北京pk10',
    '幸运飞艇',
    '飞艇牛牛',
    '腾讯分分彩',
    '悉尼三分彩',
    '新北京幸运28',
    '重庆时时彩',
    '新加拿大28',
    '极速赛车',
    '新疆时时彩',
    '澳洲幸运5'
];
class History extends Component{
    constructor( props ){
        super(props);
        this.state = {
            isActive : false ,
            isSelected : 0
        }
        this.changeActive = this.changeActive.bind(this);
        this.changeSelected = this.changeSelected.bind(this);
    }
    changeActive(){
        this.setState({
            isActive : !this.state.isActive
        })
    }
    changeSelected( index ){
        this.setState({
            isSelected : index
        })
    }
    componentWillUnmount(){
        unMountSelect();
    }

    render(){
        return(
            <div>
                <div className="dish_body">
                    <div className="dish_header red">
                        <a className="back" ></a>
                        投注记录<span className="filter" onClick={ this.changeActive} >筛选</span>
                    </div>
                    <div className="re-name">
                        <p>每页显示<span>10</span>条数据</p>
                    </div>
                    <table className="his-table">
                        <thead>
                        <tr>
                            <td>彩种</td>
                            <td>期数</td>
                            <td>玩法</td>
                            <td>下注金额</td>
                            <td>输赢金额</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>北京pk10</td>
                            <td>434545</td>
                            <td>玩法</td>
                            <td>1000</td>
                            <td>2000</td>
                        </tr>
                        <tr>
                            <td>北京pk10</td>
                            <td>434545</td>
                            <td>玩法</td>
                            <td>1000</td>
                            <td>2000</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <Filter isActive = { this.state.isActive }  changeSelected={ this.changeSelected } isSelected={ this.state.isSelected } data={ filterData } changeActive={ this.changeActive }/>
                <div id="PageList" style={{ marginLeft: "20px" }}></div>

            </div>
        )
    }
}
export default History;
