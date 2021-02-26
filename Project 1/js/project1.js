$(function () {
    //Step 3: Add listener to click event on the painting thumbnails. (Bony)

    $('div img').on('click', function (e) {
    var alt = $(this).attr('alt');
    var title=$(this).attr('title');
    var src = $(this).attr('src');

    //Step 3: Replace the folder name small with medium in src attribute. (Bony)

    var newsrc = src.replace("small","medium");
    $('figure img').attr("src",newsrc);
    //Step 4: Change the figcaption to display title and artist information. (Amandeep)

    $('figcaption').html("<em>"+alt+"</em><br>"+title);
    });
    //Step 5: set up event listeners for the input event of each of the range sliders.(Ammu)

    $('#sliderOpacity').on('input', function() {
        $('#numOpacity').html($(this).val());
        $(this).attr('value',$(this).val());
        imageManipulation();
    });

    $('#sliderSaturation').on('input', function() {
        $('#numSaturation').html($(this).val());
        $(this).attr('value',$(this).val());
        imageManipulation();
    });

    $('#sliderBrightness').on('input',function() {
        $('#numBrightness').html($(this).val());
        $(this).attr('value',$(this).val());
        imageManipulation();
    });

    $('#sliderHue').on('input',function() {
        $('#numHue').html($(this).val());
        $(this).attr('value',$(this).val());
        imageManipulation();
    });

    $('#sliderGray').on('input',function() {
        $('#numGray').html($(this).val());
        $(this).attr('value',$(this).val());
        imageManipulation();
    });

    $('#sliderBlur').on('input',function() {
        $('#numBlur').html($(this).val());
        $(this).attr('value',$(this).val());
        imageManipulation();
    });

    //Step 5: To set filter and -web-kit-filter properties on the image in the <figure> (Ammu)
    function imageManipulation(){
        var $op=$('#sliderOpacity').attr('value');
        var $sa=$('#sliderSaturation').attr('value');
        var $br=$('#sliderBrightness').attr('value');
        var $hu=$('#sliderHue').attr('value');
        var $gr=$('#sliderGray').attr('value');
        var $bl=$('#sliderBlur').attr('value');
        $('#imgManipulated img').css('filter', 'opacity('+$op+'%) saturate('+$sa+'%) brightness('+$br+'%) hue-rotate('+$hu+'deg) grayscale('+$gr+'%) blur('+$bl+'px)');
        $('#imgManipulated img').css('-webkit-filter', 'opacity('+$op+'%) saturate('+$sa+'%) brightness('+$br+'%) hue-rotate('+$hu+'deg) grayscale('+$gr+'%) blur('+$bl+'px)');
    }
});
