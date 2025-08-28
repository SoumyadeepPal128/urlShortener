import conf from '../conf/conf.js';
import { Client, ID, Databases, Permission, Role, Storage, Query, Account } from "appwrite";


export class Service {
    
    client = new Client();
    databases;
    bucket;
    account;
    constructor() {
        console.log(conf);
        
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
        this.account = new Account(this.client);
        

    }

    async deleteUrl(code) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                code

            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteUrl :: error", error);
            return false
        }
    }

    async createUrl({ userId,status = "active", clicks = 0, url, code }) {
    try {
        
        
        
        const user = await this.account.get(); 
        console.log(user);
        // get current logged-in user
        const userId = user.$id;
        console.log("Creating URL for user:", userId);

        return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            ID.unique(),
            {
                userId,
                status,
                clicks,
                url,
                code
            },

        );
    } catch (error) {
        console.log("Appwrite service :: createUrl :: error", error.message);
        return false;
    }
}



    async getUrls(queries = []) {
        try {
            const user = await this.account.get();
            const userId = user.$id;
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [
                    ...queries,
                    Query.equal("status", "active"), Query.equal("userId", userId)
                ]


            )
        } catch (error) {
            console.log("Appwrite serive :: getUrls :: error", error);
            return false
        }
    }

    async getUrl(code, queries = []) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [
                    ...queries,
                    Query.equal("status", "active"), Query.equal("code", code)
                ]


            )
        } catch (error) {
            console.log("Appwrite serive :: getUrl :: error", error);
            return false
        }
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
                [Permission.read(Role.any())] // optional: restrict write to current user
            );
        } catch (error) {
            console.log(`Appwrite service :: uploadFile :: error ${error.message}`);
            return false;
        }
    }


}

const appwriteService = new Service();

export default appwriteService;
