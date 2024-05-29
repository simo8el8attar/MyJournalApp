let isSettingsHidden = true;
function changeSettings(){
    if(isSettingsHidden){
      $('#Settings').css('display','flex');
      $('#navbar').css('borderRight','3px solid black');
      $('#navbar').css('borderBottom','3px solid black');
    }else{
      $('#Settings').css('display','none');
      $('#navbar').css('borderRight','none');
      $('#navbar').css('borderBottom','none');
    }
    isSettingsHidden = !isSettingsHidden;
}
function modifySettings(){
  let font = $('select#fonts').val();
  let bColor = $('select#bColors').val();
  let color = $('select#colors').val();
  $('body').css('fontFamily',font);
  $('body').css('backgroundColor',bColor);
  $('body').css('color',color);
}
function createJournal(){
  let txt = $('<p class="fs-1 text"></p>').text('What Do U Feel Like Writing Today!!');
  let journal = $('<textarea id="journalText"></textarea>');
  let btn = $('<button onclick="saveJournal()" class="btn btn-success" type="button"></button>').text('Save Journal');
  let cont = $('<div id="journal" "></div>');
  cont.append(txt,journal,btn);
  $('#section').append(cont);
}
function saveJournal(){
  let journalTitle = prompt("Title: ");
  let journalDate = prompt("Date: ")
  let journalText = $('#journalText').val();
  let journalData = {
    title: journalTitle,
    date : journalDate,
    text : journalText
  }
  $('#journal').slideUp(1000);
  $("#journal").remove();
}
function showJournals(){
  let listOfJournals = $('<ul class="list-group d-flex  p-3" ></ul>');
  for(let i = 0 ; i < 5 ; i++){
    let journal = $('<li onclick="selectJournal()" class="jrnl list-group-item d-flex justify-content-between"><h3>Title:</h3> <label class="fs-4">title</label> <button  type="button" class="btn btn-light" onclick="showJournal()">show more</button></li>');
    listOfJournals.append(journal);
  }
  let btnDismiss = $('<button class="btn btn-success" onclick="dismissJournals()" type="button"> Dismiss Journals </button>')
  let cont = $('<div id="journalHistory" class="container d-flex flex-column"></div>')
  cont.append(listOfJournals);
  cont.append(btnDismiss);
  $('#section').append(cont);
}
function dismissJournals(){
  $('#journalHistory').toggle();
  $("#journalHistory").remove();
}
function selectJournal() {
  $('.jrnl').on('click', function() {
    $('.jrnl').removeClass('active');
    $(this).addClass('active');
  });
}
function showJournal(){
  $('#journalHistory').toggle();
  $("#journalHistory").remove();
  let title = $('<h2>Title: Strange Day </h2>');
  let date = $('<h3>Date: 23/04/25</h3>')
  let text  = $ ('<p> The sun dipped below the horizon, casting a warm, golden hue across the tranquil sea. Waves lapped gently at the shore, creating a soothing rhythm that echoed the peaceful ambiance of the evening. Seagulls called to each other in the distance, their cries mingling with the soft rustle of palm trees swaying in the breeze. On the beach, footprints marked a solitary walk, leading towards a small bonfire where friends gathered, laughter and conversation filling the air. As stars began to sprinkle the sky, the world seemed to pause, embracing the serene beauty of the moment.</p>')
  let btn = $('<button class="btn btn-success" onclick="dismissJournal()" type="button"> Dismiss Journal </button>')
  let cont  = $('<div id="oneJournal" class="d-flex flex-column"></div>');
  cont.append(title,date,text,btn);
  $('#section').append(cont);
}
function dismissJournal(){
  $('#oneJournal').toggle();
  $("#oneJournal").remove();
}