export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string
  ) {}

  getId() {
    return this.id;
  }

  getName(){
    return this.name
  }

  getEmail(){
    return this.email
  }

  getPassword(){
    return this.password
  }
}

export class FollowUsers {
  constructor(
    private id: string,
    private userId : string,
    private userToFollowId:string
  ){}

  getId(){
    return this.id
  }

  gerUserId(){
    return this.userId
  }

  getUserToFollowId(){
    return this.userToFollowId
  }
}
