// document.addEventListener("DOMContentLoaded", () => {
//     let paragraphs = document.querySelectorAll("p")
//     if (paragraphs) {
//         paragraphs.forEach(p => {
//             p.onclick = function() {
//                 p.remove();
//             }
//         })
//     }
// })


// $("")


$(document).ready(function() {
    // $("p").click(function() {
    //     $(this).hide();
    //     let p = document.querySelector("p");
    //     $(p).show()
    // });

    $(".btn").click(function() {
        // $(".box").css({ 'transform': 'rotate(45deg)' });
        // $(".box").animate({
        //     left: '250px',
        //     opacity: '0.5',
        //     height: '150px',
        //     width: '150px'
        // });

        $(".box").slideToggle(5000);
    })

    $(".stop").click(function() {
        $(".box").stop();
    })
});