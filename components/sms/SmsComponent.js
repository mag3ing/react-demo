import React from "react";
import SmsInput from "./SmsInputComponent.js";
import SmsSubmit from "./SmsSubmitComponent.js";
import SmsSendcode from "./SmsSendcodeComponent.js";
require("./sms.css");
export default React.createClass({
    render: function() {
        return (
            <div className="g-bd">
                <div className="content-wrap">
                    <SmsInput />
                    <SmsSendcode />
                    <SmsSubmit />
                </div>
            </div>
        );
    }
});