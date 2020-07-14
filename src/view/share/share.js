import Nav from '../nav/nav.js';
import React from "react";
class Share extends Component{
    render(){
        return(
            <div>
                share
                <Nav match={ this.props.match}/>
            </div>
        )
    }
}
export default Share;
