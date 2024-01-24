const testimonials = [
    {
        author: "Muhammad noorwahyu",
        content: "Keren banggg",
        image: "https://media.hitekno.com/thumbs/2023/01/18/61227-sosok-di-balik-meme-giga-chad/730x480-img-61227-sosok-di-balik-meme-giga-chad.jpg",
        rating: 3
    },
    {
        author: "Fyodor Izydor",
        content: "Kata mamah gaboleh gitu, tapi sy suka",
        image: "https://miro.medium.com/v2/resize:fit:720/1*LAHifsmUAzJp1v5RpAxRsQ.jpeg",
        rating: 4,
    },
    {
        author: "Sintario Satya",
        content: "Ayo Kita foto bangg",
        image: "https://media.hitekno.com/thumbs/2023/01/18/91927-sosok-di-balik-meme-giga-chad/730x480-img-91927-sosok-di-balik-meme-giga-chad.jpg",
        rating: 3,
    },
    {
        author: "Dimskuy",
        content: "Mantap bro",
        image: "https://netstorage-tuko.akamaized.net/images/f238812a99935fdf.jpeg?imwidth=900",
        rating: 1
    },
    {
        author: "Ronan Richot",
        content: "Kata mamah jangan pulang sore bang",
        image: "https://dudeproducts.com/cdn/shop/articles/gigachad_1024x1024.jpg?v=1667928905",
        rating: 2
    }
]

function allTestimonial() {
    const testimonialHTML = testimonials.map((value) => {
        return `<div class="testimonial">
                <img src="${value.image}" class="profile-testimonial" />
                <p class="quote">"${value.content}"</p>
                <p class="author">- ${value.author}</p>
            </div>`
    })
    
    document.getElementById("testimonials").innerHTML = testimonialHTML.join(" ")
}

function filterTestimonial(rating) {
    const filteredTestimonial = testimonials.filter((value) => value.rating === rating)

    const filteredTestimonialHTML = filteredTestimonial.map((value) => {
        return `<div class="testimonial">
                <img src="${value.image}" class="profile-testimonial" />
                <p class="quote">"${value.content}"</p>
                <p class="author">- ${value.author}</p>
            </div>`
    })

    document.getElementById("testimonials").innerHTML = filteredTestimonialHTML.join(" ")
}

allTestimonial()
