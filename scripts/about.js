$(document).ready(function() {
    $(function() {
        $( "#accordion" ).accordion();
    });

    var aboutMeInfo = [
        {
            title: "Angular developer",
            data: 
            `
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus labore a distinctio eos expedita dolorem minus ad earum,
            corrupti voluptatibus pariatur iusto,
            consectetur cum nam sit minima inventore molestias veritatis?
            `
        },
        {
            title: "React developer",
            data: 
            `
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus labore a distinctio eos expedita dolorem minus ad earum,
            corrupti voluptatibus pariatur iusto,
            consectetur cum nam sit minima inventore molestias veritatis?
            `
        },
        {
            title: "ASP.NET developer",
            data: 
            `
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus labore a distinctio eos expedita dolorem minus ad earum,
            corrupti voluptatibus pariatur iusto,
            consectetur cum nam sit minima inventore molestias veritatis?
            `
        },
        {
            title: "Data scence",
            data: 
            `
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus labore a distinctio eos expedita dolorem minus ad earum,
            corrupti voluptatibus pariatur iusto,
            consectetur cum nam sit minima inventore molestias veritatis?
            `
        },
        {
            title: "Flask API developer",
            data: 
            `
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus labore a distinctio eos expedita dolorem minus ad earum,
            corrupti voluptatibus pariatur iusto,
            consectetur cum nam sit minima inventore molestias veritatis?
            `
        }
    ];

    aboutMeInfo.forEach((element) => {
        $("#accordion").append(getHtmlTemplate(element));
    });
});