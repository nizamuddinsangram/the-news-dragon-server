const express = require('express');
const app =express();
// const cors = require('cors')
const cors=require('cors')

const port =process.env.PORT || 5000;
  
const struggle=require('./sangram/struggle.json')
//  const categories=require('./data/categories.json')

  //  app.use(cors)
  app.use(cors())
  app.get('/', (req, res) => {
    res.send('Dragon is jibon sas allah save me')
  })
    // app.get('/categories',(req,res)=>{
    //   res.send(categories)  ;
    // })
    app.get('/struggle',(req,res)=>{
      res.send(struggle)
    })
  app.listen(port, () => { console.log(`Dragon is running on port ${port}`)
  })