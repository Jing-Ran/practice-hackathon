(function() {
  var allItems = document.querySelectorAll('.content_item');
  var subItems;
  var i;
  var j;
  var currentItem;
  var currentId;
  var currentSubItem;
  var currentSubId;
  var activeId;
  var activeItem;
  var activeNavLi;
  
  document.querySelector('.scrollspy a').classList.add('active');

  window.onscroll = function () {
    var scrolledLength = document.body.scrollTop;
    for (i = 0; i < allItems.length; i++) {
      currentId = 'item' + i;
      currentItem = document.getElementById(currentId);
      if (scrolledLength >= currentItem.offsetTop / 5 * 4) {
        // remove all .active
        if (document.querySelector('.active') !== null) {
          document.querySelector('.active').classList.remove('active');
        }
        
        document.querySelector('a[href*="' + currentId + 
          '"]').classList.add('active');
        activeId = currentId;
      }
    }

    activeItem = document.getElementById(activeId);
    subItems = activeItem.querySelectorAll('.content_item-sub');
    if (document.querySelector('.active-sub') !== null) {
      document.querySelector('.active-sub').classList.remove('active-sub');
    }
    if (subItems.length > 0) {
      for (j = 0; j < subItems.length; j++) {
        currentSubId = activeId + '_' + j;
        if (scrolledLength >= subItems[j].offsetTop / 5 * 4) {
          if (document.querySelector('.active-sub') !== null) {
            document.querySelector('.active-sub').classList.remove('active-sub');
          }
          document.querySelector('a[href*="' + currentSubId + 
            '"]').classList.add('active-sub');
        }
      }
    }
  };
  
})();