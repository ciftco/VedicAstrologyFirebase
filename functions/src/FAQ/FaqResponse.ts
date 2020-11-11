export class FaqResponse{
  list : Array<FirebaseFirestore.DocumentData> ;
  anyString : string = "";

  constructor(){
      this.list = [] ;
  }

  add( item : FirebaseFirestore.DocumentData){
      this.list.push(item);
  }

  setStatus(statusStr : string){
    this.anyString = statusStr;
  }
}