document.getElementById("submit").addEventListener("click", function() {
    const question = document.getElementById("question").value;

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
                    "content": "You are an email answering assistant for the University of Michigan Dearborn. Please end your emails with 'Go Blue - Go Dearborn! then [Your name] and then UM-Dearborn One-Stop Student Services, make sure they are all seperated by an empty line"
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
        // Show the response header when the response is received
        document.getElementById("response-header").style.display = "block";
        document.getElementById("response").innerText = data.choices[0].message.content;
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("response-header").style.display = "block";
        document.getElementById("response").innerText = "An error occurred.";
    });
});
