import { Observable, EventData } from 'data/observable';
import { ObservableArray } from 'data/observable-array';
import { Page } from 'ui/page';
import { Message } from './Shared/message';
import { ChatService } from './Shared/chat-service';

class ViewModel extends Observable {
    
    messages: ObservableArray<Message>
    newMessage: string = '';
    
    chatService:ChatService;
    
    constructor(){
        super();
        this.chatService = new ChatService();
        
        this.messages = this.chatService.messages;
    }
    
    sendMessage(){
        this.chatService.sendMessage(this.newMessage);
        this.set('newMessage',''); 
    }
}

let viewModel = new ViewModel();

let pageLoaded = (args: EventData) => {
    let page = <Page>args.object;
    
    page.bindingContext = viewModel;
}

export { pageLoaded }


