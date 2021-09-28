import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Post } from 'src/app/models/post';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {

  postData: Post = new Post();
  postId;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService) {
      if (this.route.snapshot.params['id']) {
        this.postId = this.route.snapshot.paramMap.get('id');
      }
     }

  ngOnInit(): void {
    this.blogService.getPostbyId(this.postId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (result: Post) => {
          this.postData = result;
        }
      );
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
