$("body").scrollTop(0);
$("body").css("overflow", "hidden");
$("#loading")
  .css("width", window.innerWidth + "px")
  .css("height", window.innerHeight + "px");
  window.onresize = function(event) {
  $("#loading")
  .css("width", window.innerWidth + "px")
  .css("height", window.innerHeight + "px");
};
$("#eng .card").css("background-image", "url(img/Eng.jpg)");
$("#mang .card").css("background-image", "url(img/Man.jpg)");
$("#pres .card").css("background-image", "url(img/Pre.jpg)");
$("#des .card").css("background-image", "url(img/Des.jpg)");

  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
   
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});
function makeit() {
  var ctx = document.querySelector("canvas").getContext("2d"),
    dashLen = 80,
    dashOffset = dashLen,
    txt = " We make it possible ",
    x = 30,
    i = 0;
    if ($(window).width() <= 550){
    var speed = 20;
    ctx.font = "22px Leckerli One, cursive,Leckerli One";
  }
  else{
    var speed = 14;
    ctx.font = "30px Leckerli One, cursive,Leckerli One";

  }
  ctx.lineWidth = 1;
  ctx.lineJoin = "round";
  ctx.globalAlpha = 1;
  ctx.strokeStyle = ctx.fillStyle = "#eee";

  (function loop() {
    ctx.clearRect(x, 0, 60, 150);
    ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
    dashOffset -= speed; // reduce dash length
    ctx.strokeText(txt[i], x, 90); // stroke letter

    if (dashOffset > 0) requestAnimationFrame(loop);
    else {
    // animate
    ctx.fillText(txt[i], x, 90); // fill final letter
    dashOffset = dashLen; // prep next char
    x += ctx.measureText(txt[i++]).width+3 + ctx.lineWidth * Math.random();
    ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random()); // random y-delta
    ctx.rotate(Math.random() * 0.005); // random rotation
    if (i < txt.length) requestAnimationFrame(loop);
    }
  })();
  }
  
  $(window).on("load", function() {
  $("#load_img").fadeOut(200, function() {
  if ($(window).width() <= 550){
    $("#load_img").replaceWith(
    '<canvas width=330px><div class="txtStyle">We make it possible</div></canvas>'
    );
    
  $("#loading img").css("width", "200px");
  }   
  else{
    $("#load_img").replaceWith(
    '<canvas width=450px><div class="txtStyle">We make it possible</div></canvas>'
    );
  $("#loading img").css("width", "350px");
  }
      
  makeit();
  $("#eng .card").css("background-image", "");
    $("#mang .card").css("background-image", "");
    $("#pres .card").css("background-image", "");
    $("#des .card").css("background-image", "");

  setTimeout(function() {
    $("canvas").fadeOut(1000);
    $("#loading img").fadeOut(1000, function() {
    $("#loading").fadeOut(2000, function() {
      $("body").css("overflow", "auto");
      $("#loading").remove();
    });
    });
  }, 4000);
  });
});

