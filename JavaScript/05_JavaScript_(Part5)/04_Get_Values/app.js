/*
************** Get Values *************************
==> means how we can access values of our Object Literals

const student = {
    name: 'shradha',
    mark: 94.4
}
console.log(student.name)       // shradha
console.log(student['name'])    // shradha

*/

const student = {
    name: 'shradha',
    mark: 94.4
}
console.log(student.name)           // shradha     // REMEMBER SYNTAX (known as dot notation(static) syntax)
console.log(student['name'])        // shradha     // REMEMBER SYNTAX (known as Bracket notation(Dynamic) syntax)

// ANOTHER EXAMPLE: 

const post = {
    username: "@shradhakhapra",
    content: "This is my #firstPost",
    likes: 150,
    reposts: 5,
    tags: ['@apnacollege', '@delta']
}
console.log(post);                  // {username: '@shradhakhapra', content: 'This is my #firstPost', likes: 150, reposts: 5, tags: Array(2)}
console.log(post.username);         // @shradhakhapra
console.log(post['likes']);         // 150
console.log(post.content);          // This is my #firstPost
console.log(post['reposts'])        // 5
console.log(post.tags);             // (2) ['@apnacollege', '@delta']
console.log(post.tags[0]);          // @apnacollege


    //...something different way to access
let prop = 'reposts';
console.log(post[prop])  // 5    // => console.log(post['reposts']) => 5        
//... this above way to access Object is very important, known as bracket notation(dynamic) syntax