
import MobileSelect from './mobileSelect.js';
import { config_1 , config_2} from "./filterdata";
class Filter extends Component{
    constructor( props ){
        super(props);
        this.state = {
            mobileSelect_1 : '',
            mobileSelect_2 : '',
        }
    }
    componentDidMount() {
        this.setState({
            mobileSelect_1 : new MobileSelect( config_1 ),
            mobileSelect_2 : new MobileSelect( config_2 )
        })
    }
    render(){
        return(
            <div>
                <div className={ this.props.isActive ? "filter-right active" : "filter-right"}>
                    <div className="re-name">
                        <p>时间</p>
                        <ul className="his-ul">
                            <li id="select1" style={{ width: '40%' }}>起始时间</li>
                            <li style={{ width: '0.5rem' , background:'none' }}>至</li>
                            <li id="select2" style={{ width: '40%' }}>结束时间</li>
                        </ul>
                    </div>
                    <div className="re-name">
                        <p>分类</p>
                    </div>
                    <ul className="his-ul">
                        { this.props.data.map( ( item , index ) =>
                            <li key={ index } onClick={()=>{ this.props.changeSelected(index)}} className={ this.props.isSelected == index  ? 'active' : ''}> { item }</li>
                         )}
                    </ul>
                    <div className="his-tab">
                        <div className="reset" onClick={ ()=>{ this.props.changeSelected(0) } }>重置</div>
                        <div className="confirm"  onClick={ this.props.changeActive } >确认</div>
                    </div>
                </div>
                <div onClick={ this.props.changeActive } className={ this.props.isActive ? "bg active" : "bg"}>
                </div>
            </div>
        )
    }
}

export default Filter;
