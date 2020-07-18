class SideBet extends Component {
    render(){
        const active = this.props.active && this.props.bgActive ? 'active' : '';
        return(
            <div>
                <div className={ `betting-list ${active}` }>
                    <div className="betting-list-x">
                        <ul className="betting-list-m">
                        </ul>
                    </div>
                </div>
                <div className="side-btn" onClick={()=> this.props.openActive() }>
                    <img src="/src/image/icon/more.png"/>
                </div>
            </div>
        )
    }
}

export  default SideBet ;
