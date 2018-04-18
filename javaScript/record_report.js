var message = "";
var record;

function print(message) {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = message;
  }

for (var i = 0; i < records.length; i += 1) {
    record = records[i];
    message += "<h2>Artist: " + record.artist + "</h2>";
    message += "<p>Album: " + record.album + "</p>";
    message += "<p>Label: " + record.label + "</p>";
    message += "<p>Year: " + record.year + "</p>";
    message += "<p>Genre: " + record.genre + "</p>";
    message += "<p>Condition: " + record.condition + "</p>";
}

print(message);