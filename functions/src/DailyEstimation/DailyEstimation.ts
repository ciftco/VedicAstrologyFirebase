
export class DailyEstimationResponse{
    estimationList : Array<DailyEstimation> ;
    anyString : string = "";
  
    constructor(){
        this.estimationList = [] ;
    }
  
    add( item : DailyEstimation){
        this.estimationList.push(item);
    }
  
    setStatus(statusStr : string){
      this.anyString = statusStr;
    }
  }
  
  export class DailyEstimation{
    horoscope : string;
    explanation : string;
    date : string;
    language : string;
  
    constructor(date : string, explanation : string, horoscope : string , language : string){
        this.date = date;
        this.explanation = explanation;
        this.horoscope = horoscope;
        this.language = language;
    }
  }

