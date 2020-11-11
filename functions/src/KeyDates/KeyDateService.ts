import * as admin from 'firebase-admin';
import { KeyDateItem, KeyDateResponse } from './KeyDatesResponse';

export class KeyDateService{
    async getKeyDates(language : string){
        const db = admin.firestore();
        const result : KeyDateResponse = new KeyDateResponse();
        try {
            const resultPromise = db.collection("KeyDates").where("language" , "==", language ).orderBy("date", "asc").get();
            (await resultPromise).docs.forEach(function(doc){
                const date : FirebaseFirestore.Timestamp  = doc.data().date;
                const datee = date.toDate();
                const body = doc.data().body;
                const subject = doc.data().subject;
                const languagee = doc.data().language;

                const item = new KeyDateItem(body, subject,languagee, datee);
                result.add(item); 
            });
            return result;
        } catch (error) {
        throw error;
        } 
    }
}