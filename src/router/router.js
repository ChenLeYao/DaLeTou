import { Route , Switch , Redirect  } from 'react-router-dom';
import React , { Component } from 'react';
import Hall from '../view/hall/hall.js'
import Index from '../view/index/index.js'
import User from '../view/user/user.js'
import TurnTable from '../view/turntable/turntable.js'
import Account from '../view/account/account.js'
import AccountState from '../view/accountstate/accountstate.js'
import BackWater from '../view/backwater/backwater.js'
import BackWater28 from '../view/backwater28/backwater28.js'
import History from '../view/history/history.js'
import Prefer from '../view/prefer/prefer.js'
import Recharge from '../view/recharge/recharge.js'
import ReportForm from '../view/reportform/reportform.js'
import Discount from '../view/discount/discount.js'
import Share from '../view/share/share.js'
import  Nav from '../view/nav/nav.js';
import Betting from '../view/betting/betting.js'
import Message from '../view/message/message.js'
import MessageDetail from '../view/message/messagedetail.js'
import Setting from '../view/setting/setting.js'
import Password from '../view/setting/password.js'
import BindAccount from "../view/account/bindaccount";
import Cash from "../view/account/cash";
class Home extends Component{
    render(){
        const url = this.props.match.url;
        return(
            <div>
                <Nav pathname={this.props.location.pathname}/>
                <Switch>
                    <Route path="/home"  exact component={Index} />
                    <Route path={ `${url}/index`} exact component={Index} />
                    <Route path={ `${url}/hall`}  exact component={Hall} />
                    <Route path={ `${url}/user`} exact component={User} />
                    <Route path={ `${url}/share`}    exact component={Share} />
                    <Route path={ `${url}/turntable`}   exact component={TurnTable}/>

                </Switch>
              </div>
            )
    }
}
export class RouteIndex extends Component {
    render(){
        console.log('router');
        return(
               <div>
                   <Switch>
                       <Route path="/"   exact render={()=>  <Redirect to="/home/index"/>}/>
                       <Route path="/home"  component={ Home }/>
                       <Route path={`/account`}  exact component={Account}/>
                       <Route path={`/discount`}   exact component={Discount}/>
                       <Route path={`/accountstate`}   component={AccountState} />
                       <Route path={`/backwater`}  exact component={BackWater} />
                       <Route path={`/backwater28`}  exact component={BackWater28} />
                       <Route path={`/history`}  exact component={History}/>
                       <Route path={`/prefer`}  exact component={Prefer} />
                       <Route path={`/recharge`}  exact component={Recharge}/>
                       <Route path={`/reportform`}  exact component={ReportForm}/>
                       <Route path={`/betting`}  exact component={Betting}/>
                       <Route path={`/message`}  exact component={Message}/>
                       <Route path={`/messagedetail`}  exact component={MessageDetail}/>
                       <Route path={`/setting`}  exact component={Setting}/>
                       <Route path={ `/password`}   exact component={Password}/>
                       <Route path={ `/help`}   exact component={Prefer}/>
                       <Route path={ `/bindaccount`}   exact component={BindAccount}/>
                       <Route path={ `/cash`}   exact component={Cash}/>
                   </Switch>
               </div>
        )
    }
}






