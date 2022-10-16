import React from "react";
//Import books component so it can be imbedded
import { Books } from "./books";

//Inherite from React.Component
export class Read extends React.Component{

//State holds data related to component
//Create books array and fill with book objects (json)
state = {
    books:[
        {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg","status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg","status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        },
        {
        "title": "Getting MEAN with Mongo, Express, Angular, and Node",
        "isbn": "1617292036",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg","status": "MEAP",
        "authors": ["Simon Holmes"],
        "categories": []
    }
    ]
            
}
    render(){
        return( 
            <div>
                <h3>Hello from my Read Component</h3>
                {/* Imbed books.js component in read.js component */}
                {/* Taken data from state */}
                <Books books={this.state.books}></Books>
            </div>
        );
    }    
}