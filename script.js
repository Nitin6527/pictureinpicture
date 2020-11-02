const videoElement = document.getElementById('video');
const button = document.getElementById('button');
const para = document.getElementById('info');

async function selectMediaStream(){
	try{
		const captureStream = await navigator.mediaDevices.getDisplayMedia();
		videoElement.srcObject = captureStream;
		videoElement.onloadedmetadata= ()=>{
			videoElement.play();
		}
	}
	catch(err){
		console.log('whoops, error',err);
	}
}
button.addEventListener('click', async()=>{
     button.disabled=true;
     para.hidden=false;
     await videoElement.requestPictureInPicture();
     button.disabled=false;
     para.hidden=true;
});


selectMediaStream();