# 📊 **GUIA COMPLETO - RASTREAMENTO DE AGENDAMENTOS**

## 🎯 **COMO RASTREAR AGENDAMENTOS NO GOOGLE ANALYTICS**

### **1. EVENTOS CONFIGURADOS NO SITE**

O site está configurado para rastrear **TODOS** os eventos de agendamento automaticamente:

#### **📱 Widget Doctoralia Oficial**
- ✅ **Visualização do Widget**: `doctoralia_official_widget_viewed`
- ✅ **Início do Agendamento**: `doctoralia_booking_started`
- ✅ **Agendamento Concluído**: `doctoralia_booking_completed` (CONVERSÃO)
- ✅ **Clique no Widget**: `doctoralia_widget_clicked`

#### **🖥️ Widget Doctoralia Customizado**
- ✅ **Visualização do Widget**: `booking_widget_viewed`
- ✅ **Seleção de Horário**: `slot_selected`
- ✅ **Tentativa de Agendamento**: `booking_attempt`
- ✅ **Agendamento Concluído**: `booking_completed` (CONVERSÃO)
- ✅ **Erro no Agendamento**: `booking_error`

#### **📞 Outras Formas de Contato**
- ✅ **WhatsApp**: `whatsapp_form_redirect` (CONVERSÃO)
- ✅ **Telefone**: `Clique_Telefone` (CONVERSÃO)
- ✅ **Email**: `Clique_Email` (CONVERSÃO)
- ✅ **Formulário de Contato**: `form_submit_success` (CONVERSÃO)

---

### **2. COMO VERIFICAR NO GOOGLE ANALYTICS**

#### **🔍 Passo 1: Acessar o Google Analytics**
1. Vá para [analytics.google.com](https://analytics.google.com)
2. Selecione a propriedade do site da Dra. Laura
3. Acesse **Relatórios** → **Engajamento** → **Eventos**

#### **📈 Passo 2: Verificar Eventos de Conversão**
1. No menu lateral, vá em **Relatórios** → **Engajamento** → **Eventos**
2. Procure pelos eventos de conversão:
   - `doctoralia_booking_completed`
   - `booking_completed`
   - `whatsapp_form_redirect`
   - `Clique_Telefone`
   - `Clique_Email`
   - `form_submit_success`

#### **🎯 Passo 3: Configurar Conversões**
1. Vá em **Administrador** → **Propriedade** → **Eventos**
2. Clique em **"Criar evento"**
3. Configure os eventos como conversões:
   - **Nome**: `doctoralia_booking_completed`
   - **Condição**: `event_name equals doctoralia_booking_completed`
   - **Marcar como conversão**: ✅ **SIM**

Repita para todos os eventos de conversão.

---

### **3. RELATÓRIOS ESPECÍFICOS PARA AGENDAMENTOS**

#### **📊 Relatório de Conversões**
1. **Relatórios** → **Monetização** → **Conversões**
2. Aqui você verá todas as conversões de agendamento

#### **📈 Relatório de Eventos Personalizados**
1. **Relatórios** → **Engajamento** → **Eventos**
2. Filtre por categoria: `conversao_principal`

#### **🎯 Relatório de Funnel de Agendamento**
1. **Relatórios** → **Engajamento** → **Funnels**
2. Configure o funil:
   - Visualização do widget
   - Início do agendamento
   - Seleção de horário
   - **Agendamento concluído** (CONVERSÃO)

---

### **4. PARÂMETROS RASTREADOS**

Cada evento de agendamento inclui:

#### **📋 Informações Básicas**
- `event_category`: `conversao_principal`
- `event_label`: Tipo de conversão
- `value`: 1 (valor da conversão)
- `currency`: BRL

#### **📍 Informações de Localização**
- `page_location`: URL da página
- `area_conversao`: `neuropediatra_bh`
- `localizacao_consultorio`: `prado_bh`

#### **👤 Informações do Paciente** (quando disponível)
- `patient_age`: Idade do paciente
- `slot_time`: Horário selecionado
- `slot_date`: Data selecionada
- `reason`: Motivo da consulta

---

### **5. ALERTAS E NOTIFICAÇÕES**

#### **🔔 Configurar Alertas**
1. **Administrador** → **Propriedade** → **Alertas personalizados**
2. Crie alertas para:
   - **Agendamento realizado**: Notificar quando `booking_completed` > 0
   - **Falta de agendamentos**: Alertar se não houver conversões em 24h
   - **Pico de conversões**: Notificar quando conversões > média diária

#### **📧 Relatórios Automáticos**
1. **Relatórios** → **Engajamento** → **Eventos**
2. Clique em **"Enviar por email"**
3. Configure relatório diário/semanal de conversões

---

### **6. DASHBOARD PERSONALIZADO**

#### **📊 Métricas Principais**
- **Total de Agendamentos**: Soma de todas as conversões
- **Taxa de Conversão**: Agendamentos / Visualizações do site
- **Fonte de Agendamentos**: Doctoralia vs WhatsApp vs Telefone
- **Horários Mais Procurados**: Análise de `slot_time`
- **Motivos Mais Comuns**: Análise de `reason`

#### **📈 Tendências**
- **Agendamentos por Dia/Semana/Mês**
- **Performance por Página**
- **Conversões por Dispositivo**
- **Taxa de Abandono do Funnel**

---

### **7. INTEGRAÇÃO COM GOOGLE ADS**

#### **🎯 Conversões para Campanhas**
1. **Administrador** → **Propriedade** → **Conversões**
2. Vincule os eventos de agendamento ao Google Ads
3. Configure otimização automática de lances

#### **📊 Relatórios de Performance**
- **Custo por Agendamento**
- **ROAS (Retorno sobre Investimento)**
- **Palavras-chave que geram agendamentos**
- **Dispositivos mais eficazes**

---

### **8. MONITORAMENTO EM TEMPO REAL**

#### **📱 Google Analytics Real-Time**
1. **Relatórios** → **Relatórios em tempo real**
2. Monitore:
   - Usuários ativos
   - Eventos acontecendo agora
   - Conversões em tempo real

#### **🔍 Debug de Eventos**
1. Use o **Google Analytics Debugger** (extensão do Chrome)
2. Verifique se os eventos estão sendo enviados corretamente
3. Teste o fluxo completo de agendamento

---

## ✅ **RESUMO - COMO VERIFICAR AGENDAMENTOS**

### **📍 Onde Verificar:**
1. **Google Analytics** → **Eventos** → `booking_completed`
2. **Google Analytics** → **Conversões** → Relatório de conversões
3. **Google Analytics** → **Tempo Real** → Eventos acontecendo agora

### **📊 Métricas Principais:**
- **Agendamentos por dia**: Contagem de `booking_completed`
- **Taxa de conversão**: Agendamentos / Visualizações
- **Fonte de agendamentos**: Doctoralia vs WhatsApp vs Telefone
- **Performance por página**: Qual página gera mais agendamentos

### **🎯 Conversões Configuradas:**
- ✅ `doctoralia_booking_completed` (Widget oficial)
- ✅ `booking_completed` (Widget customizado)
- ✅ `whatsapp_form_redirect` (WhatsApp)
- ✅ `Clique_Telefone` (Telefone)
- ✅ `Clique_Email` (Email)
- ✅ `form_submit_success` (Formulário)

**Todos os agendamentos estão sendo rastreados automaticamente!** 🎉 