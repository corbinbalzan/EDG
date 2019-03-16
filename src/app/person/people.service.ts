import { Person } from './person';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import {Subject} from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})

export class PeopleService{
    private people: Person[]= [];
    private peopleUpdated  = new Subject<Person[]>();

    constructor(private http: HttpClient, private router: Router){

    }

    getPeople(){
        this.http.get<{message: string, person: any}>('http://localhost:3000/api/posts')
        .pipe(map((postData) => {
            return postData.person.map(person => {
                return {
                   

                    name: person.name,
                    dateBirth: person.dateBirth,
                    age: person.age,
                    gender: person.gender,
                    countryOrigin: person.countryOrigin,
                    language: person.language,
                    countryResidence: person.countryResidence,
                    firstContactDate: person.f
                };
            });
        }))
        .subscribe(transformedPosts => {
            this.posts = transformedPosts;
            this.postsUpdated.next([...this.posts]);
        });
    }

    getPostUpdateListener(){
        return this.postsUpdated.asObservable();
    }

    getPost(id: string){
        return this.http.get<{_id: string, title: string, content: string}>('http://localhost:3000/api/posts/' + id);
    }

    addPerson(title: string, content: string){
        const post: Post = {id: null, title: title, content: content}
        this.http.post<{message: string, postId: string}>('http://localhost:3000/api/posts', post)
        .subscribe( responseData => {
            const id = responseData.postId
            post.id = id;
            this.posts.push(post);
            this.postsUpdated.next([...this.posts]);
            this.router.navigate(["/"]);
        });
    }

    
}