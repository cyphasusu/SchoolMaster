$(document).ready(function()
{
   var Carousel1Opts =
   {
      delay: 0,
      duration: 0,
      easing: 'linear',
      mode: 'forward',
      direction: '',
      pagination: false,
      start: 0
   };
   $("#Carousel1").on('activate', function(event, index)
   {
      switch(index)
      {
         case 0:
            PlayAudio('MediaPlayer1');
            PauseAudio('MediaPlayer2');
            PauseAudio('MediaPlayer3');
            PauseAudio('MediaPlayer4');
            break;
         case 1:
            PlayAudio('MediaPlayer2');
            PauseAudio('MediaPlayer1');
            PauseAudio('MediaPlayer3');
            PauseAudio('MediaPlayer4');
            break;
         case 2:
            PlayAudio('MediaPlayer3');
            PauseAudio('MediaPlayer1');
            PauseAudio('MediaPlayer2');
            PauseAudio('MediaPlayer4');
            break;
         case 3:
            PlayAudio('MediaPlayer4');
            PauseAudio('MediaPlayer1');
            PauseAudio('MediaPlayer2');
            PauseAudio('MediaPlayer3');
            PauseAudio('MediaPlayer3');
            break;
      }
   });
   $("#Carousel1").on('beforeActivate', function(event, index)
   {
      switch(index)
      {
      }
   });
   $("#Carousel1").carousel(Carousel1Opts);
   $("#Carousel1_back a").click(function()
   {
      $('#Carousel1').carousel('prev');
   });
   $("#Carousel1_next a").click(function()
   {
      $('#Carousel1').carousel('next');
   });
});
