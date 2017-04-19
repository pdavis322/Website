   var colors = [255, 255, 255, 0, 0, 0];

            var down = true;
            var clicked = false;
            
            function headerClicked() {
				window.location.href = "index.html";
            }
            
			var buttons = [document.getElementById("about"), document.getElementById("games"), document.getElementById("tutorials"), document.getElementById("misc")];
			function buttonClicked(whichButton) {
				
				clicked = true;
				buttons[whichButton].style.transition = "0.3s";
				buttons[whichButton].style.webkitTransition = "0.3s";
                buttons[whichButton].style.boxShadow = "0px 0px 0 black";
                buttons[whichButton].style.transform = "translate(5px, 5px)";	
				//buttons[whichButton].style.backgroundColor = "black";
				
				
                window.setTimeout(function() {
                	buttons[whichButton].style.transition = "1s";
				    buttons[whichButton].style.webkitTransition = "1s";
                    buttons[whichButton].style.boxShadow = "5px 5px 0 black";
                    buttons[whichButton].style.transform = "translate(-5px, -5px)";
                }, 300)

                window.setTimeout(function() {
                    switch (whichButton) {
                        case 2:
								window.location.href = "tutorials1.html";
						window.location.href = "";
                        break;
                        default: alert("This page is currently under construction. Check back later!");
                        break;
                    }
                }, 1100);


				
			}
			
			function randomColor() {
				function random() {
					return Math.floor(Math.random() * 256); 
				}
				return "rgb(" + random() + "," + random() + "," + random() + ")";
			}
			for (var i = 0; i < buttons.length; i++) {
				var color = randomColor();
				if (!clicked) {
                    buttons[i].style.backgroundColor = randomColor();
                    buttons[i].style.border = "none";
				}
			}
			setInterval(function() {
				
				for (var i = 0; i < buttons.length; i++) {
					var color = randomColor();
					if (!clicked) {
                        buttons[i].style.border = "none";
						buttons[i].style.backgroundColor = randomColor();
					}
				}
		
			}, 3500);
			
			var iframes = document.getElementsByTagName("iframe");
			iframes[0].contentDocument.body.innerHTML = "<code class='lang-html'>&lt;asdf&gt;&lt;/asdf&gt;</code>";