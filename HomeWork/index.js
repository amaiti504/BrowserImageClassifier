
function readURL(input) {
            if (input.files && input.files[0]) {
                $("#prediction").empty();
            var reader = new FileReader();
            reader.onload = function(e) {
                                    //$('#imagePreview').css('background-image', 'url('+e.target.result +')');
                                    document.getElementById("img").src = e.target.result;
                                    $('#imagePreview').hide();
                                    $('#imagePreview').fadeIn(650);
                                    
                            }
            reader.readAsDataURL(input.files[0]);
            app();
            }
}


async function app() {
console.log('Loading mobilenet..');

// Load the model.
net = await mobilenet.load();
console.log('Sucessfully loaded model');

// Make a prediction through the model on our image.
const imgEl = document.getElementById('img');
const result = await net.classify(imgEl);
console.log(result);
//$("#prediction").empty();
$("#prediction").text(result[0].className);
}

