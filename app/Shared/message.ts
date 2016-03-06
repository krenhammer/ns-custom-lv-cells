export class Message {
    
    public sentOn: Date;
    public avatarUrl: string;
    
    constructor(
        public text: string, 
        public isIncoming: boolean, 
        //public from: string, 
        public avatarHash:string){
        
        this.sentOn = new Date();
        this.avatarUrl = "https://www.gravatar.com/avatar/" + avatarHash;
    }
    
}

