import { Page } from "@playwright/test";


let x : number[] = [2,3,3,2.3,-423];

class TestClass {
    //readonly page: Page;
    readonly title: string;
    readonly number: number;
    readonly boolean: boolean;
    readonly boolean1: boolean;
    
    constructor() {
        this.title = "Test Title";
        this.number = 4.2;
        this.boolean = false;
        this.boolean1 = true;
    };
}
const testClass = new TestClass();

const testArr = [testClass.number, testClass.boolean, testClass.boolean1, testClass.title]


//console.log(testArr);


const arr: (boolean | string)[] = [
    true, false, false, true, false, true, true, true, false, false,
    true, false, false, true, false, true, true, true, false, false,
    true, false, false, true, false, true, true, true, false, false,
    true, false, false, true, false, true, true, true, false, false,
    true, false, false, true, false, true, true, true, false, false,
    true, false, false, true, false, true, true, true, false, false,
    true, false, false, true, false, true, true, true, false, false,
    true, false, false, true, false, true, true, true, false, false,
    true, false, false, true
];

for(let i = 0; i < arr.length; i++) {
    if(arr[i] === true){
        arr[i] = "базар";
    }else{ arr[i] = "п*зди*"; }
}

console.log(arr);