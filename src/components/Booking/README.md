# Sistema de Agendamento - Integração Doctoralia

## 📋 Visão Geral

Este sistema implementa um widget de agendamento integrado com a API do Doctoralia, permitindo que os pacientes agendem consultas diretamente no site da Dra. Laura Thiersch sem sair da página.

## 🏗️ Arquitetura

### Componentes Principais

- **`DoctoraliaOfficialWidget.tsx`** - Widget oficial do Doctoralia
- **`DoctoraliaWidget.tsx`** - Widget customizado de agendamento
- **`BookingWidgetSelector.tsx`** - Seletor entre widgets
- **`booking.css`** - Estilos dos widgets
- **`DoctoraliaAPI.ts`** - Serviço de integração com a API
- **`AnalyticsService.ts`** - Rastreamento de eventos e conversões
- **`useDoctoraliaBooking.ts`** - Hook personalizado para gerenciar estado

### Páginas

- **`agendamento.tsx`** - Página dedicada de agendamento
- **`agendamento.css`** - Estilos da página

### Configuração

- **`doctoralia.ts`** - Configurações centralizadas do Doctoralia

## 🚀 Funcionalidades

### ✅ Implementadas

1. **Widget Oficial do Doctoralia**
   - Integração direta com o widget oficial
   - Carregamento automático do script
   - Rastreamento de eventos nativos
   - Configuração flexível

2. **Widget Customizado**
   - Seleção de data e horário
   - Formulário de dados do paciente
   - Validação em tempo real
   - Confirmação de agendamento

3. **Seletor de Widgets**
   - Escolha entre widget oficial e customizado
   - Apenas visível em desenvolvimento
   - Rastreamento de mudanças

4. **Integração com Analytics**
   - Rastreamento de visualização do widget
   - Eventos de seleção de horário
   - Conversões de agendamento
   - Erros e falhas

5. **Experiência do Usuário**
   - Interface responsiva
   - Animações suaves
   - Feedback visual
   - Tratamento de erros

6. **SEO Otimizado**
   - Meta tags específicas
   - Schema.org markup
   - URLs amigáveis
   - Breadcrumbs

### 🔄 Em Desenvolvimento

1. **Integração Real com Doctoralia**
   - Configuração da API oficial
   - Autenticação OAuth 2.0
   - Webhooks para sincronização

2. **Sistema de Notificações**
   - Email de confirmação
   - SMS de lembrete
   - WhatsApp Business

3. **Funcionalidades Avançadas**
   - Cancelamento online
   - Reagendamento
   - Histórico de consultas

## 📦 Dependências

```bash
npm install react-hook-form @hookform/resolvers yup react-hot-toast date-fns react-calendar
```

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# API Doctoralia
REACT_APP_DOCTORALIA_API_URL=https://api.doctoralia.com.br
REACT_APP_DOCTORALIA_API_KEY=your_api_key_here

# Google Analytics
REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# WhatsApp Business
REACT_APP_WHATSAPP_BUSINESS_ACCESS_TOKEN=your_token_here
REACT_APP_WHATSAPP_PHONE_NUMBER_ID=your_phone_id_here
```

### Uso dos Widgets

#### Widget Oficial (Recomendado)

```tsx
import DoctoraliaOfficialWidget from './components/Booking/DoctoraliaOfficialWidget';

<DoctoraliaOfficialWidget
  doctorId="laura-maria-silva-thiersch"
  type="big_with_calendar"
  showBranding={false}
  showOpinions={false}
  className="custom-class"
/>
```

#### Widget Customizado

```tsx
import DoctoraliaWidget from './components/Booking/DoctoraliaWidget';

<DoctoraliaWidget
  doctorId="laura-maria-silva-thiersch"
  specialtyId="neurologista-pediatrico"
  className="custom-class"
/>
```

#### Seletor de Widgets (Desenvolvimento)

```tsx
import BookingWidgetSelector from './components/Booking/BookingWidgetSelector';

<BookingWidgetSelector
  doctorId="laura-maria-silva-thiersch"
  specialtyId="neurologista-pediatrico"
  defaultWidget="official"
  className="custom-class"
/>
```

## 📊 Analytics

### Eventos Rastreados

1. **`booking_widget_viewed`** - Widget visualizado
2. **`slot_selected`** - Horário selecionado
3. **`booking_attempt`** - Tentativa de agendamento
4. **`booking_completed`** - Agendamento concluído
5. **`booking_error`** - Erro no agendamento

### Parâmetros Importantes

- `event_category`: Categoria do evento
- `event_label`: Label específico
- `value`: Valor da conversão
- `currency`: Moeda (BRL)
- `patient_age`: Idade do paciente
- `slot_time`: Horário selecionado
- `slot_date`: Data selecionada

## 🎨 Personalização

### Cores e Estilos

As cores principais podem ser alteradas no arquivo `booking.css`:

```css
:root {
  --primary-color: #4CAF50;
  --primary-hover: #388E3C;
  --secondary-color: #F7BF3C;
  --text-color: #333;
  --text-light: #666;
  --border-color: #e0e0e0;
  --error-color: #d32f2f;
  --success-color: #2e7d32;
}
```

### Responsividade

O widget é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- **Desktop**: Layout em grid com múltiplas colunas
- **Tablet**: Layout adaptado com colunas reduzidas
- **Mobile**: Layout em coluna única

## 🔒 Segurança

### Validação de Dados

- Validação client-side com Yup
- Sanitização de inputs
- Proteção contra XSS
- Validação de tipos TypeScript

### Privacidade

- Dados sensíveis não são logados
- Conformidade com LGPD
- Cookies essenciais apenas
- HTTPS obrigatório

## 🧪 Testes

### Testes Unitários

```bash
npm test -- --testPathPattern=Booking
```

### Testes de Integração

```bash
npm run test:integration
```

## 📈 Performance

### Otimizações Implementadas

1. **Lazy Loading** - Componentes carregados sob demanda
2. **Memoização** - Evita re-renders desnecessários
3. **Code Splitting** - Separação de bundles
4. **Image Optimization** - Imagens otimizadas
5. **Caching** - Cache de horários disponíveis

### Métricas de Performance

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🐛 Troubleshooting

### Problemas Comuns

1. **Widget não carrega**
   - Verificar conexão com internet
   - Verificar configuração da API
   - Verificar console para erros

2. **Horários não aparecem**
   - Verificar se a API está respondendo
   - Verificar configuração do doctorId
   - Verificar logs do servidor

3. **Erro de validação**
   - Verificar se todos os campos obrigatórios estão preenchidos
   - Verificar formato do email
   - Verificar formato do telefone

### Logs de Debug

Ative o modo debug adicionando no `.env`:

```env
REACT_APP_DEBUG_MODE=true
```

## 📞 Suporte

Para dúvidas ou problemas:

- **Email**: contato@lauraneuroped.com.br
- **WhatsApp**: (31) 99562-6630
- **Documentação**: Este README

## 🔄 Versões

- **v1.0.0** - Implementação inicial com mock
- **v1.1.0** - Integração com analytics
- **v1.2.0** - Melhorias de UX e responsividade
- **v2.0.0** - Integração real com Doctoralia (planejado) 