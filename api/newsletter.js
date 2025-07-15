const fs = require('fs');
const path = require('path');

// File to store subscribers (in production, use a database)
const SUBSCRIBERS_FILE = path.join(process.cwd(), 'subscribers.json');

// Initialize subscribers file if it doesn't exist
if (!fs.existsSync(SUBSCRIBERS_FILE)) {
  fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify([], null, 2));
}

// Save subscriber to file
function saveSubscriber(subscriber) {
  try {
    const subscribers = JSON.parse(fs.readFileSync(SUBSCRIBERS_FILE, 'utf8'));
    
    // Check if email already exists
    const existingSubscriber = subscribers.find(sub => sub.email === subscriber.email);
    if (existingSubscriber) {
      return { success: false, message: 'Email já cadastrado!' };
    }

    // Add timestamp
    subscriber.timestamp = new Date().toISOString();
    subscribers.push(subscriber);
    
    fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2));
    return { success: true, message: 'Inscrito salvo com sucesso!' };
  } catch (error) {
    console.error('Error saving subscriber:', error);
    return { success: false, message: 'Erro ao salvar inscrito!' };
  }
}

export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const { email, name, interests } = req.body;

      // Validate input
      if (!email || !name) {
        return res.status(400).json({
          success: false,
          message: 'Email e nome são obrigatórios!'
        });
      }

      // Save subscriber
      const saveResult = saveSubscriber({ email, name, interests });
      if (!saveResult.success) {
        return res.status(400).json(saveResult);
      }

      // TODO: Implementar envio de email via Zoho Mail API quando necessário
      console.log(`Novo inscrito: ${name} (${email}) - Interesses: ${interests.join(', ')}`);

      res.json({
        success: true,
        message: 'Inscrição realizada com sucesso! Verifique seu email.'
      });

    } catch (error) {
      console.error('Newsletter subscription error:', error);
      res.status(500).json({
        success: false,
        message: 'Erro interno do servidor. Tente novamente.'
      });
    }
  } else if (req.method === 'GET') {
    // Get subscribers endpoint (for admin use)
    try {
      const subscribers = JSON.parse(fs.readFileSync(SUBSCRIBERS_FILE, 'utf8'));
      res.json({
        success: true,
        subscribers: subscribers
      });
    } catch (error) {
      console.error('Error reading subscribers:', error);
      res.status(500).json({
        success: false,
        message: 'Erro ao ler inscritos!'
      });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
} 