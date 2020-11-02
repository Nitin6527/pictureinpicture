const videoElement = document.getElementById('video');
const button = document.getElementById('button');
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
     await videoElement.requestPictureInPicture();
     button.disabled=false;
});


selectMediaStream();