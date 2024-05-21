

export default async function createMessage(req, res) {
  const { messages } = req.body;
  const apiKey = process.env.OPENAI_API_KEY;
  const url = 'https://api.openai.com/v1/chat/completions';

  const body = JSON.stringify({
    messages,
    model: 'gpt-3.5-turbo',
    stream: false
  });

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body
    });
    if (!response.ok) {
      throw new Error('Failed to fetch bot response');
    }
    const data = await response.json();
   
    if (!data || !Array.isArray(data.choices) || data.choices.length === 0) {
      throw new Error('Invalid bot response');
    }
  
    let botResponse = data.choices[0].message.content.trim();
    // Check if bot response indicates the need to book an appointment
    if (botResponse.includes('schedule an appointment') || botResponse.includes('consultation with a doctor')) {
      const appointmentDate = ''; // Get appointment date from user input or another source
      const appointmentTime = ''; // Get appointment time from user input or another source
      
      // Update bot response to include appointment confirmation message
      botResponse += `\n\nYour appointment has been scheduled for ${appointmentDate} at ${appointmentTime}.`;
    }
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
