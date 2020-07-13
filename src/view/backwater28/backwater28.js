import MobileSelect from '../template/mobileSelect.js';
import { config_1 , config_2 } from "../template/filterdata.js";
import  BackWaterList  from "../template/backwaterlist.js";
import unMountSelect from '../template/unmountSelect.js';
class BackWater28 extends Component{
    constructor( props ){
        super(props);
        this.state = {
            mobileSelect_1 : '',
            mobileSelect_2 : '',
            isActive : 0
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
    }
    render(){
        return(
            <div className="dish_body">
                <div className="dish_header red">
                    <a className="back" ></a>
                    28彩种回水
                </div>
                <div className="Oddswrap">
                    <ul className="Odds">
                        <li className="active">2.5赔率厅</li>
                        <li>组合4.2 4.6 赔率厅</li>
                        <li>组合4.2 5.0 赔率厅</li>
                        <li>大小2.8组合6.0 赔率厅</li>
                    </ul>
                    <span className="menu1"></span>
                </div>
                <BackWaterList  select1={el => this.select1 = el}  select2={el => this.select2 = el} />
            </div>
        )
    }
}
export default BackWater28;
