export type user = {
    id: number,
    name: string,
    email:string,
    nickname:string
}

export type task = {
    id: number,
    title: string,
    description: string,
    limitDate: string,
    creatorUserId: number

}