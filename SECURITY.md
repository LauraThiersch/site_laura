# 🔒 Política de Segurança e Privacidade

## 🛡️ Proteção de Dados Sensíveis

### ❌ NÃO EXPOR:
- Nomes completos de pessoas
- Endereços residenciais
- Telefones pessoais
- Emails pessoais
- CPF, RG, CNPJ
- Dados bancários
- Senhas ou tokens
- Estratégias de negócio
- Configurações internas

### ✅ PERMITIDO EXPOR:
- Nome profissional (Dra. Laura Thiersch)
- Endereço do consultório
- Telefone do consultório
- Email profissional
- Informações públicas de contato

## 📋 Checklist de Segurança

### Antes de Commitar:
- [ ] Remover dados pessoais de comentários
- [ ] Verificar se não há tokens expostos
- [ ] Limpar estratégias de negócio
- [ ] Remover configurações internas
- [ ] Verificar se não há dados sensíveis

### Documentação:
- [ ] Manter apenas informações públicas
- [ ] Usar variáveis de ambiente para dados sensíveis
- [ ] Documentar apenas funcionalidades técnicas
- [ ] Não expor estratégias de SEO ou marketing

## 🔐 Variáveis de Ambiente

Use arquivo `.env` para dados sensíveis:
```env
REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX
REACT_APP_DOCTORALIA_ID=doctor-id
REACT_APP_CONTACT_EMAIL=contato@domain.com
```

## 🚨 Em Caso de Vazamento

1. **Imediatamente**: Remover dados sensíveis
2. **Comunicar**: Avisar sobre o vazamento
3. **Auditar**: Verificar todo o código
4. **Prevenir**: Implementar medidas de segurança
5. **Documentar**: Registrar o incidente

## 📞 Contato de Segurança

Para questões de segurança, entre em contato através dos canais oficiais. 