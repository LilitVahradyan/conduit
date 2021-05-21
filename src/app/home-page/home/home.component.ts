import { Component, OnInit } from '@angular/core';

import { FeedsService } from '../services/feeds.service';
import { TagsService } from '../services/tags.service';
import { FeedModel } from '../models/feeds.model';
import { TagsModel } from '../models/tags.model';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tagsList!: TagsModel[];
  feedsList!: FeedModel[];

  feedsCount: number = 0;
  itemsPerPage: number =  10;
  pageNumber: number = 1;

  constructor(
    private tagsSrv: TagsService,
    private feedsSrv: FeedsService
  ) { }

  ngOnInit() {
    this.getTags();
    this.getFeeds();
  
  }

  getTags(){
    this.tagsSrv.getTags()
      .subscribe(
        (response) => {
          this.tagsList = response.tags
        }
      )
  }
  
  getFeeds(){
    this.feedsSrv.getFeeds({
      limit: this.itemsPerPage,
      offset: (this.pageNumber * this.itemsPerPage) - this.itemsPerPage
    })
    .subscribe(
      (response) => {
        this.feedsList = response.articles;
        this.feedsCount = response.articlesCount;
        
      },
      (error) => {
        console.log(error);
      }
    )
  }

  onPageChanged(event: PageChangedEvent){
    this.pageNumber = event.page;
    this.getFeeds()   
  }
}