// Get the modal
var modal = document.getElementById("myModal");
var modal_check = 0;
// Get the button that opens the modal
var eng = document.getElementById("eng");
var mang = document.getElementById("mang");
var des = document.getElementById("des");
var pres = document.getElementById("pres");
function hover(){
$("#eng .card").hover(
  function() {
    // over
    $("#eng img").addClass("fade_icons");
  },
  function() {
    // out
    $("#eng img").removeClass("fade_icons");
  }
);
$("#mang .card").hover(
  function() {
    // over
    $("#mang img").addClass("fade_icons");
  },
  function() {
    // out
    $("#mang img").removeClass("fade_icons");
  }
);
$("#des .card").hover(
  function() {
    // over
    $("#des img").addClass("fade_icons");    
  },
  function() {
    // out
    $("#des img").removeClass("fade_icons");
  }
);
$("#pres .card").hover(
  function() {
    // over
    $("#pres img").addClass("fade_icons");
  },
  function() {
    // out
    $("#pres img").removeClass("fade_icons");
  }
);
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal
var bluefish = document.getElementById("bluefish"),
    astrobot = document.getElementById("astrobot"),
    spade = document.getElementById("spade"),
    magnet = document.getElementById("magnet"),
    baymax = document.getElementById("baymax"),
    anchor = document.getElementById("anchor"),
    spectrum = document.getElementById("spectrum"),
    rhetorica = document.getElementById("rhetorica"),
    action = document.getElementById("action"),
    joinClass = document.getElementsByClassName("join"),
    joinID = document.getElementById("join");

bluefish.onclick = function() {
  //de();
  $("body").css("overflow", "hidden");
  modal.style.display = "block";
  $(".modal-body").fadeIn(100);
  document.getElementById("workshop").innerHTML =
    "<img width='120px' class='workshop_img' src='img/bluefish.png' alt='bluefish' > <br><h2>Web Design</h2>";
  $("#a,#b").fadeOut(300, function() {
    document.getElementById("a").innerHTML =
      "Do you want to dig deep within the web design process as a professional User Interface developer?";
    document.getElementById("b").innerHTML =
      "To achieve this, you should learn the essential web design languages (HTML 5, CSS3, JQuery) and know about the user experience design and design theory aspects. That's exactly what you will learn in Bluefish workshop.";
    $("#a,#b").fadeIn(300);
  });
};
astrobot.onclick = function() {
  $("body").css("overflow", "hidden");
  modal.style.display = "block";
  $(".modal-body").fadeIn(100);
  document.getElementById("workshop").innerHTML =
    "<img width='120px'  class='workshop_img' src='img/astrobot.png' alt='astrobot' > <br><h2>Arduino</h2>";
  $("#a,#b").fadeOut(300, function() {
    document.getElementById("a").innerHTML =
      "Are you Interested in the Robots field? Do you have the passion to learn new things and create your robot friend?!";
    document.getElementById("b").innerHTML =
      "Then you are in the right place. In astrobot workshop you will learn the basics of software, hardware, arduino structure and different sensors to create your own Robot.";
    $("#a,#b").fadeIn(300);
  });
};
spade.onclick = function() {
  $("body").css("overflow", "hidden");
  modal.style.display = "block";
  $(".modal-body").fadeIn(100);
  document.getElementById("workshop").innerHTML =
    "<img width='75px' class='workshop_img' src='img/spade.png' alt='spade' > <br><h2>Entrepreneurship</h2>";
  $("#a,#b").fadeOut(300, function() {
    document.getElementById("a").innerHTML =
      "Do you want to start your own business? Do you have a creative idea but don't know how to excute it?";
    document.getElementById("b").innerHTML =
      "In Spade workshop, you'll learn how to make your idea come true by learning how to perform a proper market research and business plan and also how to be a great problem solver and entrepreneur.";
    $("#a,#b").fadeIn(300);
  });
};

magnet.onclick = function() {
  $("body").css("overflow", "hidden");
  modal.style.display = "block";
  $(".modal-body").fadeIn(100);
  document.getElementById("workshop").innerHTML =
    "<img width='75px' class='workshop_img' src='img/magnet.png' alt='magnet' > <br><h2>Promotion</h2>";
  $("#a,#b").fadeOut(300, function() {
    document.getElementById("a").innerHTML =
      "On your way to college or home you might see Advertisements everywhere. When you decide to watch TV, many ads can catch your attention. But Why?!";
    document.getElementById("b").innerHTML =
      "In Magnet workshop you will be able to see ads in different ways, learn how to market your product through different platforms and know about digital marketing & public relations.";
    $("#a,#b").fadeIn(300);
  });
};
baymax.onclick = function() {
  $("body").css("overflow", "hidden");
  modal.style.display = "block";
  $(".modal-body").fadeIn(100);
  document.getElementById("workshop").innerHTML =
    "<img width='120px' class='workshop_img' src='img/baymax.png' alt='baymax' > <br><h2>HR</h2>";
  $("#a,#b").fadeOut(300, function() {
    document.getElementById("a").innerHTML =
      "Are you afraid from interviews? Do you find yourself frequently confused between Human Resources and Human Development?!";
    document.getElementById("b").innerHTML =
      "Now you have the opportunity to learn about the HR cycle, know more about how to conduct interviews and develop your communication and leadership skills in Baymax workshop";
    $("#a,#b").fadeIn(300);
  });
};
spectrum.onclick = function() {
  $("body").css("overflow", "hidden");
  modal.style.display = "block";
  $(".modal-body").fadeIn(100);
  document.getElementById("workshop").innerHTML =
    "<img width='120px' class='workshop_img' src='img/spectrum.png' alt='Spectrum' > <br><h2>Photoshop</h2>";
  $("#a,#b").fadeOut(300, function() {
    document.getElementById("a").innerHTML =
      "May you edit my photo to show me holding the pyramids within my hands?!";
    document.getElementById("b").innerHTML =
      "Most of us capture good photos but need to edit and retouch them. To know the essential tools of Photoshop, edit photos and deliver effective graphic designs we offer to you our Spectrum workshop";
    $("#a,#b").fadeIn(300);
  });
};

anchor.onclick = function() {
  $("body").css("overflow", "hidden");
  modal.style.display = "block";
  $(".modal-body").fadeIn(100);
  document.getElementById("workshop").innerHTML =
    "<img width='120px' class='workshop_img' src='img/anchor.png' alt='anchor' > <br><h2>Illustrator</h2>";
  $("#a,#b").fadeOut(300, function() {
    document.getElementById("a").innerHTML =
      "Have you ever thought how logos are designed?";
    document.getElementById("b").innerHTML =
      "Anchor workshop is designed for participants who are interested in graphic design and design theory aspects. After attending this workshop you will know the essential & advanced tools of adobe illustrator, improve your designing skills and deliver elegant and professional designs.";
    $("#a,#b").fadeIn(300);
  });
};

action.onclick = function() {
  $("body").css("overflow", "hidden");
  modal.style.display = "block";
  $(".modal-body").fadeIn(100);
  document.getElementById("workshop").innerHTML =
    "<img width='120px' class='workshop_img' src='img/action.png' alt='action' > <br><h2>Video production</h2>";
  $("#a,#b").fadeOut(300, function() {
    document.getElementById("a").innerHTML =
      'Have you seen an advertising video or a short film and asked yourself "How could they make that ?!"';
    document.getElementById("b").innerHTML =
      "Action workshop offers you the opportunity to learn the essential level of photography and videography, how to tell story by using video and audio and how to use software programs to edit and make final project. Apply now and become the director of every scene.";
    $("#a,#b").fadeIn(300);
  });
};

rhetorica.onclick = function() {
  $("body").css("overflow", "hidden");
  modal.style.display = "block";
  $(".modal-body").fadeIn(100);
  document.getElementById("workshop").innerHTML =
    "<img width='120px' class='workshop_img' src='img/rhetorica.png' alt='rhetorica' > <br><h2>Public speaking</h2>";
  $("#a,#b").fadeOut(300, function() {
    document.getElementById("a").innerHTML =
      "We have heard before that someone forgot his voice while speaking on stage!";
    document.getElementById("b").innerHTML =
      "If you are interested in knowing why as well as overcoming your fear of public speaking and being able to develop your presentation and communication skills to deliver your ideas in the most effective way, your place is in Echo workshop.";
    $("#a,#b").fadeIn(300);
  });
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  $("body").css("overflow", "auto");
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    $("body").css("overflow", "auto");
    //de();
    $(".header img").css("visibility", "visible");
    modal.style.display = "none";
    $("#eng_icons").css("visibility", "hidden");
    $("#mang_icons").css("visibility", "hidden");
    $("#pres_icons").css("visibility", "hidden");
    $("#des_icons").css("visibility", "hidden");
    $("registrationForm").css("display", "none");
  }
  return (modal_check = 0);
};

  if ($(window).width() <= 650) {  
      $("#eng img").addClass("fade_icons");
      $("#eng .card").addClass("fade_bg");
      $("#eng .card").css("background-size", "135%");
      $("#eng .more").fadeIn();
      $("#mang img").addClass("fade_icons");
      $("#mang .card").addClass("fade_bg");
      $("#mang .card").css("background-size", "135%");
      $("#mang .more").fadeIn();
      $("#pres img").addClass("fade_icons");
      $("#pres .card").addClass("fade_bg");
      $("#pres .card").css("background-size", "135%");
      $("#pres .more").fadeIn();
      $("#des img").addClass("fade_icons");
      $("#des .card").addClass("fade_bg");
      $("#des .card").css("background-size", "135%");
      $("#des .more").fadeIn();
  }
  else{hover();}     

