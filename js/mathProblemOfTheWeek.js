<script>
		

var image_tracker = '1';		// this variables keeps track of the images


// This method changes the image 
function change (){
	
	var image = document.getElementById('image_test')	// this variable gets the id of the current image being displayed
	
	
	// this switch statement goes trough all the images
	switch(image_tracker){
		
	case '1':
				image.src = 'img2/2.png';	// the image source if being changed
				
				image_tracker = '2';	// the image tracker is being changed
				
				break;
				
	case '2':
				
				image.src = 'img2/3.png';	
		
				image_tracker = '3';
		
				break;
				
	case '3':
		
				image.src = 'img2/4.png';	
		
				image_tracker = '4';	
		
				break;
		
	case '4':
		
				image.src = 'img2/5.png';	

				image_tracker = '5';

				break;
				
	case '5':
		
				image.src = 'img2/6.png';	
		
				image_tracker = '6';	
		
				break;
		
	case '6':
		
				image.src = 'img2/7.png';	

				image_tracker = '7';

				break;
				
	case '7':
		
				image.src = 'img2/8.png';	

				image_tracker = '8';	

				break;

	case '8':

				image.src = 'img2/9.png';	

				image_tracker = '9';

				break;
				
	case '9':
		
				image.src = 'img2/10.png';	

				image_tracker = '10';	

				break;

	case '10':

				image.src = 'img2/11.png';	

				image_tracker = '11';

				break;

	case '11':

				image.src = 'img2/12.png';	

				image_tracker = '12';

				break;

	case '12':

				image.src = 'img2/13.png';	

				image_tracker = '13';

				break;

	case '13':

				image.src = 'img2/14.png';	

				image_tracker = '14';

				break;

	case '14':

				image.src = 'img2/15.png';	

				image_tracker = '15';

				break;

	case '15':

				image.src = 'img2/16.png';	

				image_tracker = '16';

				break;

	case '16':

				image.src = 'img2/1.png';	

				image_tracker = '1';

				break;	
				
	default:
				break;
	
	
	}
	
}

// The set interval method calls the change function every week to change the image being displayed.
setInterval('change()', 1000);

</script>