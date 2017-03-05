$(document).ready(function(){
  $.get("https://www.reddit.com/r/aww/.json",

  function(goodness){
     var redditArray = goodness.data.children;
     for(var i=0; i<redditArray.length; i++){
       var thumbnail = redditArray[i].data.thumbnail;
       var title = redditArray[i].data.title;
       var author = redditArray[i].data.author;
       var score = redditArray[i].data.score;
       var permalink = "http://www.reddit.com" + redditArray[i].data.permalink;
       $('section').append(
      '<a href="'
      + permalink +
      '"><div class="border"><div class = "post row"><div class="col-md-9"><h3>'
       + title +
       '</h3><p>'
       + author +
       '</p><p>'
       + score +
       '</p></div><div class = "col-md-3"><div class="images"><img src = "' + thumbnail + '"/></div></div></div></a>');
     }
    //  $("div.post").addClass("row");
    console.log(title);
    console.log(thumbnail);
    console.log(author);

  });
});
