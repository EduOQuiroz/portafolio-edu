const express = require('express');
const PORT = process.env.PORT || 3003
const app = express();

const path = require('path');
if(process.env.NODE_ENV !== 'production'){
  const publicPath = path.resolve(__dirname, '../client/dist');
  app.use(express.static(publicPath));
}else{
  const publicPath = path.resolve(__dirname, '../client/dist');
  app.use(express.static(publicPath));
}


if(process.env.NODE_ENV !== 'production'){
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
  })
}else{
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
    console.log(path.resolve(__dirname, '../client/dist/index.html'))
  })
}


app.listen(PORT, ()=> console.log(`esta vida en el puerto ${PORT}`), console.log(path.resolve(__dirname, '../client/public/index.html'))), console.log(path.resolve(__dirname, '../client/dist/index.html'))
