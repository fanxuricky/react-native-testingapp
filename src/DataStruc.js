export default class DataStruc {

  guid = () => {
    var savetime = new Date();
    var v = savetime.getFullYear() +
            (savetime.getMonth()+1) +
            savetime.getDate() +
            savetime.getHours() +
            savetime.getMinutes() +
            savetime.getSeconds() +
            savetime.getMilliseconds();
    return v.toString();
  }

  constructor(title, completed) {
    this.id = this.guid();
    this.title = title;
    this.completed = completed || false;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }


}
