const blogs = [
    //     {
    //     title : "Title 1",
    //     content : "Content 1",
    //     image : "default.jpg",
    //     createdAt : new Date()
    // }
    ]
    
    function addBlog(e) {
        e.preventDefault()
    
        const title = document.getElementById("input-blog-title").value
        const content = document.getElementById("input-blog-content").value
        let image = document.getElementById("input-blog-image").files
        image = URL.createObjectURL(image[0])
        const node = document.getElementById("node").checked
        const react = document.getElementById("react").checked
        const figma = document.getElementById("figma").checked
        const mdb = document.getElementById("mdb").checked
        
        // let tech = []

        // for(let x = 0; x < technologies.length; x++) {
        //     if(technologies[x].checked) {
        //         tech.push(technologies[x].value)
        //     }
        // }
    
        const createdAt = new Date()
        const blog = {
            title,
            content,
            image,
            node,
            react,
            figma,
            mdb,
            createdAt
        }
    
        blogs.unshift(blog)
        renderBlog()
    
        console.log("blogs", blogs)
    }
    
    function renderBlog() {
        let html = ''
    
        for (let index = 0; index < blogs.length; index++) {
            let renderTechIcons = ''

            if (blogs[index].node) {
                renderTechIcons += `<i class="fa-brands fa-node-js"></i>`
            }
            if (blogs[index].react) {
                renderTechIcons += `<i class="fa-brands fa-react"></i>`
            }
            if (blogs[index].figma) {
                renderTechIcons += `<i class="fa-brands fa-figma"></i>`
            }

            if (blogs[index].mdb) {
                renderTechIcons += `<i class="fa-brands fa-mdb"></i>`
            }

            html += `
            <div class="blog-list-item">
                <div class="blog-image">
                    <img src="${blogs[index].image}" alt="" />
                </div>
                <br>
                
                <div class="blog-content">
                    <h1>
                        <a href="blog-detail.html" target="_blank">${blogs[index].title}</a>
                    </h1>
                    <div class="detail-blog-content">
                        ${getFullTime(blogs[index].createdAt)}
                    </div>
                    <p>
                      ${blogs[index].content}
                    </p>

                    <div>
                        ${renderTechIcons}
                    </div>

                    <div> 
                        <p>${getDistanceTime(blogs[index].createdAt)}</p>
                    </div>
                    <div class="btn-group">
                        <button class="btn-edit">Edit Post</button>
                        <button class="btn-post">Delete Post</button>
                    </div>
                </div>
            </div>
    `
        }
    
        document.getElementById("contents").innerHTML = html

        const links = document.querySelectorAll('.blog-content h1 a');
        links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Mencegah navigasi ke blog-detail.html
            window.open('blog-detail.html', '_blank'); // Membuka halaman baru (tab) dengan blog-detail.html
        });
    });
    }

    document.getElementById('input-blog-image').addEventListener('change', function(event) {
        previewImage(event.target.files[0]);
    });

    function previewImage(file) {
        if (file) {
            const reader = new FileReader();
    
            reader.onload = function(e) {
                const preview = document.getElementById('selected-image');
                preview.src = e.target.result;
                preview.style.display = 'block';
            };
    
            reader.readAsDataURL(file);
        }
    }
    
    function getFullTime(dates) { // formater tanggal
        let minutes = dates.getMinutes()
        let hours = dates.getHours()
        const date = dates.getDate()
        const month = dates.getMonth();
        const year = dates.getFullYear();
    
        if (hours < 10) {
            hours = "0" + hours
        }
    
        if (minutes < 10) {
            minutes = "0" + minutes
        }
    
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    
        return `${date} ${months[month]} ${year} ${hours}:${minutes} WIB`;
    }
    
    function getDistanceTime(timePost) {
        let timeNow = new Date()
    
        let distance = timeNow - timePost
    
        const seconds = Math.floor(distance / 1000)
        const minutes = Math.floor(distance / 1000 / 60)
        const hours = Math.floor(distance / 1000 / 60 / 60)
        const day = Math.floor(distance / 1000 / 60 / 60 / 24)
    
        if (seconds < 60) {
            return seconds + " seconds ago"
        } else if (minutes < 60) {
            return minutes + " minutes ago"
        } else if (hours < 60) {
            return hours + " hours ago"
        } else if (day < 24) {
            return day + " day ago"
        }
    }
    
    
    renderBlog()

    setInterval(() => {
        renderBlog()
    }, 1000)