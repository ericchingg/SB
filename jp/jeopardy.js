// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

let categories = [];

/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

async function getCategoryIds() {
  let random = Math.floor(Math.random() * (500 - 1) + 1);
  let res = await axios.get('http://jservice.io/api/categories', {params: {count: 100, offset: random}});

  let randomCategories = _.sampleSize(res.data, 6);
  let categoryIds = randomCategories.map(ids => {
    return ids.id;
  });
  // console.log(categoryIds);
  return categoryIds;
}

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

async function getCategory(catId) {
  let res = await axios.get('http://jservice.io/api/clues', {params: {category: catId}});
  // console.log(res);
  let randomQuestions = _.sampleSize(res.data, 5);
  let clueArray = randomQuestions.map(clue =>{
    return {question: clue.question, answer: clue.answer, showing: null}
  });
  // console.log(clueArray);
  let cat = {title: res.data[0].category.title, clue: clueArray};
  // console.log(cat);
  return cat;
}

async function category() {
  categories = [];
  let categoryIds = await getCategoryIds();
  for(let cate of categoryIds) {
    let complete = await getCategory(cate);
    categories.push(complete);
  }
  // console.log(categories);
  return categories;
}


/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

const $button = $('<button>');
const $body = $('body');
const $table = $('<table>');
const $tBody = $('<tbody>');
const $title = $('<h1>');

  $title.text('Jeopardy!')
  $button.text('Start');
  $body.append($table).prepend($button).prepend($title);
  $table.append($tBody);

async function fillTable() {

  const $tHead = $('<thead>');
    $table.prepend($tHead);

  for(let i = 0; i<5; i++) {
    const $tr = $('<tr>');
    for(let j = 0; j<6; j++) {
      const $td = $('<td>');
      $td.attr('id', `${j}-${i}`).attr('class', 'question').text('?').on('click', handleClick);
      $tr.append($td); 
      // console.log(box);
      }
    $tBody.append($tr);
  }

  for(let k = 0; k<6; k++) {
    const $th = $('<th>');
    $tHead.append($th);
    $th.attr('class','category').text(categories[k].title);    
  }
}  

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
  const cell = evt.target;
  const cellNum = cell.id[0];
  const celNum = cell.id[2];

  const categ = categories[cellNum].clue[celNum];
  let text;

  if(!cell.showing) {
    text = categ.question;
    cell.showing = 'question';
  } else if (cell.showing === 'question') {
    text = categ.answer;
    cell.showing = 'answer';
  } else {
    return;
  }
  $(`#${cellNum}-${celNum}`).html(text);
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {
  $button.text('Loading');
}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
  $button.text('Restart');
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
  showLoadingView();
  await category();
  fillTable();
  hideLoadingView()
}

/** On click of start / restart button, set up game. */

// TODO


$button.on('click', async () => {
  if ($('button').attr('id') === 'restart') {
    location.reload();
    setupAndStart();
  } else {
    setupAndStart();
    $('button').attr('id', 'restart')
  }  
})

/** On page load, add event handler for clicking clues */

// TODO