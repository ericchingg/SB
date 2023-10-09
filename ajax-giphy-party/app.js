// console.log("Let's get this party started!");

const $gifPool = $('#gifs');
const $userSearch = $('#search');

function addGif(results) {
  let res = results.data.length;
  // console.log(res);

  if(res) {
    let random = Math.floor(Math.random() * res);
    let $newGif = $('<img>', {src: results.data[random].images.original.url});
    // console.log($newGif);

    $gifPool.append($newGif);
  }
};

$('form').on('submit', async function(e) {
  e.preventDefault();

  let userInput = $userSearch.val();
  $userSearch.val('');

  const response = await axios.get('http://api.giphy.com/v1/gifs/search', {params: {q: userInput, api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'}});
  // console.log (response);
  addGif(response.data);
});

$('#delete').on('click', function() {
  $gifPool.empty();
});