class Rotate extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            active : false
        }
        this.changeActive = this.changeActive.bind(this);
    }
   changeActive(){

        this.setState({
            active :!this.state.active
        })
   }
    render(){
        const active = this.state.active ? 'active' : '';
        return(
            <div className="rotate">
                <div className={`rotate-group ${active}`}>
                    <div>
                        <a>
                            <img src="/src/image/icon/bet2.png"/>
                                <span>当前注单</span>
                        </a>
                    </div>
                   <div>
                    <a>
                       <img src="/src/image/icon/bet0.png"/>
                       <span>开奖视频</span>
                    </a>
                   </div>
                    <div>
                        <a>
                            <img src="/src/image/icon/bet3.png"/>
                                <span>近期开奖</span>
                        </a>
                    </div>
                    <div>
                        <a>
                            <img src="/src/image/icon/bet4.png"/>
                                <span>长龙</span>
                        </a>
                    </div>
                </div>
                <div className={ `rotate-btn ${active}` } onClick={ this.changeActive }>
                    <a>
                        <img src="/src/image/icon/bet1.png"/>
                    </a>
                </div>
            </div>
        )
    }
}

export  default Rotate ;
