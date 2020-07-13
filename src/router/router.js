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
export class RouteIndex extends Component {
    render(){
        return(
                <Switch>
                    <Route path="/"  exact component={BackWater28}/>
                    <Route path="/index"  component={Index} />
                    <Route path="/hall" exact component={Hall} />
                    <Route path="/user" exact component={User} />
                    <Route path="/turntable" exact component={TurnTable}/>
                </Switch>
        )
    }
}

export class RouteMain extends Component {
    render(){
        return(
            <Switch>
                <Route path="/account"  exact component={Account}/>
                <Route path="/discount"  exact component={Discount}/>
                <Route path="/accountstate"  component={AccountState} />
                <Route path="/backwater" exact component={BackWater} />
                <Route path="/backwater28" exact component={BackWater28} />
                <Route path="/history" exact component={History}/>
                <Route path="/prefer" exact component={Prefer} />
                <Route path="/recharge" exact component={Recharge}/>
                <Route path="/reportform" exact component={ReportForm}/>
            </Switch>
        )
    }
}




