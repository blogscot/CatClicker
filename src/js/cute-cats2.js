(function($) {

  var model = {
    currentCat: 0,
    adminVisible: false,
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
  };

  var octopus = {
    init: function() {
      catListView.init();
      catView.init();
      adminView.init();
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
    setCatName: function(name) {
      model.cats[this.getCurrentCat()].name = name;
    },
    getCatUrl: function(currentCat) {
      return model.cats[currentCat].url;
    },
    setCatUrl: function(url) {
      model.cats[this.getCurrentCat()].url = url;
    },
    getCatCount: function(currentCat) {
      return model.cats[currentCat].count;
    },
    setCatCount: function(count) {
      model.cats[this.getCurrentCat()].count = count;
    },
    incrementCount: function(currentCat) {
      model.cats[currentCat].count++;
    },
    renderCatView: function() {
      catView.render(this.getCurrentCat());
    },
    renderAdminView: function() {
      adminView.render();
    }
  };

  var catView = {
    init: function() {
      var currentCat = octopus.getCurrentCat();
      this.render(currentCat);
      var that = this;   // this (i.e. catView) gets rebound inside the click handler

      // Display the selected cat
      $('li').click(function() {
        currentCat = $(this).attr('data-item');
        that.render(currentCat);
        octopus.renderAdminView();
      });

      // Update the click count
      $('img').click(function() {
        var currentCat = octopus.getCurrentCat();

        octopus.incrementCount(currentCat);
        octopus.renderAdminView();
        $('#click-count').text(octopus.getCatCount(currentCat));
      });
    },
    render: function(currentCat) {
      var catName = octopus.getCatName(currentCat);
      var catUrl = octopus.getCatUrl(currentCat);
      var catCount = octopus.getCatCount(currentCat);
        
      // save current cat
      octopus.setCurrentCat(currentCat);

      $('#click-count').text(catCount);
      $('#cat-name').text(catName);
      $('img').attr({"src" : catUrl, "alt" : catName});
    }
  };

  var catListView = {
    init: function() {
      this.catListElem = $('#cat-list');

      this.render();
    },
    render: function() {
      var catName;
      var cats = octopus.getCats();

      // initialise the list
      this.catListElem.innerHTML = '';

      for (var i = 0; i < cats.length; i++) {
        catName = octopus.getCatName(i);
        this.catListElem.append("<li data-item='"+i+"''>"+catName+"</li>");
      }
    }
  };

  var adminView = {
    init: function() {
      that = this;
      $('form').hide();

      $('#admin-btn').click(function() {
        that.render();

        $('form').toggle();
      });

      $('#catForm').submit(function(e) {
        e.preventDefault();
        var catName = $('input#catName').val();
        var catUrl = $('input#catUrl').val();
        var catClicks = $('input#catClicks').val();

        // Save the current form values
        octopus.setCatName(catName);
        octopus.setCatUrl(catUrl);
        octopus.setCatCount(catClicks);
        octopus.renderCatView();

        $('form').toggle();
      });
      // The cancel button is pressed
      $('button[type="button"]').click(function() {
        $('form').hide();
      });
    },
    render: function() {
      var currentCat = octopus.getCurrentCat();
      var catName = octopus.getCatName(currentCat);
      var catUrl = octopus.getCatUrl(currentCat);
      var catClicks = octopus.getCatCount(currentCat);

      $('input#catName').val(catName);
      $('input#catUrl').val(catUrl);
      $('input#catClicks').val(catClicks);
    }
  };

  octopus.init();

})(jQuery);
