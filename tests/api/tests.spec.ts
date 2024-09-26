import {expect, test} from '@playwright/test';

test.only("API some test", async ({request}) => {
    const response = await request.post(
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

    const body = await response.json();
    expect(body.data.countries).toHaveLength(250);
    console.log(body);
})