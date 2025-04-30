import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {XxxPost} from "./xxx-post.types";

@Injectable({
    providedIn: 'root'
})
export class XxxPostDataService {
    private http: HttpClient = inject(HttpClient);

    getUserPosts(userId: number): Observable<XxxPost[]> {
        const postUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
        return this.http.get<XxxPost[]>(postUrl);
    }

    updatePost(post: XxxPost): Observable<XxxPost> {
        const postUrl = `https://jsonplaceholder.typicode.com/posts/${post.id}`;
        const body = JSON.stringify(post);
        return this.http.put<XxxPost>(postUrl, body);
    }
}
