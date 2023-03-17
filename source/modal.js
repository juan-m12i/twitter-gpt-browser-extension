function showModal(tweetText) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
  
    const content = document.createElement('div');
    content.classList.add('modal-content');
  
    const textBox = document.createElement('textarea');
    textBox.classList.add('textbox');
    textBox.value = `Please explain\n\n${tweetText}`;
  
    const sendButton = document.createElement('button');
    sendButton.classList.add('send-button');
    sendButton.innerText = 'Send';
  
    const responseArea = document.createElement('div');
    responseArea.classList.add('response-area');
  
    sendButton.onclick = async () => {
      const messages = [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: `Please explain\n\n${textBox.value}` },
      ];
    
      try {
        const aiResponse = await fetchOpenAIResponse(messages);
        responseArea.innerText = aiResponse;
      } catch (error) {
        console.error('Error fetching data:', error);
        responseArea.innerText = 'Error fetching data. Please try again.';
      }
    };
  
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.innerText = 'Close';
    closeButton.onclick = () => {
      document.body.removeChild(modal);
    };
  
    content.appendChild(textBox);
    content.appendChild(sendButton);
    content.appendChild(responseArea);
    content.appendChild(closeButton);
    modal.appendChild(content);
    document.body.appendChild(modal);
  }