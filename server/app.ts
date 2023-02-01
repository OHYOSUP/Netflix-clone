import express from 'express';

const app = express()

app.get('/', function (req, res) {
  res.sendFile('../build/index.html')
})

app.listen(3000, ()=>{
  console.log('server is running')
});