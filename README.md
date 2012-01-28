# CooQuery 3.2
Create, edit and manage cookies with JavaScript.

# Usage

1. Set a new cookie:

        cookie.set("my_cookie" , "hello");
        cookie.set("my_second_cookie", "hi", {
            duration : 2 // days
        });

   Options are:

        {
            duration : 1, // in days
            path : '',
            domain : '',
            secure : false
        }

2. Read the value of a cookie:

        cookie.get("my_cookie"); // returns "hello"
        cookie.get("noecziste"); // returns undefined

3. Delete a cookie:

        cookie.del("my_cookie");

*That is it. :)*

## Running tests

First, you need [node.js](http://nodejs.org/) and [npm](http://npmjs.org/) installed.
Then...

    git clone git://github.com/lenon/CooQuery.git
    cd CooQuery
    npm install jasmine-node -g
    jasmine-node spec/
