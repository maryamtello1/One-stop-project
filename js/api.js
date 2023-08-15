document.getElementById("submit").addEventListener("click", function() {
    const question = document.getElementById("question").value;
    const gooseContainer = document.getElementById("goose-container");
    const responseHeader = document.getElementById("response-header");
    const responseDiv = document.getElementById("response");

    // Display the goose container when the button is clicked
    gooseContainer.style.display = "block";

    fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer PUT_YOUR_KEY_HERE" // Replace with your API key
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [
                {
                    "role": "system",
                    "content": "You are an email answering assistant for the University of Michigan Dearborn. Please end your emails with 'Go Blue - Go Dearborn! then [Your name] and then UM-Dearborn One-Stop Student Services, make sure they are all separated by an empty line"
                },
                {
                    "role": "user",
                    "content": question
                }
            ]
        })
    })
    .then(response => response.json())
    .then(data => {
        gooseContainer.style.display = "none";
        responseHeader.style.display = "block";
        responseDiv.innerText = data.choices[0].message.content;
    })
    .catch(error => {
        console.error("Error:", error);
        gooseContainer.style.display = "none";  
        responseHeader.style.display = "block";
        responseDiv.innerText = "An error occurred.";
    });
});
