import {APIRequestContext} from '@playwright/test';

export class ContriesResponses{
    readonly request: APIRequestContext;

    constructor(request: APIRequestContext){
        this.request = request;
    }

    async postContrie() {
        return await this.request.post(
            "https://countries.trevorblades.com/",
            {
                data:{
                    query: `           
                    {
                        countries {
                          code
                          name
                          phone
                          emoji
                          languages {
                            name
                          }
                        }
                      }                
                    `,
                }
            }
        ) 
    }
}