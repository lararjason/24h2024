

let predictions = [];

const video = document.getElementById('video');

navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
    video.srcObject = stream;
    video.play();
});

const handpose = ml5.handpose(video, modelLoaded);

function modelLoaded() {
  console.log('Model Loaded!');
}


  


// Listen to new 'hand' events
handpose.on('hand', results => {
  predictions = results;
  console.log(results[0])
});
