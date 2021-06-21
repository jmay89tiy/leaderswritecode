$(document).ready(function() {

    let $messageBox = $('#messagebox');
    let happy = 'Be Happy';
    let travel = 'Explore the World';
    let learn = 'Learn New Things';
    let food = 'Eat Great Food';
    let care = 'Care About Things';
    let work = 'Work Really Hard';
    let remember = 'Remember to Enjoy Life';
    let a = [happy, travel, learn, food, care, work, remember];
    let i = 0;
  
    function cool() {
      $messageBox.text(a[i++ % a.length])
    }
  
    setInterval(cool, 1500);
  
  });
