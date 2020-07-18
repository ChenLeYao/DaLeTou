import Wager from "./wager.js";
import Menu from "./menu.js";
import FollowBet from './followbet.js';
import Result from './result.js';
import  Rotate from './rotate.js'
import SideBet from './sidebet';
class Betting extends Component{
    constructor( props ){
       super( props );
       this.state = {
           bgActive : false ,
           sidebetActive : false ,
           menuActive : false ,
           wagerActive : false
       };
        this.closeActive = this.closeActive.bind(this);
        this.openSidebet = this.openSidebet.bind(this);
        this.openMenu = this.openMenu.bind(this);
        this.openWager = this.openWager.bind(this);
    }
    openWager(){
        this.setState({
            bgActive : true ,
            wagerActive : true
        })
    }
    openMenu(){
        this.setState({
            bgActive : true ,
            menuActive : true
        })
    }
    openSidebet (){
        this.setState({
            bgActive : true ,
            sidebetActive : true
        })
    }
    closeActive (){
        console.log(1);
        this.setState({
            bgActive : false ,
            sidebetActive : false,
            menuActive : false ,
            wagerActive : false
        })
    }
    render(){
        return(
            <div className="dish_body">
                <Menu history={ this.props.history } bgActive={ this.state.bgActive } active={ this.state.menuActive }  openActive={ this.openMenu } />
                <Result/>
                <FollowBet />
                <Rotate/>
                <SideBet bgActive={ this.state.bgActive } active={ this.state.sidebetActive }  openActive={ this.openSidebet }/>
                <Wager bgActive={ this.state.bgActive } active={ this.state.wagerActive }  openActive={ this.openWager }  closeActive={ this.closeActive }/>
                <BackGround bgActive={ this.state.bgActive } closeActive={ this.closeActive }/>

            </div>
        )
    }
}


function BackGround( props ) {
    let active = props.bgActive ? 'active' : '';
    return <div onClick={ ()=> props.closeActive() } className={ `bg ${active}`}>
    </div>
}

export default Betting;
