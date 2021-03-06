var jsonImages = '[{"id":22,"title":"View of Cologne","description":"View of Cologne from atop the Cologne Cathedral","country":"Germany","city":"Cologne","user":"Joao Fernandes","path":"6114850721.jpg","taken":"August 8, 2017","tags":["cathedral","high","birds-eye"]},{"id":54,"title":"Arch of Septimus Severus","description":"In the Roman Forum","country":"Italy","city":"Rome","user":"Ellie Sullivan","path":"9495574327.jpg","taken":"August 15, 2017","tags":["rome","ruins","ancient","assassinated"]},{"id":7,"title":"Lunenburg Port","description":"On board a small sailing ship leaving Lunenburg","country":"Canada","city":"Lunenburg","user":"Mark Taylor","path":"5856697109.jpg","taken":"August 28, 2017","tags":["maritimes","nova scotia","yacht","port"]},{"id":19,"title":"British Museum","description":"The library in the British Museum in London","country":"United Kingdom","city":"London","user":"Mark Taylor","path":"5855729828.jpg","taken":"September 3, 2017","tags":["museum","karl marx","reading room","shadows","yellow"]},{"id":46,"title":"Temple of Hephaistos","description":"Located on western perimeter of Agora in Athens. Built in 460-415 BCE, it is the best preserved temple of antiquity.","country":"Greece","city":"Athens","user":"Ellie Sullivan","path":"8711645510.jpg","taken":"October 10, 2017","tags":["ancient","garden","ruins","sunshine"]},{"id":6,"title":"At the top of Sulpher Mountain","description":"At top of Sulpher Mountain near Banff","country":"Canada","city":"Banff","user":"Frantisek Wichterlova","path":"6114907897.jpg","taken":"October 15, 2017","tags":["mountain","banff","valley"]},{"id":60,"title":"Pazzi Chapel at Santa Croce","description":"By Filippo Brunelleschi, the chapel is considered to be one of the masterpieces of Renaissance architecture. It is located in the first cloister of the Basilica di Santa Croce.","country":"Italy","city":"Florence","user":"Frantisek Wichterlova","path":"9504609042.jpg","taken":"October 23, 2017","tags":["florence","cathedral","church","brunelleschi"]},{"id":58,"title":"Florence Duomo","description":"Photo taken from the Campanile","country":"Italy","city":"Florence","user":"Ellie Sullivan","path":"9498358806.jpg","taken":"November 4, 2017","tags":["cathedral","church","brunelleschi","vertigo"]},{"id":75,"title":"Ancient Theatre of Dionysos","description":"On south bank of Acropolis","country":"Greece","city":"Athens","user":"Mark Taylor","path":"8710513053.jpg","taken":"November 6, 2017","tags":["athens","ruins","theatre","sophocles"]},{"id":77,"title":"Dusk on Santorini","description":"Looking towards Imerovigli, a village devoted to the appreciation of the sunset!","country":"Greece","city":"Fira","user":"Camille Bernard","path":"8710247776.jpg","taken":"November 6, 2017","tags":["fira","sunset","beautiful","wow","volcano"]},{"id":27,"title":"New National Gallery","description":"Exterior of the Mies van der Rohe designed New National Gallery","country":"Germany","city":"Berlin","user":"Joao Fernandes","path":"6114867983.jpg","taken":"August 12, 2017","tags":["museum","berlin","modernism","architecture"]},{"id":2,"title":"Calgary Downtown","description":"Calgary Downtown from Edworthy Park","country":"Canada","city":"Calgary","user":"Camille Bernard","path":"6592914823.jpg","taken":"October 23, 2017","tags":["autumn","leaves","skyscrappers","zoom"]},{"id":24,"title":"Downtown Frankfurt","description":"Downtown Frankfurt from the Frankfurt Cathedral","country":"Germany","city":"Frankfurt","user":"Ellie Sullivan","path":"6114960821.jpg","taken":"August 4, 2017","tags":["downtown","skyscrapper","architecture"]},{"id":13,"title":"Central Park","description":"Conservatory Pond in Central Park New York","country":"United States","city":"New York","user":"Mark Taylor","path":"6596048341.jpg","taken":"September 9, 2017","tags":["downtown","skyscrapper","architecture"]},{"id":101,"title":"Seattle Scene","description":"View of the Space Needle and the EMP Museum","country":"United States","city":"Seattle","user":"Mark Taylor","path":"21587937686.jpg","taken":"September 23, 2017","tags":["downtown","skyscrapper","architecture","modernism"]},{"id":102,"title":"Millennium Park Chicago","description":"Jay Pritzker Pavilion at Millennium Park by Frank Gehry","country":"United States","city":"Chicago","user":"Mark Taylor","path":"22182041615.jpg","taken":"September 28, 2017","tags":["downtown","skyscrapper","architecture","modernism"]}]';

var images = JSON.parse(jsonImages);
$(function () {
    // Step 2:Loop throgh images array to add <img>(Amandeep)
    for(i=0;i<images.length;i++)
    {
        var li=$('<li/>');                                          //create <li> tag
        var src=images[i].path;                                     //set path property as src of <img> tag
        var alt=images[i].title;                                    //set title proprty as alt of <img> tag
        var img=$('<img src="images/square/'+src+'" alt="'+alt+'">');   //create <img> tag
        li.append(img);                                              // Add <img> tag to <li> tag
        $('.gallery').append(li);                                       // Add <li> to <ul> tag
    }
    
    // Step 3: Attach handlers  to square images in the gallery (Bony)
    $('.gallery img')
        .on('mouseenter', function(e) {
        //Step 4: add gray class to square image (Bony)
        $(this).addClass('gray');
        //Step 5: (Ammu)
        var alt = $(this).attr('alt');
        var src = $(this).attr('src');
        var newsrc = src.replace("square","medium");
        // Step 5:make dynamic element with larger preview image and caption
        var preview = $('<div id="preview"></div>');
        //Step 5: Create image tag that displays larger version of image
        var image = $('<img src="' + newsrc + '">');
        var cap=alt;
        for(i=0;i<images.length;i++)
        {
            if(alt==images[i].title)
            {
                cap=cap+"<br><I>"+images[i].city+", "+images[i].country+", ["+images[i].taken+"]</I>";
                break;
            }
        }
        var caption = $('<p>' + cap + '</p>');
        
        preview.append(image);
        preview.append(caption);
        //Step 6: calculate new position (Amandeep)
        $("#preview").css("display","block");
        $("#preview")
            .css("top", (e.pageY - 10) + "px")
            .css("left", (e.pageX + 30) + "px");
           
        //Step 7: Append #preview <div> to the body (Bony)
        $('body').append(preview);
        })
        //Step 8: remove gray class and #preview <div> (Ammu)
        .on('mouseleave', function(e) {
            $(this).removeClass("gray");
            $("#preview").remove(); 
        })
        //Step 9: set the left and top css property for #preview <div> (Ammu)
       .on('mousemove', function(e) {
            $("#preview").css("display","block");
            $("#preview")
                .css("top", (e.pageY - 10) + "px")
                .css("left", (e.pageX + 30) + "px");
        });
});