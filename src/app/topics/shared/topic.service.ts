import { Injectable } from '@angular/core';

@Injectable()
export class TopicService {

  topics: string[];

  addTopic(topic) {
    this.topics = this.getTopics();
    this.topics.push(topic);
    localStorage.setItem('topics', JSON.stringify(this.topics));
  }

  getTopics(): string[] {
    return JSON.parse(localStorage.getItem('topics')) || [];
  }

}
