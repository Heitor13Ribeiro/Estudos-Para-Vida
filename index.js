const express = require('express');

const app = express(); 

app.get('/', (Request, Response)=>{
    return Response.send('Hello World')
});

app.listen(3333);

