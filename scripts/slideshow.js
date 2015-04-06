// settings
var $slider = $('.slider'); // class or id of carousel slider
var $slide = 'li'; // could also use 'img' if you're not using a ul
var $transition_time = 500; // 1 second
var $time_between_slides = 4500; // 4 seconds

function slides(){
  return $slider.find($slide);
}

slides().fadeOut();

// set active classes
slides().first().addClass('active');
slides().first().fadeIn($transition_time);

// auto scroll 
$interval = setInterval(
  function(){
    scrollForward();
  }
  , $transition_time +  $time_between_slides 
);

function scrollForward () {
  var $i = $slider.find($slide + '.active').index();

  slides().eq($i).removeClass('active');
  slides().eq($i).fadeOut($transition_time);

  var endOfSlides = slides().length == $i + 1;

  if (endOfSlides) $i = -1; // loop to start

  slides().eq($i + 1).fadeIn($transition_time);
  slides().eq($i + 1).addClass('active');
}

function scrollBackward () {
  var $i = $slider.find($slide + '.active').index();

  slides().eq($i).removeClass('active');
  slides().eq($i).fadeOut($transition_time);

  var endOfSlides = slides().length == $i + 1;

  if (endOfSlides) $i = -1; // loop to start

  slides().eq($i - 1).fadeIn($transition_time);
  slides().eq($i - 1).addClass('active');
}

$('#forward').on('click', function () {
scrollForward();
});
$('#backward').on('click', function () {
scrollBackward();
});