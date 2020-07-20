import  zp from '../../image/common/zp.png';
import Circular from '../template/circular';

class TurnTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            flex: 'flex'
        }
       this.circleNone();
    }
    circleNone(){
        setTimeout(()=>{
            this.setState({
                flex : 'none'
            })
        } , 2500)
    }
    render(){
        return <div className="dish_body">
            <div className="dish_header">
                大转盘
            </div>
            <div>
                <Circular second={1000}/>
                <img style={{ width: '100%' }} src={zp}/>
            </div>
        </div>
    }
}

export default TurnTable
