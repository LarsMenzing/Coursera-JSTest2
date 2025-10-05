vvar xhr = new XMLHttpRequest();
var url = './health_article.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';

// All code that depends on the JSON data must be inside the onload function
xhr.onload = function() {
    // Check for successful response before proceeding
    if (xhr.status === 200) {
        var articles = xhr.response.articles;
        var articlesDiv = document.getElementById('articles');

        // Loop through the articles and create the HTML structure
        articles.forEach(function(article) {
            var articleDiv = document.createElement('div');
            articleDiv.classList.add('article');

            var title = document.createElement('h2');
            title.textContent = article.title;

            var description = document.createElement('p');
            description.textContent = article.description;

            var waysHeader = document.createElement('h3');
            waysHeader.textContent = 'Ways to Achieve:';

            var waysList = document.createElement('ul');
            article.ways_to_achieve.forEach(function(way) {
              var listItem = document.createElement('li');
              listItem.textContent = way;
              waysList.appendChild(listItem);
            });

            var benefitsHeader = document.createElement('h3');
            benefitsHeader.textContent = 'Benefits:';

            var benefitsList = document.createElement('ul');
            article.benefits.forEach(function(benefit) {
              var listItem = document.createElement('li');
              listItem.textContent = benefit;
              benefitsList.appendChild(listItem);
            });

            articleDiv.appendChild(title);
            articleDiv.appendChild(description);
            articleDiv.appendChild(waysHeader);
            articleDiv.appendChild(waysList);
            articleDiv.appendChild(benefitsHeader);
            articleDiv.appendChild(benefitsList);

            articlesDiv.appendChild(articleDiv);
        });
    } else {
        console.error('Request failed. Returned status of ' + xhr.status);
    }
};

// The request must be sent *after* it's configured and the onload handler is set
xhr.send();

