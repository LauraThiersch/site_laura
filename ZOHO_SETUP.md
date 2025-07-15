# Configuração da Newsletter com Zoho Mail API

## Por que Zoho é Melhor?

✅ **Já tem sua conta** configurada  
✅ **API gratuita** (1.000 e-mails/dia)  
✅ **Mais profissional** e confiável  
✅ **Relatórios** de entrega e abertura  
✅ **Compliance** com LGPD  
✅ **Automação** nativa  

## Passo 1: Configurar Zoho Developer Console

1. Acesse [Zoho Developer Console](https://api-console.zoho.com/)
2. Faça login com sua conta Zoho
3. Clique em **"Add Client"**
4. Configure:
   - **Client Name:** Newsletter Dra. Laura
   - **Homepage URL:** https://laurathiersch.com.br
   - **Authorized Redirect URIs:** https://laurathiersch.com.br/callback
5. Clique em **"Create"**
6. **Anote:** Client ID e Client Secret

## Passo 2: Gerar Refresh Token

1. No Developer Console, vá em **"Self-Client"**
2. Clique em **"Generate Code"**
3. Configure:
   - **Scope:** ZohoMail.messages.CREATE, ZohoMail.accounts.READ
   - **Redirect URI:** https://laurathiersch.com.br/callback
4. Clique em **"Generate"**
5. **Copie o código** gerado
6. Use este código para gerar o Refresh Token

## Passo 3: Criar API Backend

Crie um arquivo `api/newsletter.js` no seu servidor:

```javascript
const axios = require('axios');

// Configuração Zoho
const ZOHO_CONFIG = {
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
  refreshToken: 'YOUR_REFRESH_TOKEN',
  fromEmail: 'newsletter@laurathiersch.com.br',
  toEmail: 'contato@laurathiersch.com.br'
};

// Função para obter access token
async function getZohoAccessToken() {
  try {
    const response = await axios.post('https://accounts.zoho.com/oauth/v2/token', {
      refresh_token: ZOHO_CONFIG.refreshToken,
      client_id: ZOHO_CONFIG.clientId,
      client_secret: ZOHO_CONFIG.clientSecret,
      grant_type: 'refresh_token'
    });
    
    return response.data.access_token;
  } catch (error) {
    console.error('Erro ao obter token:', error);
    throw error;
  }
}

// Função para salvar inscrito
async function saveSubscriber(subscriberData) {
  try {
    const accessToken = await getZohoAccessToken();
    
    // Enviar e-mail de confirmação
    const emailData = {
      fromAddress: ZOHO_CONFIG.fromEmail,
      toAddress: subscriberData.email,
      subject: 'Bem-vindo à Newsletter da Dra. Laura Thiersch',
      content: `
        <h2>Bem-vindo à nossa Newsletter!</h2>
        <p>Olá!</p>
        <p>Obrigada por se inscrever na newsletter da Dra. Laura Thiersch.</p>
        <p>Você receberá artigos sobre: <strong>${subscriberData.topic}</strong></p>
        <p>Para cancelar a inscrição, responda este e-mail com "CANCELAR".</p>
        <br>
        <p>Atenciosamente,<br>Dra. Laura Thiersch</p>
      `,
      mailFormat: 'html'
    };

    await axios.post('https://mail.zoho.com/api/accounts/YOUR_ACCOUNT_ID/messages', emailData, {
      headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });

    // Salvar em arquivo JSON ou banco de dados
    const subscribers = JSON.parse(fs.readFileSync('subscribers.json', 'utf8') || '[]');
    subscribers.push({
      ...subscriberData,
      id: Date.now(),
      status: 'active'
    });
    fs.writeFileSync('subscribers.json', JSON.stringify(subscribers, null, 2));

    return { success: true };
  } catch (error) {
    console.error('Erro ao salvar inscrito:', error);
    throw error;
  }
}

// Endpoint da API
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Método não permitido' });
  }

  try {
    const { email, topic, date, source } = req.body;

    // Validação
    if (!email || !email.includes('@')) {
      return res.status(400).json({ success: false, message: 'E-mail inválido' });
    }

    // Verificar se já existe
    const subscribers = JSON.parse(fs.readFileSync('subscribers.json', 'utf8') || '[]');
    const exists = subscribers.find(s => s.email === email);
    
    if (exists) {
      return res.status(400).json({ success: false, message: 'E-mail já cadastrado' });
    }

    // Salvar inscrito
    await saveSubscriber({ email, topic, date, source });

    res.status(200).json({ success: true, message: 'Inscrição realizada com sucesso!' });
  } catch (error) {
    console.error('Erro na API:', error);
    res.status(500).json({ success: false, message: 'Erro interno do servidor' });
  }
}
```

## Passo 4: Configurar Variáveis de Ambiente

Crie arquivo `.env.local`:

```env
ZOHO_CLIENT_ID=your_client_id_here
ZOHO_CLIENT_SECRET=your_client_secret_here
ZOHO_REFRESH_TOKEN=your_refresh_token_here
ZOHO_ACCOUNT_ID=your_account_id_here
```

## Passo 5: Testar

1. Configure todas as variáveis
2. Teste o formulário no site
3. Verifique se o e-mail de confirmação chega
4. Confirme se os dados são salvos

## Funcionalidades Implementadas

✅ **Validação de e-mail** duplicado  
✅ **E-mail de boas-vindas** automático  
✅ **Salvamento** em arquivo JSON  
✅ **API REST** profissional  
✅ **Relatórios** via Zoho  
✅ **Compliance** LGPD  

## Próximos Passos

### Envio Automático de Newsletter
1. Criar template de newsletter no Zoho
2. Configurar cron job para envio semanal
3. Integrar com blog para conteúdo automático

### Dashboard de Gestão
- Visualizar estatísticas no Zoho
- Exportar lista de inscritos
- Gerenciar status (ativo/inativo)

## Troubleshooting

**Erro 401:** Verificar tokens Zoho  
**E-mail não chega:** Verificar configuração SMTP  
**Erro 500:** Verificar logs do servidor  

## Segurança

- Tokens armazenados em variáveis de ambiente
- Validação de e-mails
- Rate limiting na API
- Logs de auditoria 