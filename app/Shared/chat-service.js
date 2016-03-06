"use strict";
var observable_array_1 = require('data/observable-array');
var message_1 = require('./message');
var ChatService = (function () {
    function ChatService() {
        // Used by Gravatar to get the Avatar Images
        this.senderAvatarHash = "cf284e95ce2c1adff27b04b52cda395e";
        this.recieverAvatarHash = "df376b0a9ac1743cadb587a30998704c";
        // Random Quotes API
        this.randomQuoteUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&key=&lang=en";
        this.messages = new observable_array_1.ObservableArray([]);
        this.sendMessage("Yo, hit me with some wisdom! 😁");
    }
    ChatService.prototype.sendMessage = function (newMessage) {
        var that = this;
        that.messages.push(new message_1.Message(newMessage, false, that.senderAvatarHash));
        that.getRandomQuote().then(function (quote) {
            var message = new message_1.Message(quote, true, that.recieverAvatarHash);
            that.messages.push(message);
            //console.log("Added New Message " + JSON.stringify(message));
        });
    };
    ChatService.prototype.getRandomQuote = function () {
        return fetch(this.randomQuoteUrl)
            .then(function (response) {
            return response.json();
        }).then(function (json) {
            return json.quoteText;
        });
    };
    return ChatService;
}());
exports.ChatService = ChatService;
//# sourceMappingURL=chat-service.js.map