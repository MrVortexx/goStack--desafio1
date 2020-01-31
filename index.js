const express = require('express')
const app = express();
app.use(express.json())

let projects  = []
let id = 0;
let countReqs = 0;
app.use((req, res, next)=> {
    countReqs++;
    console.log(`request was query. This is the request number ${countReqs}`);
    next()
    
})
app.get('/projects', (req, res)=>{
    return res.json(projects)
})


app.post('/projects', (req, res)=> {
    const idProject =  id ++;
    const {name, title, task} = req.body; 
   
   projects.push({name, title, idProject, task})
  return  res.json(projects)
    
})
function checkIdExists(req, res, next){
    const {id} = req.params
    const project =  projects[id]
    if(!project){
        return res.json('user doenst exist')
    } 

  next()
   
    
  }

app.post('/projects/:id/task', checkIdExists,   (req,res)=> {
    const {task} = req.body
    const {id} = req.params
 

    projects[id].tasks = task

    res.json(projects[id])



})

app.get('/projects/:id', checkIdExists, (req,res)=>{
    const {id} = req.params
    const project = projects.filter(a=> a.idProject == id)
    return res.json(project)

})
app.put('/projects/:id', checkIdExists, (req,res)=>{
    const {id} = req.params
    const {name, title} = req.body
    const project = projects.filter(a=> a.idProject == id)
    project.map(a=> {a.title = title; a.name = name})
    return res.json(project)

})

app.delete('/projects/:id', checkIdExists,  (req,res)=>{
    const {id} = req.params
    projects.splice(id, 1)  
    
    return res.json(projects)

})
app.listen(8000, console.log('running on 8000 port')
)