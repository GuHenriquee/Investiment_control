export interface User {
    name: string;
    email: string;
    password: string;
}

export interface Token {
    access_token: string;
    token_type: string;
}

export interface Login {
    email: string;
    password: string;
}

export interface Operation {
    operationType: string;
    amount: number;
}

export interface ReceveOperation {
    operationType: string;
    amount: number;
    previousAmount: number;
    newValue: number;
}