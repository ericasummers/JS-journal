function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.countWords = function(entry) {
  var totalWords = entry.split(" ").length;
  return totalWords;
}

$(document).ready(function() {
  $("#submit-entry").submit(function(event) {
    event.preventDefault();

    var title = $("#title").val();
    var body = $("body").val();

    var newEntry = new Entry(title, body);
    var wordCount = newEntry.countWords();

    $("#journal-entries").prepend("<li>" + title + " (wordcount: " + wordCount + "): " + body + "</li>");

  });
});
