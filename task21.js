"use strict";
21.; //	They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publicationYear: 1960
    },
];
console.log(" Books:");
books.forEach(book => {
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Publication Year: ${book.publicationYear}`);
    console.log();
});
