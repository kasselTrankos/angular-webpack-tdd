import Q from 'q';
import {TwitterAccountModel} from './../index';
export const SaveNewAccount = (accountName)=>{
  let deferred = Q.defer();
  const Account = new TwitterAccountModel({name: accountName});
  Account.save((err, doc, numAffected)=> {
    if(err) deferred.reject(err);
    else deferred.resolve(doc);
  });
  return deferred.promise;
}
export const GetAllAccounts = ()=>{
  let deferred = Q.defer();
  TwitterAccountModel.find({}, '', (err, doc)=>{
    if(!err)  {
      deferred.resolve(doc);
    }else{
      console.log('ERR en querys.GetAll: ',err);
      deferred.reject(err);
    }
  });
  return deferred.promise;
}
export const GetIdFromAccount = (accountName)=>{
  let deferred = Q.defer();
  TwitterAccountModel.findOne({
    name:accountName
  }, '', (err, doc)=>{
    if(err) {
      console.log('ERROR en querys.GetIdFromAccount:',err, 'account', account);
      deferred.reject(err);
    }else {
      deferred.resolve(doc);
    }
  })
  return deferred.promise;
}
export const ExitsAccount=(accountName)=>{
  let deferred = Q.defer();
  TwitterAccountModel.findOne({name: accountName}, '',(err, doc)=>{
    if(!err)  {
      deferred.resolve(doc);
    }else{
      console.log('ERR en querys.ExistsTweet: ',err);
      deferred.reject(err);
    }
  });
  return deferred.promise;
}
