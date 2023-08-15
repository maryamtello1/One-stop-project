function generateEmailResponse(question) {
    return fetch("https://api.openai.com/v1/chat/completions", {
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
        return data.choices[0].message.content;
    });
}

// Expose the function to other scripts
window.generateEmailResponse = generateEmailResponse;
