export default class DataStruc {
  constructor(title, completed) {
    this.title = title;
    this.completed = completed || false;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
