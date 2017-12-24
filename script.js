var randomBtn = document.getElementById("random");
randomBtn.onclick = function (){
    var win = window.open("https://en.wikipedia.org/wiki/Special:Random", '_blank');
    win.focus();
}

//################################################################################################

function searchWiki() {
    // Clear previous search results
    $("#search-results").empty();
  
    // Perform ajax call to wiki
    $.ajax({
      url: 'https://en.wikipedia.org/w/api.php',
      data: {
        action: 'query',
        list: 'search',
        srsearch: `${$("#search-text").val()}`,
        srlimit: '10',
        format: 'json',
      },
      dataType: 'jsonp',
      // SUCCESS
      success: function(response) {
        var result = response.query.search;
        result.forEach(function(res) {
  
          //  Building the div that will contain info in res
          var $div = $("<div>", {
            class: "wikiResult"
          });
  
          // Heading
          var $h = $("<h1>");
          $h.html(res.title);
  
          //  Snippet
          var $p = $("<p>");
          $p.html(res.snippet);
          $p.append("...");
  
          //Link to wiki
          var $p2 = $("<p>");
          $p2.addClass("linkToWiki");
          var $a = $("<a>", {
            href: `https://en.wikipedia.org/wiki/${res.title.replace(" ","_")}`,
            target: "_blank"
          });
          $a.text("Read more")
          $p2.append($a);
  
          //  Append to result div
          $div.append($h);
          $div.append($p);
          $div.append($p2);
  
          //  Append to results div
          $("#search-results").append($div);
        });
      }
    });
  }
  
  function searchWikiTitle(title){
    
  }
  
  $(document).ready(function() {
    $("#search-button").on("click", function(e) {
      e.preventDefault();
      searchWiki();
    });
  });