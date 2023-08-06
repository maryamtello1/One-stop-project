import openai
import json

# Define the get_current_weather function and run_conversation function as shown in the previous code.

def main():
    messages = []
    
    while True:
        # Prompt the user for input
        user_input = input("You: ")

        # Add the user's message to the messages list
        messages.append({"role": "user", "content": user_input})
        
        # Get GPT-3.5 response
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo-0613",
            messages=messages,
        )
        
        # Get the assistant's reply from the response
        response_message = response["choices"][0]["message"]

        # Display the assistant's reply to the user
        print("Assistant:", response_message["content"])
        
        messages.append(response_message)

if __name__ == "__main__":
    main()
    print("This is a test")