"use strict";
var observable_1 = require('data/observable');
var chat_service_1 = require('./Shared/chat-service');
var ViewModel = (function (_super) {
    __extends(ViewModel, _super);
    function ViewModel() {
        _super.call(this);
        this.newMessage = '';
        this.chatService = new chat_service_1.ChatService();
        this.messages = this.chatService.messages;
    }
    ViewModel.prototype.sendMessage = function () {
        this.chatService.sendMessage(this.newMessage);
        this.set('newMessage', '');
    };
    return ViewModel;
}(observable_1.Observable));
var viewModel = new ViewModel();
var pageLoaded = function (args) {
    var page = args.object;
    page.bindingContext = viewModel;
};
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=main-page.js.map