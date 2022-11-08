export class Friend {
  constructor(private user_id: string, private friend_id: string) {}

  getUserId() {
    return this.user_id;
  }

  getFriendId() {
    return this.friend_id;
  }
}
