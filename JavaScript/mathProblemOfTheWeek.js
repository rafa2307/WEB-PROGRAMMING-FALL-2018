	<script>
		

			var image_tracker = '1';		// this variables keeps track of the images
			
			
			// This method changes the image 
			function change (){
				
				var image = document.getElementById('image_test')	// this variable gets the id of the current image being displayed
				
				
				// this switch statement goes trough all the images
				switch(image_tracker){
					
				case '1':
							image.src = 'img/2.bmp';	// the image source if being changed
							
							image_tracker = '2';	// the image tracker is being changed
							
							break;
							
				case '2':
							
							image.src = 'img/3.bmp';	
					
							image_tracker = '3';
					
							break;
							
				case '3':
					
							image.src = 'img/4.bmp';	
					
							image_tracker = '4';	
					
							break;
					
				case '4':
					
							image.src = 'img/5.bmp';	
			
							image_tracker = '5';
			
							break;
							
				case '5':
					
							image.src = 'img/6.bmp';	
					
							image_tracker = '6';	
					
							break;
					
				case '6':
					
							image.src = 'img/7.bmp';	
			
							image_tracker = '7';
			
							break;
							
				case '7':
					
							image.src = 'img/8.bmp';	
			
							image_tracker = '8';	
			
							break;
			
				case '8':
			
							image.src = 'img/9.bmp';	
	
							image_tracker = '9';
	
							break;
							
				case '9':
					
							image.src = 'img/10.bmp';	
			
							image_tracker = '10';	
			
							break;
			
				case '10':
			
							image.src = 'img/11.bmp';	
	
							image_tracker = '11';
	
							break;

				case '11':
			
							image.src = 'img/12.bmp';	

							image_tracker = '12';

							break;

				case '12':
			
							image.src = 'img/13.bmp';	

							image_tracker = '13';

							break;

				case '13':
			
							image.src = 'img/14.bmp';	

							image_tracker = '14';

							break;

				case '14':
			
							image.src = 'img/15.bmp';	

							image_tracker = '15';

							break;

				case '15':
			
							image.src = 'img/16.bmp';	

							image_tracker = '16';

							break;

				case '16':
			
							image.src = 'img/17.bmp';	

							image_tracker = '17';

							break;

				case '17':
			
							image.src = 'img/1.bmp';	

							image_tracker = '1';

							break;	
							
				default:
							break;
				
				
				}
				
			}