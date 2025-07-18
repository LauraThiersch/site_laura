# Backend API - Newsletter Dra. Laura Thiersch

Este é o backend para o sistema de newsletter do site da Dra. Laura Thiersch, integrado com Zoho Mail API.

## Configuração

### 1. Instalar dependências
```bash
cd backend
npm install
```

### 2. Configurar emails
Edite o arquivo `server.js` e atualize as seguintes configurações:

```javascript
const ZOHO_CONFIG = {
  clientId: process.env.ZOHO_CLIENT_ID || 'YOUR_CLIENT_ID',
  clientSecret: process.env.ZOHO_CLIENT_SECRET || 'YOUR_CLIENT_SECRET',
  refreshToken: process.env.ZOHO_REFRESH_TOKEN || 'YOUR_REFRESH_TOKEN',
  fromEmail: process.env.ZOHO_FROM_EMAIL || 'newsletter@lauraneuroped.com.br',
  toEmail: process.env.ZOHO_TO_EMAIL || 'your_contact_email_here'
};
```

### 3. Executar o servidor
```bash
# Desenvolvimento (com auto-reload)
npm run dev

# Produção
npm start
```

O servidor estará disponível em `http://localhost:3001`

## Endpoints

### POST /api/newsletter/subscribe
Inscreve um novo usuário na newsletter.

**Body:**
```json
{
  "email": "usuario@exemplo.com",
  "name": "Nome do Usuário",
  "interests": ["TEA", "TDAH"]
}
```

**Response:**
```json
{
  "success": true,
  "message": "Inscrição realizada com sucesso! Verifique seu email."
}
```

### GET /api/newsletter/subscribers
Lista todos os inscritos (para uso administrativo).

### GET /api/health
Verifica se o servidor está funcionando.

## Funcionalidades

- ✅ Validação de email
- ✅ Verificação de duplicatas
- ✅ Envio de email de confirmação para o inscrito
- ✅ Notificação por email para o administrador
- ✅ Armazenamento local dos inscritos
- ✅ Integração com Zoho Mail API

## Arquivos gerados

- `subscribers.json`: Lista de todos os inscritos
- Logs no console do servidor

## Deploy

Para deploy em produção, considere:

1. Usar variáveis de ambiente para as credenciais
2. Configurar HTTPS
3. Usar um banco de dados real (PostgreSQL, MongoDB, etc.)
4. Configurar logs adequados
5. Implementar rate limiting
6. Adicionar autenticação para endpoints administrativos

## Troubleshooting

### Erro de CORS
Se houver problemas de CORS, verifique se o frontend está acessando a URL correta.

### Erro de autenticação Zoho
Se o refresh token expirar, gere um novo seguindo os passos da documentação Zoho.

### Email não enviado
Verifique:
- Configuração do email remetente
- Permissões da API Zoho
- Logs do servidor 