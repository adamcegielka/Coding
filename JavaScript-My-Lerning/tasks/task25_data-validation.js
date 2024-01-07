// Data validation with operators

let article = {
  title: 'Hello World',
  content: 'Some text...',
  tags: ['blog', 'lifestyle'],
  version: 1,
};

function validateArticle(art) {
  if ('title' in art === false || typeof art.title !== 'string') {
    console.log('Incorrect title in article');
    return false;
  }

  if (!'content' in art || typeof art.content !== 'string') {
    console.log('Incorrect content in article');
    return false;
  }

  if (!'tags' in art || !Array.isArray(art.tags)) {
    console.log('Incorrect tag array');
    return false;
  }

  if (!'version' in art || typeof art.version !== 'number') {
    console.log('Problem with the version of the article');
    return false;
  }

  if (art.version < 0) {
    console.log('Wrong version of the article');
    return false;
  }

  return true;
}

validateArticle(article);

console.log(validateArticle(article));
