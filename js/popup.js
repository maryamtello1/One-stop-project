document.getElementById("submit").addEventListener("click", function() {
    const question = document.getElementById("question").value;
    const gooseContainer = document.getElementById("goose-container");
    const responseHeader = document.getElementById("response-header");
    const responseDiv = document.getElementById("response");

    // Display the goose container when the button is clicked
    gooseContainer.style.display = "block";

    // Call the function from api.js to get the response
    generateEmailResponse(question)
        .then(response => {
            gooseContainer.style.display = "none";
            responseHeader.style.display = "block";
            responseDiv.innerText = response;
        })
        .catch(error => {
            console.error("Error:", error);
            gooseContainer.style.display = "none";  
            responseHeader.style.display = "block";
            responseDiv.innerText = "An error occurred.";
        });
});
