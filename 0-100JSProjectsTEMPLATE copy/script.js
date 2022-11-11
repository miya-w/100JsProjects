$(document).ready(function() {
  
    $('#addCard').click(function() {
      var front = $('#frontData').val();
      var back = $('#backData').val();
      console.log(front + ' ' + back);
      var html = '';
      html += '<div class="pull-left" id="f1_container">';
      html += '<div id="f1_card" class="shadow">';
      html += '<div class="front face"><h1>' + front + '</h1></div>';
      html += '<div class="back face center"><h1>' + back + '</h1></div>';
      html += '</div>';
      html += '</div>';
      
      $('#cardField').append(html);
      $('textarea').val('');
      
    });
      
  });