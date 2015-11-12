import React from "react";
export default React.createClass({
    getInitialState: function() {
        return {
            //手机号是否有效
            telChecked: false
        };
    },
    checkTel: function(event) {
        //检测手机号码的有效性
        var value=event.target.value;
        var reg = /^0?1[34578]\d{9}$/;
        if(reg.test(value)){
            //有效，修改telChecked为true
            this.setState({
                telChecked: true
            });
            alert("手机号合法");
        }else{
            //无效
            return;
        }
    },
    render: function() {
        return(
            <input type="tel" className="input" maxLength="11" placeholder="手机号" onChange={this.checkTel.bind(this)}/>
        );
    }
});