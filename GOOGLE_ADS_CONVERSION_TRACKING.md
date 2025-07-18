# 🎯 **RASTREAMENTO DE CONVERSÕES GOOGLE ADS - DRA. LAURA THIERSCH**

## 📋 **RESUMO DA IMPLEMENTAÇÃO**

Este documento explica como foi implementado o rastreamento de conversões do Google Ads para o site da Dra. Laura Thiersch, seguindo exatamente as especificações solicitadas pelo Google Ads.

## 🚀 **EVENTOS IMPLEMENTADOS**

### **1. Conversão de Contato (`ads_conversion_Fale_conosco_1`)**

**Onde é disparado:**
- ✅ **Carregamento da página**: Página `/contato`
- ✅ **Clique**: Botões de WhatsApp, telefone, email e formulário
- ✅ **Conversão**: Formulário de contato enviado com sucesso

**Parâmetros incluídos:**
```javascript
{
  event_category: 'Conversao_Contato',
  event_label: 'Formulario_Contato_Enviado',
  value: 1,
  currency: 'BRL',
  conversion_type: 'form',
  contact_method: 'form',
  area_conversao: 'neuropediatra_bh',
  localizacao_consultorio: 'prado_bh'
}
```

### **2. Conversão de Agendamento (`ads_conversion_Agendamento_1`)**

**Onde é disparado:**
- ✅ **Carregamento da página**: Página `/agendar-consulta`
- ✅ **Clique**: Botões de agendamento (Doctoralia, WhatsApp, telefone)
- ✅ **Conversão**: Agendamento realizado via Doctoralia

**Parâmetros incluídos:**
```javascript
{
  event_category: 'Conversao_Agendamento',
  event_label: 'Agendamento_Realizado',
  value: 1,
  currency: 'BRL',
  conversion_type: 'booking',
  booking_method: 'doctoralia',
  area_conversao: 'neuropediatra_bh',
  localizacao_consultorio: 'prado_bh'
}
```

## 📁 **ARQUIVOS CRIADOS/MODIFICADOS**

### **Novos Arquivos:**
1. `src/services/GoogleAdsConversionService.ts` - Serviço principal de rastreamento
2. `src/hooks/useBookingConversionTracking.ts` - Hook para detectar agendamentos
3. `GOOGLE_ADS_CONVERSION_TRACKING.md` - Esta documentação

### **Arquivos Modificados:**
1. `src/pages/Contato/contato.tsx` - Adicionado rastreamento de conversão
2. `src/pages/Agendamento/agendamento.tsx` - Adicionado rastreamento de conversão
3. `src/components/Booking/BookingWidgetSelector.tsx` - Adicionado rastreamento de cliques

## 🔧 **COMO FUNCIONA**

### **1. Serviço de Conversões (`GoogleAdsConversionService`)**

O serviço centraliza todas as funções de rastreamento:

```typescript
// Rastrear conversão de contato
GoogleAdsConversionService.trackContactConversion(params);

// Rastrear conversão de agendamento
GoogleAdsConversionService.trackBookingConversion(params);

// Rastrear cliques
GoogleAdsConversionService.trackContactClick('whatsapp', params);
GoogleAdsConversionService.trackBookingClick('doctoralia', params);

// Rastrear carregamento de páginas
GoogleAdsConversionService.trackContactPageView(params);
GoogleAdsConversionService.trackBookingPageView(params);
```

### **2. Detecção Automática de Agendamentos**

O hook `useBookingConversionTracking` monitora automaticamente:
- Mudanças no DOM
- Texto da página
- URLs de confirmação
- Elementos de sucesso do Doctoralia

### **3. Integração com Google Analytics 4**

Além dos eventos do Google Ads, também são enviados eventos para o GA4:
- `form_submit_success` - Para conversões de contato
- `booking_completed` - Para conversões de agendamento
- `contact_button_click` - Para cliques de contato
- `booking_button_click` - Para cliques de agendamento

