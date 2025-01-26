import conf from '../conf/conf';
import { Client, Account, ID } from "appwrite";

export class AuthService {

    client = new Client();
    account;

    constructor() {                 // create client only when object of class is created because constructor is called automatically
        this.client
        .setEndpoint('conf.appwriteUrl')
        .setProject('conf.appwriteProjectId');

        this.account = new Account(this.client);
    }

    async CreateAccount({email,password,name}){

        try{

         const userAccount =    await this.account.create(ID.unique(), email, password, name);

         if(userAccount){
            // call another method i.e login directly
            return this.login({email,password});
         }
         else{
            return userAccount;
         }
        }
        catch(error){
            throw error;
        }
    }


    async login({email,password}){

        try{
           return await this.account.createEmailPasswordSession(email,password);
        }
        catch(error){
            throw error;
        }

    }

    async getCurrentUser(){

        try{
            return await this.account.get();
        }
        catch(error){
            throw error;
        }
        return null;
    }

    async logout(){

        try{
            await this.account.deleteSessions();
        }
        catch(error){
            throw error;
        }
    }

}

const authService = new AuthService();      // creating object of class AuthService

export default authService;      // exporting the object

