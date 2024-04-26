$(document).ready(function() {

    var relativePathSplited = $("#theme-styles").attr("href").split("/");
    var relativePath = "";
    relativePathSplited.forEach((element, index) => {
        if(index < (relativePathSplited.length - 1)){
            relativePath += element + "/";
        }
    });

    var pathTheme = "";

    $("#theme1").on('click', function(){
        pathTheme = relativePath + "theme1.css";
        $("#theme-styles").attr("href", pathTheme);
    });

    $("#theme2").on('click', function(){
        pathTheme = relativePath + "theme2.css";
        $("#theme-styles").attr("href", pathTheme);
    });

    $("#theme3").on('click', function(){
        pathTheme = relativePath + "theme3.css";
        $("#theme-styles").attr("href", pathTheme);
    });

    $("#go-up-button").on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
});

function getHtmlTemplate(element){
    var htmlData = 
    `
    <h3>${element.title}</h3>
    <div>
        <p>
        ${element.data}
        </p>
    </div>
    `;

    return htmlData;
}