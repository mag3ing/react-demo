import React from "react";
export default React.createClass({
        render: function(){
            return(
                <div className="posi-wrap clearfix">
                    <input type="text" className="smsInput" placeholder="验证码" />
                    <button className="btn btn-sendVerCodeAfter"  onClick="getCode()">发送验证码</button>
                    <p className="boder-br"></p>
                </div>
            );
        }
});