import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopicListComponent } from './topics/topic-list/topic-list.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostSearchComponent } from './posts/post-search/post-search.component';
import { PostComponent } from './posts/post/post.component';


import { PostService } from './posts/shared/post.service';
import { TopicService } from './topics/shared/topic.service';

@NgModule({
  declarations: [
    AppComponent,
    TopicListComponent,
    PostListComponent,
    PostSearchComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PostService, TopicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
