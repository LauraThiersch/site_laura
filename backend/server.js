const express = require('express');
const cors = require('cors');
// const axios = require('axios'); // Removido - não utilizado no momento
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Zoho Mail API configuration (use environment variables in production)
// const ZOHO_CONFIG = {
//   clientId: process.env.ZOHO_CLIENT_ID || 'YOUR_CLIENT_ID',
//   clientSecret: process.env.ZOHO_CLIENT_SECRET || 'YOUR_CLIENT_SECRET',
//   refreshToken: process.env.ZOHO_REFRESH_TOKEN || 'YOUR_REFRESH_TOKEN',
//   fromEmail: process.env.ZOHO_FROM_EMAIL || 'newsletter@lauraneuroped.com.br',
//   toEmail: process.env.ZOHO_TO_EMAIL || 'contato@lauraneuroped.com.br'
// };

// File to store subscribers
const SUBSCRIBERS_FILE = path.join(__dirname, 'subscribers.json');

// Initialize subscribers file if it doesn't exist
if (!fs.existsSync(SUBSCRIBERS_FILE)) {
  fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify([], null, 2));
}

// TODO: Implementar funções do Zoho Mail API quando necessário

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

// Newsletter subscription endpoint
app.post('/api/newsletter/subscribe', async (req, res) => {
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

    // TODO: Implementar envio de email via Zoho Mail API
    // Por enquanto, apenas salva o inscrito
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
});

// Get subscribers endpoint (for admin use)
app.get('/api/newsletter/subscribers', (req, res) => {
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
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Newsletter API available at http://localhost:${PORT}/api/newsletter/subscribe`);
}); 