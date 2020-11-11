import * as admin from 'firebase-admin';
import { MonthlyEstimationItem, MonthlyEstimationResponse } from './MonthlyEstimationResponse';


export class MonthlyEstimationService{

    async getMonthlyEstimation(horoscope : string, language : string, startDate : FirebaseFirestore.Timestamp, endDate :FirebaseFirestore.Timestamp) : Promise<MonthlyEstimationResponse> {
        const db = admin.firestore();

        const result = new MonthlyEstimationResponse();
        try {
            const resultSnapshot = db.collection("MonthlyEstimation").where("horoscope", "==", horoscope).where("language", "==", language).where("date" , ">=" , startDate).where("date", "<=", endDate).orderBy("date", "asc").get();
            (await resultSnapshot).docs.forEach(function(doc){
                
                console.log(doc.data());
                const date : admin.firestore.Timestamp = doc.data().date;
                const datee : Date = date.toDate();
                const explanation : string = doc.data().explanation;
                const languagee : string = doc.data().language;
                const horoscopee : string = doc.data().horoscope;
                const item = new MonthlyEstimationItem(explanation, horoscopee, languagee, datee);
                
                result.add(item);
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
}