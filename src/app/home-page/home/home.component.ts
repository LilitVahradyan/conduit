import { Component, OnInit } from '@angular/core';

import { FeedsService } from '../services/feeds.service';
import { TagsService } from '../services/tags.service';
import { FeedModel } from '../models/feeds.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tagsList: any;
  feedsList!: FeedModel[];

  constructor(
    private tagsSrv: TagsService,
    private feedsSrv: FeedsService
  ) { }

  ngOnInit() {
    this.tagsSrv.getTags()
      .subscribe(
        (response) => {
          Object.values(response).forEach((tag) => this.tagsList = tag);
        }
      )

      this.feedsSrv.getFeeds()
        .subscribe(
          (response) => {
            console.log(response);
            
            Object.values(response).forEach((feed) => {
              if(Array.isArray(feed)){
                this.feedsList = feed;
                console.log(this.feedsList)
              }
            })
          },
          (error) => {
            console.log(error);
            
          }
        )

  }

}
