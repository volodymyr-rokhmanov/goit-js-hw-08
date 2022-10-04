import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', event => {
  console.log(event.seconds);
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(event.seconds)
  );

  let forTime = +localStorage.getItem('videoplayer-current-time');
  console.log(forTime);

  console.dir(player.setCurrentTime(forTime));

  // player
  //   .setCurrentTime(forTime)
  //   .then(function (seconds) {
  //     console.log('player');
  //     // seconds = the actual time that the player seeked to
  //   })
  //   .catch(function (error) {
  //     switch (error.name) {
  //       case 'RangeError':
  //         // the time was less than 0 or greater than the video’s duration
  //         break;

  //       default:
  //         // some other error occurred
  //         break;
  //     }
  //   });
});

console.dir(player);
console.dir(iframe);

// //on(event: string, callback: function)
// Add an event listener for the specified event. Will call the callback with a single parameter,
// data, that contains the data for that event.See events below for details.

// const onPlay = function (data) {
// data is an object containing properties specific to that event
// };

// player.on('play', onPlay);

// timeupdate
// Triggered as the currentTime of the video updates. It generally fires every 250ms, but it may vary depending on the browser.

// {
//     duration: 61.857
//     percent: 0.049
//     seconds: 3.034
// }

// player
//   .setCurrentTime(30.456)
//   .then(function (seconds) {
//     // seconds = the actual time that the player seeked to
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         // the time was less than 0 or greater than the video’s duration
//         break;

//       default:
//         // some other error occurred
//         break;
//     }
//   });