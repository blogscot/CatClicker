(function($) {

  var model = {
    currentCat: 0,
    cats: [
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
  ]
  }

  var octopus = {
    init: function() {
      catView.init();
    },
    getCats: function() {
      return model.cats;
    },
    getCurrentCat: function() {
      return model.currentCat;
    },
    setCurrentCat: function(value) {
      model.currentCat = value;
    },
    getCatName: function(currentCat) {
      return model.cats[currentCat].name;
    },
    getCatUrl: function(currentCat) {
      return model.cats[currentCat].url;
    },
    getCatCount: function(currentCat) {
      return model.cats[currentCat].count;
    },
    incrementCount: function(currentCat) {
      model.cats[currentCat].count++;
    }
  }

  var catView = {
    init: function() {
      var currentCat = octopus.getCurrentCat();
      catView.display(currentCat);

      // Display the selected cat
      $('li').click(function() {
        currentCat = $(this).attr('data-item');
        catView.display(currentCat);
      });

      // Update the click count
      $('img').click(function() {
        var currentCat = octopus.getCurrentCat();

        octopus.incrementCount(currentCat);
        $('#click-count').text(octopus.getCatCount(currentCat));
      });
    },
    display: function(currentCat) {
      var catName = octopus.getCatName(currentCat);
      var catUrl = octopus.getCatUrl(currentCat);
      var catCount = octopus.getCatCount(currentCat);
        
      // save current cat
      octopus.setCurrentCat(currentCat);

      $('#click-count').text(catCount);
      $('#cat-name').text(catName);
      $('img').attr({"src" : catUrl, "alt" : catName});
    }
  }

  octopus.init();

})(jQuery);
