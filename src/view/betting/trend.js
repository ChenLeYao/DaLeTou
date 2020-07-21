class Trend extends Component {
    render(){
        return(
            <div className="dish_body">
                <div className="dish_header red" style={{ paddingTop: '0.15rem' }}>
                    <a className="back" ></a>
                    <ul className="dish_header_tab">
                        <li>开奖结果</li>
                        <li>基本走势</li>
                        <li>玩法说明</li>
                    </ul>
                </div>

                <div className="dish_re">
                    <div className="dish_re_item " id="dish_result">
                        <div className="filter_header">
                            <div className="filterx" id="trigger3">
                                时间筛选
                            </div>
                            <div className="filter_number">
                                <input type="text" placeholder="输入要查询的期数"/>
                            </div>
                            <div className="search">
                                查询
                            </div>
                        </div>
                        <ul className="result_list">
                            <li>
                                <p>第738500期
                                    <span>2019-09-06 09:32</span>
                                </p>
                                <ul className="result_list_child">
                                    <li>2</li>
                                    <li>2</li>
                                    <li>2</li>
                                    <li>2</li>
                                    <li>2</li>
                                    <li>2</li>
                                    <li>2</li>
                                    <li>2</li>
                                </ul>
                            </li>
                            <li>
                                <p>第738500期
                                    <span>2019-09-06 09:32</span>
                                </p>
                                <ul className="result_list_child">
                                    <li>2</li>
                                    <li>2</li>
                                    <li>2</li>
                                    <li>2</li>
                                    <li>2</li>
                                    <li>2</li>
                                    <li>2</li>
                                    <li>2</li>
                                </ul>
                            </li>
                            <li>
                                <p>第738500期
                                    <span>2019-09-06 09:32</span>
                                </p>
                                <ul className="result_list_child">
                                    <li>2</li>
                                    <li>2</li>
                                    <li>2</li>
                                    <li>2</li>
                                    <li>2</li>
                                    <li>2</li>
                                    <li>2</li>
                                    <li>2</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="dish_re_item" id="dish_trend">
                        <ul className="trend_tab">
                            <li className="active">冠军</li>
                            <li>亚军</li>
                            <li>季军</li>
                            <li>冠军</li>
                            <li>冠军</li>
                            <li>冠军</li>
                            <li>冠军</li>
                            <li>冠军</li>
                            <li>冠军</li>
                        </ul>
                        <table>
                            <thead>
                            <tr>
                                <td>期数</td>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                                <td>7</td>
                                <td>8</td>
                                <td>9</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>213122222</td>
                                <td><span>1</span></td>
                                <td><span>2</span></td>
                                <td><span>3</span></td>
                                <td><span>4</span></td>
                                <td><span>5</span></td>
                                <td><span>6</span></td>
                                <td><span>7</span></td>
                                <td><span>8</span></td>
                                <td><span className="active">9</span></td>
                            </tr>

                            <tr>
                                <td>213122223</td>
                                <td><span className="active">1</span></td>
                                <td><span>2</span></td>
                                <td><span>3</span></td>
                                <td><span>4</span></td>
                                <td><span>5</span></td>
                                <td><span>6</span></td>
                                <td><span>7</span></td>
                                <td><span>8</span></td>
                                <td><span>9</span></td>
                            </tr>

                            <tr>
                                <td>213122224</td>
                                <td><span>1</span></td>
                                <td><span className="active">2</span></td>
                                <td><span>3</span></td>
                                <td><span>4</span></td>
                                <td><span>5</span></td>
                                <td><span>6</span></td>
                                <td><span>7</span></td>
                                <td><span>8</span></td>
                                <td><span>9</span></td>
                            </tr>

                            <tr>
                                <td>213122225</td>
                                <td><span>1</span></td>
                                <td><span className="active">2</span></td>
                                <td><span>3</span></td>
                                <td><span>4</span></td>
                                <td><span>5</span></td>
                                <td><span>6</span></td>
                                <td><span>7</span></td>
                                <td><span>8</span></td>
                                <td><span>9</span></td>
                            </tr>

                            <tr>
                                <td>213122226</td>
                                <td><span>1</span></td>
                                <td><span>2</span></td>
                                <td><span>3</span></td>
                                <td><span>4</span></td>
                                <td><span>5</span></td>
                                <td><span>6</span></td>
                                <td><span>7</span></td>
                                <td><span>8</span></td>
                                <td><span className="active">9</span></td>
                            </tr>

                            <tr>
                                <td>213122227</td>
                                <td><span>1</span></td>
                                <td><span>2</span></td>
                                <td><span>3</span></td>
                                <td><span>4</span></td>
                                <td><span className="active">5</span></td>
                                <td><span>6</span></td>
                                <td><span>7</span></td>
                                <td><span>8</span></td>
                                <td><span>9</span></td>
                            </tr>
                            </tbody>

                        </table>
                    </div>

                    <div className="dish_re_item" id="dish_explain">
                        <div className="ql-editor">
                            <p>游戏规则：</p>
                            <p><br/></p>
                            <p>1、游戏介绍</p>
                            <p><br/></p>
                            <p>开奖号码为北京赛车PK10、官方可查对开奖记录</p>
                            <p><br/></p>
                            <p>2、游戏时间</p>
                            <p><br/></p>
                            <p>09:07-00:00北京赛车PK10</p>
                            <p><br/></p>
                            <p>3、玩法说明</p>
                            <p><br/></p>
                            <p>1、10个开奖号码按顺序取两位分组，如鼠：第3位第4位，牛：第4位第5位，虎：第5位第6位，以此类推</p>
                            <p><br/></p>
                            <p>2、每组两个数字相加的个位数即为牛几，个位数为0则为牛牛</p>
                            <p><br/></p>
                            <p>3、庄：固定第1位第2位，其余7门可自由选择压注，与庄对比决定输盈</p>
                            <p><br/></p>
                            <p>4、下注比列为1:4，比如要下注10元宝、账户里必须有40元宝才可以，否则会提示余额不足(防止庄家牛牛)</p>
                            <p><br/></p>
                            <p>3、赔率说明：</p>
                            <p></p>
                            <p> 1、牛1--牛6=1倍，牛7-牛8=2倍，牛9=3倍，牛牛=4倍</p>
                            <p><br/></p>
                            <p>2、牛1--牛6庄赢，牛7-牛8-牛9-牛牛，打和</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Trend;
