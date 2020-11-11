import * as FAQClasses from './FaqResponse';
import * as admin from 'firebase-admin';


export class FQAService{

    async getFAQ(language : string){
        const db = admin.firestore();
        const result = new  FAQClasses.FaqResponse();
        try {
          const resultPromise = db.collection("FAQ").where("language" , "==", language ).get();
          (await resultPromise).docs.forEach(function(doc){
            result.add(doc.data());
          });
          return result;
        } catch (error) {
          throw error;
        } 
    }
}