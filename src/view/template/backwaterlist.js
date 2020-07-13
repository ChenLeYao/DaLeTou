
function BackWaterList( props ) {
    return  (<div>
        <ul className="state-time">
            <li id="select1" ref={ props.select1  } >2019-01-01</li>
            <li>--</li>
            <li id="select2" ref={ props.select2 } >2019-01-01</li>
            <li>查询</li>
        </ul>
        <table className="state-table">
            <thead>
            <tr>
                <td>时间</td>
                <td>充值</td>
                <td>提现</td>
                <td>投注</td>
                <td>中奖</td>
                <td>盈亏</td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>汇总</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>汇总</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>汇总</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            </tbody>
        </table>
    </div>)
}

export default BackWaterList;
