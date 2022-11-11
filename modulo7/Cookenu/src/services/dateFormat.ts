export class DateFormat {
  public sendDate = () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);

    return today;
  };

  public getDate = (date:Date) => {
    const today = new Date(date);
   const dateFormat = today.toLocaleDateString('en-US')
   return dateFormat
  }
}
