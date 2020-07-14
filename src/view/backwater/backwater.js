import MobileSelect from '../template/mobileSelect.js';
import unMountSelect from '../template/unmountSelect.js';
import { getDate } from '../../js/plugin-all.js';
import { config_1 , config_2 } from "../template/filterdata.js";
import  BackWaterList  from "../template/backwaterlist.js";
class BackWater extends Component{
    constructor( props ){
        super(props);
        this.state = {
            mobileSelect_1 : '',
            mobileSelect_2 : '',
            isActive : 0 ,
            dataList : [
                '昨天' , '今天' ,'本周' ,'上周' , '本月' , '上月'
            ],
            dateArray :  getDate(new Date())
        }

    }
    componentDidMount() {
        this.setState({
            mobileSelect_1 : new MobileSelect( config_1 ),
            mobileSelect_2 : new MobileSelect( config_2 )
        });
    }
    componentWillUnmount(){
        unMountSelect();
    }
    changeActive( index ){
        this.setState({
            isActive : index
        });
        this.select1.innerHTML = this.state.dateArray[index][0];
        this.select2.innerHTML = this.state.dateArray[index][1];
    }
    render(){
        return(
            <div className="dish_body">
                <div className="dish_header red">
                    <a className="back" onClick={ ()=>{ this.props.history.goBack()  } } ></a>
                    彩种回水
                </div>
                <ul className="state-date">
                    {
                        this.state.dataList.map( (item , index)=>
                          <li onClick={ ()=>{ this.changeActive(index) }} className={ this.state.isActive == index  ? 'active': ''}> { item }</li>
                        )
                    }
                </ul>
                <BackWaterList  select1={el => this.select1 = el}  select2={el => this.select2 = el} />
            </div>
        )
    }
}

export default BackWater;
