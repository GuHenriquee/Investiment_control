export interface User {
    name: string;
    email: string;
    password: string;
}

export interface Operation {
    operationType: string,
    amount: number,
    previousAmount:number
}

export interface ReceveOperation {
    operationType: string,
    amount: number,
    previousAmount:number,
    newValue:number
}
