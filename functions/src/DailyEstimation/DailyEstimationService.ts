import * as admin from 'firebase-admin';
import * as DailyEstimationClasses from './DailyEstimation';

export class DailyEstimationService 
{
    async getDailyEstimation (horoscope : string, language : string, startDate : number, endDate : number ) : Promise< DailyEstimationClasses.DailyEstimationResponse> {
        const db = admin.firestore();
        try {
            const result = db.collection("vedicastrology").where("horoscope", "==", horoscope)
                                                        .where("language", "==" , language)
                                                        .where("date" , "<=" , endDate)
                                                        .where("date" , ">=" , startDate)
                                                        .orderBy("date", "asc").get() ;

            const estimationResponse : DailyEstimationClasses.DailyEstimationResponse = new DailyEstimationClasses.DailyEstimationResponse();

            (await result).docs.forEach(function(doc) {
                const date : number  = doc.data().date;
                const explanation : string = doc.data().explanation;
                const horoscopee : string = doc.data().horoscope;
                const languagee : string = doc.data().language;
                const estimation : DailyEstimationClasses.DailyEstimation = new DailyEstimationClasses.DailyEstimation(date.toString(), explanation, horoscopee, languagee );
                estimationResponse.add(estimation);
            }); 

            return estimationResponse;
        } catch (error) {
            
            throw error;
        }
    }
}