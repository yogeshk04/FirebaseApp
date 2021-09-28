import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Post } from 'src/app/models/post';
import { BlogService } from 'src/app/services/blog.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit, OnDestroy {
  blogPost: Post[] = [];
  private unsubscribe$ = new Subject<void>();
  config: any;
  pageSizeOptions = [];

  constructor(
    private blogService: BlogService,
    private snackBarService: SnackbarService,
    private route: ActivatedRoute) {
    this.pageSizeOptions = [2, 4, 6];
    const pageSize = localStorage.getItem('pageSize');
    this.config = {
      currentPage: 1,
      itemsPerPage: pageSize ? +pageSize : this.pageSizeOptions[0]
    };
  }

  ngOnInit(): void {
    this.getBlogPosts();
    this.route.params.subscribe(
      params => {
        this.config.currentPage = +params['pagenum'];
        this.getBlogPosts();
      }
    );
  }

  getBlogPosts() {
    this.blogService.getAllPosts()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(result => {
        this.blogPost = result;
      });
  }

  delete(postId: string) {
    if (confirm('Do you want to delete the post?')) {
      this.blogService.deletePost(postId).then(
        () => {
          this.snackBarService.showSnackbar('Blog post deleted successfully');
        }
      );
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
