import data from '../index/data.js';
import { countDown } from '../../js/plugin-all.js';
import { Link } from 'react-router-dom';
class SideBet extends Component {
    constructor( props ){
        super(props);
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
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    render(){
        const active = this.props.active && this.props.bgActive ? 'active' : '';
        return(
            <div>
                <div className={ `betting-list ${active}` }>
                    <div className="betting-list-x">
                        <ul className="betting-list-m">
                        {
                            this.state.data.map( (item ,index)=>
                                <li>
                                    <Link to="/betting" style={{display:"flex"}}>
                                    <div>
                                        <img src={ item.url }/>
                                    </div>
                                    <div>
                                        <p style={{ marginTop: 0 }}>{ item.name }</p>
                                        <span className="EndTime">{ item.remain_time }</span>
                                    </div>
                                    </Link>
                                </li>
                            )
                        }
                        </ul>
                    </div>
                </div>
                <div className="side-btn" onClick={()=> this.props.openActive() }>

                </div>
            </div>
        )
    }
}

export  default SideBet ;
