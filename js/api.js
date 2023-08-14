document.getElementById("submit").addEventListener("click", function() {
    const question = document.getElementById("question").value;
    
    fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer PUT-YOUR-KEY-HERE" // Replace with your API key
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [
                {
                    "role": "system",
                    "content": "You are a helpful assistant."
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
        document.getElementById("response").innerText = data.choices[0].message.content;
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("response").innerText = "An error occurred.";
    });
});