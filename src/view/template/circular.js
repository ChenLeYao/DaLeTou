
import CircularProgress from '@material-ui/core/CircularProgress';
class  Circular extends Component {
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
        } , this.props.second )
    }
    render(){
        return  <div  className="circular" style={{ display : this.state.flex  }}>
                    <CircularProgress color="secondary" />
                </div>
    }
}

export default  Circular
