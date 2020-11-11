export class MonthlyEstimationResponse{
    estimationList : Array<MonthlyEstimationItem> ;
  
    constructor(){
        this.estimationList = [] ;
    }
  
    add( item : MonthlyEstimationItem){
        this.estimationList.push(item);
    }

  }

export class MonthlyEstimationItem{
    explanation : string ;
    horoscope : string  ;
    language : string;
    date : Date ; 

    constructor(explanation : string, horoscope : string, language : string, date : Date){
        this.explanation = explanation;
        this.horoscope = horoscope;
        this.language = language;
        this.date = date;
    }
}