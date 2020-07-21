import  zp from '../../image/common/zp.png';
import { Material } from '../template/material';

class TurnTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            flex: 'flex'
        }
       this.circleNone();
    }
    circleNone(){
        this.timer =  setTimeout(()=>{
            this.setState({
                flex : 'none'
            })
        } , 2500)
    }
    componentWillUnmount(){
        clearTimeout( this.timer );
    }
    render(){
        return <div className="dish_body">
            <div className="dish_header">
                大转盘
            </div>
            <div>
                <Material second={1000}/>
                <img style={{ width: '100%' }} src={zp}/>
            </div>
        </div>
    }
}

export default TurnTable
