export class Post {
    postId: string | undefined;
    title: string | undefined;
    content: string;
    author: string | undefined;
    createdDate: any;
    
    constructor() {
        this.content = '';
    }
}