## 📊 **COMO VERIFICAR NO GOOGLE ADS**

### **1. Acessar Conversões**
1. Vá para [ads.google.com](https://ads.google.com)
2. Acesse sua conta: **104-582-8268**
3. Vá em **Ferramentas e configurações** → **Conversões**

### **2. Verificar Eventos**
1. **Conversões** → **Eventos**
2. Procure por:
   - `ads_conversion_Fale_conosco_1` - Conversões de contato
   - `ads_conversion_Agendamento_1` - Conversões de agendamento

### **3. Testar em Tempo Real**
1. **Relatórios** → **Relatórios em tempo real**
2. Acesse o site e realize as ações
3. Verifique se os eventos aparecem

## 🧪 **COMO TESTAR**

### **1. Teste de Contato**
1. Acesse `/contato`
2. Preencha o formulário
3. Envie a mensagem
4. Verifique no console: `🎯 Conversão de contato rastreada`

### **2. Teste de Agendamento**
1. Acesse `/agendar-consulta`
2. Clique nos botões de agendamento
3. Tente agendar uma consulta
4. Verifique no console: `🎯 Agendamento detectado e rastreado!`

### **3. Verificação no Console**
Abra o DevTools (F12) e procure por:
```
🎯 Conversão de contato rastreada
🎯 Conversão de agendamento rastreada
🎯 Clique de contato rastreado
🎯 Clique de agendamento rastreado
```

## ⚙️ **CONFIGURAÇÃO NO GOOGLE ADS**

### **1. Configurar Conversões**
1. **Ferramentas e configurações** → **Conversões**
2. Clique em **+ Nova conversão**
3. Configure:
   - **Nome**: "Contato - Formulário Enviado"
   - **Tipo**: "Ação do site"
   - **Evento**: `ads_conversion_Fale_conosco_1`
   - **Valor**: "Usar valores diferentes para cada conversão"

4. Repita para agendamento:
   - **Nome**: "Agendamento - Consulta Marcada"
   - **Tipo**: "Ação do site"
   - **Evento**: `ads_conversion_Agendamento_1`
   - **Valor**: "Usar valores diferentes para cada conversão"

### **2. Configurar Campanhas**
1. Vá para sua campanha **"Pesquisa - Dra. Laura - Neuropediatria Foco TDAH"**
2. **Configurações** → **Conversões**
3. Selecione as conversões criadas
4. Configure a estratégia de lances para "Maximizar conversões"

## 🔍 **MONITORAMENTO**

### **1. Métricas Importantes**
- **Taxa de conversão**: Conversões / Cliques
- **Custo por conversão**: Custo / Conversões
- **ROAS**: Receita / Custo

### **2. Relatórios Recomendados**
1. **Conversões** → **Relatório de conversões**
2. **Palavras-chave** → **Relatório de qualidade**
3. **Anúncios** → **Relatório de performance**

## 🚨 **TROUBLESHOOTING**

### **Problema**: Eventos não aparecem
**Solução**:
1. Verifique se o Google Analytics está carregado
2. Abra o console e procure por erros
3. Verifique se o `gtag` está disponível

### **Problema**: Conversões não são detectadas
**Solução**:
1. Verifique se os seletores CSS estão corretos
2. Teste manualmente os eventos
3. Verifique se o Doctoralia está funcionando

### **Problema**: Valores incorretos
**Solução**:
1. Verifique os parâmetros no `GoogleAdsConversionService`
2. Ajuste os valores conforme necessário
3. Teste com valores diferentes

## 📞 **SUPORTE**

Para dúvidas ou problemas:
- **Email**: laurathierschneuroped@gmail.com
- **WhatsApp**: (31) 98548-6226
- **Documentação**: Este arquivo

---

**✅ IMPLEMENTAÇÃO CONCLUÍDA**
- Rastreamento de contato: ✅
- Rastreamento de agendamento: ✅
- Eventos do Google Ads: ✅
- Integração com GA4: ✅
- Documentação: ✅ 