const textArea = document.getElementById("text_to_summarize");
const submitButton = document.getElementById("submit-button");
const summarizedTextArea = document.getElementById("summary");
const cb = document.getElementById("check1-61");

submitButton.disabled = true;
cb.checked=false;

textArea.addEventListener("input", verifyTextLength);
cb.addEventListener("change",(e)=>{
  if(cb.checked){
    
  textArea.value = "As an API customer, your API token will automatically enable CPU-Accelerated inference on your requests if the model type is supported. For instance, if you compare gpt2 model inference through our API with CPU-Acceleration, compared to running inference on the model out of the box on a local setup, you should measure a ~10x speedup. The specific performance boost depends on the model and input payload (and your local hardware). To verify you are using the CPU-Accelerated version of a model you can check the x-compute-type header of your requests, which should be cpu+optimized. If you do not see it, it simply means not all optimizations are turned on. This can be for various factors; the model might have been added recently to transformers, or the model can be optimized in several different ways and the best one depends on your use case. If you contact us at api-enterprise@huggingface.co, we’ll be able to increase the inference speed for you, depending on your actual use case."
  }
  else{
    textArea.value = ""
  }
  verifyTextLength();
});

textArea.addEventListener("input",verifyTextLength);

submitButton.addEventListener("click", submitData);

function verifyTextLength(e) {
 // The e.target property gives us the HTML element that triggered the event, which in this case is the textarea. We save this to a variable called 'textarea'
  const textarea = textArea;

  // Verify the TextArea value.
  if (textarea.value.length > 200 && textarea.value.length < 100000) {
    // Enable the button when text area has value.
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

function submitData(e) {

 // This is used to add animation to the submit button
  submitButton.classList.add("submit-button--loading");

  const text_to_summarize = textArea.value;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "text_to_summarize": text_to_summarize
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  // Send the text to the server using fetch API

 // Note - here we can omit the “baseUrl” we needed in Postman and just use a relative path to “/summarize” because we will be calling the API from our Replit!  
  fetch('/summarize', requestOptions)
    .then(response => response.text()) // Response will be summarized text
    .then(summary => {
      // Do something with the summary response from the back end API!

      // Set the output text area with new summary
      summarizedTextArea.value = summary;

      // Stop the spinning loading animation
      submitButton.classList.remove("submit-button--loading");
    })
    .catch(error => {
      console.log(error.message);
    });
}

const clipBtn=document.getElementById("clip-btn");

clipBtn.addEventListener("click", function() {
  navigator.clipboard.writeText(summarizedTextArea.value);
});