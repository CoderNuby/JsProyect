$(document).ready(function(){
    $('#slide').bxSlider({
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        slideWidth: 600
    });

    var posts = [
        {
            title: "Lorem",
            date: getCurrentDate(),
            content: 
            `
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus labore a distinctio eos expedita dolorem minus ad earum,
            corrupti voluptatibus pariatur iusto,
            consectetur cum nam sit minima inventore molestias veritatis?
            `
        },
        {
            title: "Lorem",
            date: getCurrentDate(),
            content: 
            `
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus labore a distinctio eos expedita dolorem minus ad earum,
            corrupti voluptatibus pariatur iusto,
            consectetur cum nam sit minima inventore molestias veritatis?
            `
        },
        {
            title: "Lorem",
            date: getCurrentDate(),
            content: 
            `
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus labore a distinctio eos expedita dolorem minus ad earum,
            corrupti voluptatibus pariatur iusto,
            consectetur cum nam sit minima inventore molestias veritatis?
            `
        },
        {
            title: "Lorem",
            date: getCurrentDate(),
            content: 
            `
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus labore a distinctio eos expedita dolorem minus ad earum,
            corrupti voluptatibus pariatur iusto,
            consectetur cum nam sit minima inventore molestias veritatis?
            `
        },
        {
            title: "Lorem",
            date: getCurrentDate(),
            content: 
            `
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus labore a distinctio eos expedita dolorem minus ad earum,
            corrupti voluptatibus pariatur iusto,
            consectetur cum nam sit minima inventore molestias veritatis?
            `
        },
        {
            title: "Lorem",
            date: getCurrentDate(),
            content: 
            `
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus labore a distinctio eos expedita dolorem minus ad earum,
            corrupti voluptatibus pariatur iusto,
            consectetur cum nam sit minima inventore molestias veritatis?
            `
        },
        {
            title: "Lorem",
            date: getCurrentDate(),
            content: 
            `
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus labore a distinctio eos expedita dolorem minus ad earum,
            corrupti voluptatibus pariatur iusto,
            consectetur cum nam sit minima inventore molestias veritatis?
            `
        },
        {
            title: "Lorem",
            date: getCurrentDate(),
            content: 
            `
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus labore a distinctio eos expedita dolorem minus ad earum,
            corrupti voluptatibus pariatur iusto,
            consectetur cum nam sit minima inventore molestias veritatis?
            `
        },
    ];

    posts.forEach((post) => {
        $("#posts").append(getPostHtml(post));
    });
});

function getPostHtml(post){
    var postHtml = `
    <article class="post">
        <h2>${post.title}</h2>
        <span class="date">${post.date}</span>
        <p>${post.content}</p>
        <a href="#" class="btn">Learn More</a>
    </article>
    `;
    return postHtml;
}

function getCurrentDate() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = currentDate.getFullYear();

    return `${day}/${month}/${year}`;
}