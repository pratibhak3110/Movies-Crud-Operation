
import { of } from 'rxjs/internal/observable/of';
import { Post } from './post';

export class PostmockService {

    create(post: Post){
     return of({});
    }  
}
