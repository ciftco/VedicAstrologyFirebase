import * as functions from 'firebase-functions';
import { DailyEstimationService } from './DailyEstimation/DailyEstimationService';
import { FQAService } from './FAQ/FaqService';
import { KeyDateService } from './KeyDates/KeyDateService';
import * as admin from 'firebase-admin';
import { MonthlyEstimationService } from './MonthlyEstimation/MonthlyEstimationService';

admin.initializeApp();
const dailyEstimationService = new DailyEstimationService();
const faqService = new FQAService();  
const keyDateService = new KeyDateService();
const monthlyEstimationService = new MonthlyEstimationService();

export const helloWorld = functions.https.onRequest( async (request, response) => {
  response.send("Hello");
});

export const dailyEstimation = functions.https.onRequest( async (request, response) => {
   const horoscope = request.body.horoscope;
   const language = request.body.language;
   const startDate : number = parseInt( request.body.startDate ) ;
   const endDate : number = parseInt( request.body.endDate ) ;
  
  try {
    const result = await dailyEstimationService.getDailyEstimation(horoscope, language, startDate, endDate);
    response.send(result);
  } catch (error) {
    functions.logger.log(error);
    response.status(500).send(error); 
  }
});

export const faq = functions.https.onRequest(async (request, response) => {
  const language = request.body.language ;
  try {
    const result = await  faqService.getFAQ(language);
    response.send(result)
  } catch (error) {
    functions.logger.log(error);
    response.status(500).send(error);
  } 
});


export const monthlyEstimation = functions.https.onRequest(async (request, response) => {
  const language : string = request.body.language;
  const horoscope : string = request.body.horoscope;
  const start : Date = new Date(request.body.startDate);
  const end : Date = new Date(request.body.endDate);
  const startDate = admin.firestore.Timestamp.fromDate(start);
  const endDate = admin.firestore.Timestamp.fromDate(end);
  
  try {
    const result = await monthlyEstimationService.getMonthlyEstimation(horoscope, language, startDate, endDate);
    response.send(result);
  } catch (error) {
    functions.logger.log(error);
    response.status(500).send(error);
  }
});

export const keyDates = functions.https.onRequest(async (request, response) => {
  const language : string = request.body.language;
  try {
    const result = await keyDateService.getKeyDates(language);
    response.send(result);
  } catch (error) {
    functions.logger.log(error);
    response.send(error);
  }
});
