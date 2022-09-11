export type user = {
    id: number,
    name: string,
    email:string,
    nickname:string
}
export enum STATUS {
  TO_DO = "to do",
  DOING = "doing",
  DONE = "done"
}
export type task = {
    id: number,
    title: string,
    description: string,
    limitDate: string,
    creatorUserId: number

}