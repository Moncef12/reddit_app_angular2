import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { TopicService } from '../shared/topic.service';


@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {
  topic: string;
  selectedTopic: string;
  topics: string[];

  @Output() onTopicSelected = new EventEmitter<string>();

  constructor(private topicService: TopicService) {
  }

  ngOnInit() {
    this.topics = this.topicService.getTopics();
  }

  addTopic() {
    if (this.topic) {
      this.topics.push(this.topic);
      this.topicService.addTopic(this.topic);
    }
    this.topic = '';
  }

  selectTopic(topic) {
    this.selectedTopic = topic;
    this.onTopicSelected.emit(topic);
  }
}
