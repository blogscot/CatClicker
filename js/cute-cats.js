$('document').ready(function() {
  var cats = [
  {
    url: 'images/kitten.jpg',
    name: 'Cute Kitten',
    count: 0
  },
  {
    url: 'images/sneaky-cat.jpg',
    name: 'Sneaky Cat',
    count: 0
  },
  {
    url: 'images/sleepy-cats.jpg',
    name: 'Sleepy Cats',
    count: 0
  },
  {
    url: 'images/yawn-cat.jpg',
    name: 'Yawn Cat',
    count: 0
  },
  {
    url: 'images/spectacles-cat.jpg',
    name: 'Spectacles Cat',
    count: 0
  }
  ];

  // Initialise the starting cat
  var catsNum = 0;

  $('#cat-name').text(cats[1].name);
  $('img').attr({"src" : cats[1].url, "alt" : cats[0].name});
  $('#click-count').text("0");

  // Display the selected cat
  $('li').click(function() {
    catNum = $(this).attr('data-item');
    $('#click-count').text(cats[catNum].count);
    $('#cat-name').text(cats[catNum].name);
    $('img').attr({"src" : cats[catNum].url, "alt" : cats[catNum].name});
  });

  // Update the click count
  $('img').click(function() {
    cats[catNum].count++;
    $('#click-count').text(cats[catNum].count);
  });

});
