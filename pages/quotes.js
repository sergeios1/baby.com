var quoteText = '';
var quoteAuthor = '';

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://quotes.rest/qod?category=love",
	"method": "GET",
};

$.ajax(settings).done(function (response) {
	quoteText = response.contents.quotes[0].quote;
   quoteAuthor = response.contents.quotes[0].author;
   console.log(response);
   $("#quoteText").html(quoteText);
   $("#quoteAuthor").html('-' + quoteAuthor);
});