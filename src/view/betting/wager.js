class Wager extends Component {
   render(){
       const active = this.props.active && this.props.bgActive ? 'active' : '';
       return(
           <div>

           <div className={`bet-box ${active}`}>
               <div className='bet-box-i'>
                   <div className='bet-box-left'>
                       <ul>
                           <li className="active">冠亚军和</li>
                           <li>冠军</li>
                           <li>亚军</li>
                           <li>季军</li>
                           <li>第四名</li>
                           <li>第五名</li>
                           <li>第六名</li>
                           <li>第七名</li>
                       </ul>
                   </div>
                   <div className='bet-box-right'>
                       <div className='bet-box-con'>
                           <div className='bet-box-c'>
                               <p>
                                   <span className="box-l">大</span><span className="box-r">1.98</span>
                               </p>
                               <p>
                                   <span className="box-l">单</span><span className="box-r">1.98</span>
                               </p>
                               <p>
                                   <span className="box-l">小</span><span className="box-r">1.98</span>
                               </p>
                               <p>
                                   <span className="box-l">3</span><span className="box-r">1.98</span>
                               </p>
                               <p>
                                   <span className="box-l">4</span><span className="box-r">1.98</span>
                               </p>
                               <p>
                                   <span className="box-l">5</span><span className="box-r">小</span>
                               </p>
                               <p>
                                   <span className="box-l">大</span><span className="box-r">1.98</span>
                               </p>
                               <p>
                                   <span className="box-l">单</span><span className="box-r">1.98</span>
                               </p>
                               <p>
                                   <span className="box-l">小</span><span className="box-r">1.98</span>
                               </p>
                               <p>
                                   <span className="box-l">3</span><span className="box-r">1.98</span>
                               </p>
                               <p>
                                   <span className="box-l">4</span><span className="box-r">1.98</span>
                               </p>
                               <p>
                                   <span className="box-l">5</span><span className="box-r">小</span>
                               </p>
                               <p>
                                   <span className="box-l">大</span><span className="box-r">1.98</span>
                               </p>
                               <p>
                                   <span className="box-l">单</span><span className="box-r">1.98</span>
                               </p>
                               <p>
                                   <span className="box-l">小</span><span className="box-r">1.98</span>
                               </p>
                               <p>
                                   <span className="box-l">3</span><span className="box-r">1.98</span>
                               </p>
                               <p>
                                   <span className="box-l">4</span><span className="box-r">1.98</span>
                               </p>
                               <p>
                                   <span className="box-l">5</span><span className="box-r">小</span>
                               </p>
                           </div>
                       </div>
                       <div className="bet-box-x">
                           <input placeholder="请输入投注金额"/>
                       </div>
                   </div>
               </div>
               <div className='bet-box-o'>
                   <a>最小投注</a>
                   <a>双倍投注</a>
                   <a className="confirm" onClick={ this.props.closeActive }>确认投注</a>
               </div>
           </div>
               <div className='foot'>
                   <a onClick={ this.props.openActive }>立即投注</a>
               </div>
           </div>
       )
   }
}

export  default Wager ;
