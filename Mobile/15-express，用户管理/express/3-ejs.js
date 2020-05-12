var ejs = require('ejs'),
    people = ['geddy', 'neil', 'alex'],
    html = ejs.render(`
        <!doctype html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport"
                      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Document</title>
            </head>
            <body>
            <ul>
                <li><%= people[0] %></li>
                <li><%= people[1] %></li>
                <li><%= people[2] %></li>
            </ul>
            </body>
            </html>
    `, {people: people});


console.log(html);