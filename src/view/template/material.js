
import CircularProgress from '@material-ui/core/CircularProgress';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
export class  Material extends Component {
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

export class AlertMessage extends Component {
   constructor(props){
       super(props);
       this.state = {
           active : props.active
       }
   }
   componentWillReceiveProps (nextProps){
      if ( nextProps.active ){
          this.setState({
              active : true
          })
         this.timer =  setTimeout(()=>{
              this.setState({
                  active : false
              })
          },1000)
      }
   }
    componentWillUnmount (){
       clearTimeout(this.timer);
    }
  render(){
      const active = this.state.active ? 'block' : 'none';
      return (
          <div style={{ display : active }}>
              <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={true}  autoHideDuration={6000} onClose={()=>{}}>
                  <MuiAlert style={{ fontSize : '15px'}}  elevation={6} severity="success" variant="filled" >
                     该功能暂未开放
                  </MuiAlert>
              </Snackbar>
          </div>
      );
  }
}
