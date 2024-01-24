const express = require('express')
const app = express()
const port = 3001

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
app.get('/contact', contact)
app.get('/blog', blog)
app.post('/blog', postBlog) // post-blog
app.get('/testimonial', testimonial);
app.get('/blog-detail/:id', blogDetail)

// array var data
const dataBlog = []

function home(req, res) {
    res.render('index')
}

function contact(req, res) {
    res.render('contact')
}

function blog(req, res) {
    res.render('blog', {dataBlog})
}

function postBlog(req, res) {
    const { projectName, description } = req.body

    dataBlog.push({ projectName, description })

    console.log(dataBlog)
    res.redirect('/blog')
}
function testimonial(req, res) {
    res.render('testimonial')
}

function blogDetail(req, res) {
    res.render('blog-detail')
}

app.listen(port, () => {
  console.log(`Server berjalan bang di ${port}`)
})