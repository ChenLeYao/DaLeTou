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
                           <span className="nav nav1"></span>
                                <span>当前注单</span>
                        </a>
                    </div>
                   <div>
                    <a>
                        <span className="nav nav2"></span>
                       <span>开奖视频</span>
                    </a>
                   </div>
                    <div>
                        <a>
                            <span className="nav nav3"></span>
                                <span>近期开奖</span>
                        </a>
                    </div>
                    <div>
                        <a>
                            <span className="nav nav4"></span>
                                <span>长龙</span>
                        </a>
                    </div>
                </div>
                <div className={ `rotate-btn ${active}` } onClick={ this.changeActive }>
                    <a>
                        <span className="nav nav0"></span>
                    </a>
                </div>
            </div>
        )
    }
}

export  default Rotate ;
