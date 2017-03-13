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

    var entryTitle = $("#title").val();
    var entryBody = $("#body").val();

    var newEntry = new Entry(entryTitle, entryBody);
    var wordCount = newEntry.countWords(entryBody);

    $("#journal-entries").prepend("<li>" + entryTitle + " (wordcount: " + wordCount + "): " + entryBody + "</li>");

  });
});
