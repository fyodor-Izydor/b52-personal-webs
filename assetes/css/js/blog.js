const blogs = []

function addBlog(e) {
    e.preventDefault()

    const title = document.getElementById("input-blog-title").value
    const content = document.getElementById("input-blog-content").value
    const image = document.getElementById("input-blog-image").files

    const imageLink = URL.createObjectURL(image[0])

    const blog = {
        title,
        content,
        image: imageLink
    }

    blogs.push(blog)
    renderBlog()

    console.log("blogs", blogs)
}

function renderBlog() {
    let html = ''

    for (let index = 0; index < blogs.length; index++) {
        html += `
        <div class="blog-list-item">
            <div class="blog-image">
                <img src="${blogs[index].image}" alt="" />
            </div>
            <div class="blog-content">
                <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-post">Delete Post</button>
                </div>
                <h1>
                    <a href="blog-detail.html" target="_blank">${blogs[index].title}</a>
                </h1>
                <div class="detail-blog-content">
                    12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
                </div>
                <p>
                  ${blogs[index].content}
                </p>
            </div>
        </div>
`
    }

    document.getElementById("contents").innerHTML = html
}

renderBlog()