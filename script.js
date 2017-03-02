// $(document).ready(function(){
//   $.get("https://www.reddit.com/r/aww/.json",
//
//   function(goodness){
//      var redditArray = goodness.data.children;
//      for(var i=0; i<redditArray.length; i++){
//        var thumbnail = redditArray[i].data.thumbnail;
//        var title = redditArray[i].data.title;
//        var author = redditArray[i].data.author;
//        var score = redditArray[i].data.score
//        $('section').append(
//          '<div><h2>' + title +
//          '</h2>' + author + '' + score + '<img src="'
//          + thumbnail +
//          '"/> </div>');
//
//      }
//     console.log(title);
//     console.log(thumbnail);
//     console.log(author);
//
//   });
// });
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
      '"><div class = "post row"><h2 class = "col-md-9 title">'
       + title +
       '</h2><p class = "col-md-9 row author">'
       + author +
       '</p><p class = "col-md-9 rpw score">'
       + score +
       '</p><div class = "col-md-3"><img src = "' + thumbnail + '"/></div></div></a>');
     }
    //  $("div.post").addClass("row");
    console.log(title);
    console.log(thumbnail);
    console.log(author);

  });
});
