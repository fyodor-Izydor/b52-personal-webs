const express = require('express')
const dbPool = require('./src/connection/index')
const app = express()
const port = 3000

// config ke sequalize
const { development } = require('./src/config/config.json')
const { Sequelize, QueryTypes } = require('sequelize')
const { types } = require('pg')
const sequelizePool = new Sequelize(development) 
const Blog = require('./src/models/project')

// hbs
app.set('view engine', 'hbs')
app.set('views', 'src/views')

app.use(express.urlencoded({ extended:false }))
app.use('/assets', express.static('src/assets'))

app.get('/', (req, res) => {
  res.render('index')
})

// app.get('/contact', (req, res) => {
//   res.render('contact')
// }) = bisa pake ini, atauu

app.get('/', home)
app.get('/', indexBlog)
app.get('/contact', contact)
app.get('/blog', blog)
app.post('/blog', postBlog) // post-blog
app.get('/testimonial', testimonial);
app.get('/blog-detail/:id', blogDetail)
app.get('/edit-blog/:id', editBlog)
app.get('/login', login)
app.get('/register', register)
app.get('/delete/:id', delBlog)

// array var data
const dataBlog = []

console.log(sequelizePool);

// function home(req, res) {
//     res.render('index')
// }

// function home(req, res) {
//     dbPool.connect((err, client, done) => {
//         if(err) throw err

//         client.query("SELECT * FROM tb_projects", (err, result) => {
//             done()
//             if(err) throw err

//             res.status(200).json(result)
//         })
//     })
// }

// dengan sequelize
async function home(req, res) {
    // try {
    //     const query = await sequelizePool.query("SELECT * FROM projects", { type: QueryTypes.SELECT })
    //     console.log(query)
    // } catch(error) {
    //     error
    // }
    
    // res.render('blog', {dataBlog})
    try {
        const query = await sequelizePool.query("SELECT * FROM projects", { type: QueryTypes.SELECT })
        const dataBlog = query.map(res => ({
            ...res,
            author: 'yayuq',
            image: 'https://img.freepik.com/free-photo/high-angle-people-applauding-work_23-2149636269.jpg?w=996&t=st=1706112607~exp=1706113207~hmac=edc830e120558fc743fa2e7989f3fe580e705cc717a3fed2d09f37c5ea304a1a'

        }))
        // console.log(query)
        res.render('/', { dataBlog })
    } catch(error) {
        error
    }
}

function contact(req, res) {
    res.render('contact')
}

async function blog(req, res) {
    // res.render('blog', {dataBlog})
    try {
        const query = await sequelizePool.query("SELECT * FROM projects", { type: QueryTypes.SELECT })
        const dataBlog = query.map(res => ({
            ...res,
            author: 'yayuq',
            image: 'https://img.freepik.com/free-photo/high-angle-people-applauding-work_23-2149636269.jpg?w=996&t=st=1706112607~exp=1706113207~hmac=edc830e120558fc743fa2e7989f3fe580e705cc717a3fed2d09f37c5ea304a1a'

        }))
        // console.log(query)
        res.render('blog', { dataBlog })
    } catch(error) {
        error
    }
}

async function indexBlog(req, res) {
    // res.render('blog', {dataBlog})
    try {
        const query = await sequelizePool.query("SELECT * FROM projects", { type: QueryTypes.SELECT })
        const dataBlog = query.map(res => ({
            ...res,
            author: 'yayuq',
            image: 'https://img.freepik.com/free-photo/high-angle-people-applauding-work_23-2149636269.jpg?w=996&t=st=1706112607~exp=1706113207~hmac=edc830e120558fc743fa2e7989f3fe580e705cc717a3fed2d09f37c5ea304a1a'

        }))
        // console.log(query)
        res.render('/', { dataBlog })
    } catch(error) {
        error
    }
}

async function postBlog(req, res) {
    
    try {
        const { title, description } = req.body
        const query = await sequelizePool.query(`INSERT INTO projects (title, description, "createdAt", "updatedAt") VALUES ('${title}', '${description}', NOW(), NOW())`)
        console.log(query)
        // res.render('index')
        res.redirect('/blog')
    } catch(error) {
        error
    }
    // res.redirect('/blog')

    // dataBlog.push({ projectName, description })

    // console.log(dataBlog)
}
function testimonial(req, res) {
    res.render('testimonial')
}

function blogDetail(req, res) {
    res.render('blog-detail')
}

function login(req, res) {
    res.render('login')
}

async function editBlog(req, res) {
    // res.render("edit-blog")
    try {
        // const query = await sequelizePool.query("UPDATE projects SET", { type: QueryTypes.UPDATE })
        const query = await sequelizePool.query(`UPDATE projects SET tittle=${title}, description=${description}`)

        const dataBlog = query.map(res => ({
            ...res,
            author: 'yayuq',
            image: 'https://img.freepik.com/free-photo/high-angle-people-applauding-work_23-2149636269.jpg?w=996&t=st=1706112607~exp=1706113207~hmac=edc830e120558fc743fa2e7989f3fe580e705cc717a3fed2d09f37c5ea304a1a'

        }))
        // console.log(query)
        res.render('edit-blog', { dataBlog })
    } catch(error) {
        error
    }

}

async function delBlog(req, res) {
    try {
        const { id } = req.params
        await sequelizePool.query(`DELETE FROM projects WHERE id = ${id}`)

        res.redirect('/blog')
    } catch(error) {
        throw error
    }
}

function register(req, res) {
    res.render('register')
}

app.listen(port, () => {
  console.log(`Server berjalan bang di ${port}`)
})