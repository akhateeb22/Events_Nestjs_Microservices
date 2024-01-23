export class EventEntity {
  id: string;
  name: string;
  description: string;
  createdAt: Date;

  constructor({ event }) {
    this.id = event._id;
    this.name = event.name;
    this.description = event.description;
    this.createdAt = event.createdAt;
  }
}
