import React from "react";
import SmsInput from "./SmsInputComponent.js";
import SmsSubmit from "./SmsSubmitComponent.js";
require("./sms.css");
export default React.createClass({
    render: function() {
        return (
            <div className="g-bd">
                <div className="content-wrap">
                    <SmsInput />
                    <SmsSubmit />
                </div>
            </div>
        );
    }
});