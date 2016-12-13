import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Post } from './post.model';

import {Observable} from 'rxjs/Observable';
import '../../rxjs-operators';


@Injectable()
export class PostService {

  private redditBaseUrl = '//www.reddit.com/r/';

  constructor(private http: Http) {

  }

  getPosts(topic): Observable<Post[]> {
    let url = this.redditBaseUrl + topic + '.json';
    return this.http.get(url)
               .map(this.extractData)
               .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data.children.map(
      item => {
        return {
          title: item.data.title,
          score: item.data.score,
          thumbnail: item.data.thumbnail,
          url: item.data.url
        };
      }
    ) || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}