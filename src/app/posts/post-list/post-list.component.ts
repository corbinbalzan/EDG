import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';
@Component({
    selector:'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: [ './post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy{
    // posts = [
    //     {title: 'First Post', content: 'This is teh first posts content'},
    //     {title: 'Second Post', content: 'This is teh second posts content'},
    //     {title: 'Third Post', content: 'This is teh third posts content'}
    // ]
    posts: Post[] = [];
    private postsSub: Subscription;
    public isLoading = false;

    constructor(public postsService: PostsService) {
    }

    ngOnInit(){
        this.isLoading = true;
        this.postsService.getPosts();
        this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
        this.posts = posts;
        this.isLoading = false;
        });
    }

    onDelete(postId: string){
        this.postsService.deletePost(postId);
    }

    ngOnDestroy(){
        this.postsSub.unsubscribe();
    }
}