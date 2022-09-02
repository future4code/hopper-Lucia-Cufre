export type data = {
    id: number,
    name: string,
    email:string,
    type:USERTYPE,
    age:number
}

export enum USERTYPE {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}
export const users:data[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: USERTYPE.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: USERTYPE.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type:  USERTYPE.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type:  USERTYPE.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: USERTYPE.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: USERTYPE.ADMIN,
        age: 60
    }
]