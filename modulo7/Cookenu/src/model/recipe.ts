export class Recipe {
    constructor(
        private id:string,
        private title: string,
        private description: string,
        private createdAt: Date,
        private userId: string
    ){}

    getId() {
        return this.id;
      }
    
      getTitle(){
        return this.title
      }
    
      getDescription(){
        return this.description
      }
    
      getCreatedeAt(){
        return this.createdAt
      }

      getUserId(){
        return this.userId
      }


}