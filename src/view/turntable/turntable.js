import  zp from '../../image/common/zp.jpg';
class TurnTable extends Component {
    render(){
        return <div className="dish_body">
            <div className="dish_header">
                大转盘
            </div>
            <div>
                <img style={{ width: '100%' }} src={zp}/>
            </div>
        </div>
    }
}

export default TurnTable
