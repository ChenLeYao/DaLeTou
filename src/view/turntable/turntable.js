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
        return <div className="dish_body" style={{ height : "100%"}}>
            <div className="dish_header">
                大转盘
            </div>
            <Material second={1000}/>
            <div className="turntable"></div>
        </div>
    }
}

export default TurnTable
