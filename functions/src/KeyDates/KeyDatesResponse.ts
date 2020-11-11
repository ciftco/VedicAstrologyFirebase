export class KeyDateResponse{
    estimationList : Array<KeyDateItem> ;
    anyString : string = "";
  
    constructor(){
        this.estimationList = [] ;
    }
  
    add( item : KeyDateItem){
        this.estimationList.push(item);
    }
  
    setStatus(statusStr : string){
      this.anyString = statusStr;
    }
  }

export class KeyDateItem{
    body : string ;
    subject : string  ;
    language : string;
    date : Date ; 

    constructor(body : string, subject : string, language : string, date : Date){
        this.body = body;
        this.subject = subject;
        this.language = language;
        this.date = date;
    }
}