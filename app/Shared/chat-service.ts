import { ObservableArray } from 'data/observable-array';
import { Message } from'./message';

export class ChatService  {
    
    messages: ObservableArray<Message>;
 
    // Used by Gravatar to get the Avatar Images
    senderAvatarHash: string = "cf284e95ce2c1adff27b04b52cda395e";
    recieverAvatarHash: string = "df376b0a9ac1743cadb587a30998704c";
    
    // Random Quotes API
    randomQuoteUrl: string = "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&key=&lang=en";
    
    constructor(){
     
        this.messages = new ObservableArray<Message>([]);
        this.sendMessage("Yo, hit me with some wisdom! 😁");
    }
    
    sendMessage(newMessage: string){
        var that = this;
        that.messages.push(new Message(newMessage,false,that.senderAvatarHash));
        that.getRandomQuote().then(function(quote){
            var message = new Message(quote,true,that.recieverAvatarHash);
            that.messages.push(message);
            //console.log("Added New Message " + JSON.stringify(message));
        });
    }
    
    getRandomQuote(){
       
        return fetch(this.randomQuoteUrl)
            .then(function(response){
                return response.json();
            }).then(function(json){
                return json.quoteText;
            });
     }
 
}