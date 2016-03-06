"use strict";
var Message = (function () {
    function Message(text, isIncoming, 
        //public from: string, 
        avatarHash) {
        this.text = text;
        this.isIncoming = isIncoming;
        this.avatarHash = avatarHash;
        this.sentOn = new Date();
        this.avatarUrl = "https://www.gravatar.com/avatar/" + avatarHash;
    }
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=message.js.map