$(function () {
    //Step 3: Add listener to click event on the painting thumbnails. (Bony)

    $('div img').on('click', function (e) {
    var alt = $(this).attr('alt');
    var title=$(this).attr('title');
    var src = $(this).attr('src');

    //Step 3: Replace the folder name small with medium in src attribute. (Bony)

    var newsrc = src.replace("small","medium");
    $('figure img').attr("src",newsrc);
    });
});
