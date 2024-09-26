import {expect, test} from '@playwright/test';
import {ContriesResponses} from './../../responses/contries-responses'

test("POST: get contries length", async ({request}) => {
    const contriesResponses = new ContriesResponses(request);
    const response = await contriesResponses.postContrie();
    const body = await response.json();

    expect(body.data.countries).toHaveLength(250);
    expect(response.status()).toBe(200);
})

test("POST: get contrie Ukraine", async ({request}) => {
    const contriesResponses = new ContriesResponses(request);
    const response = await contriesResponses.postContrieUA();
    const body = await response.json();

    expect(body.data.countries[0].name).toBe("Ukraine");
    expect(response.status()).toBe(200);
})