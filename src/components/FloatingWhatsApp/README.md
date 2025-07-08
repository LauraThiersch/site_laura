# Botão Flutuante do WhatsApp

## 📱 Sobre o Componente

O `FloatingWhatsApp` é um botão flutuante que fica fixo no lado direito da página, permitindo que os usuários entrem em contato rapidamente via WhatsApp para agendar consultas.

## ✨ Características

- **Posição fixa**: Sempre visível no canto inferior direito
- **Design responsivo**: Adapta-se a diferentes tamanhos de tela
- **Animações suaves**: Efeitos de hover e entrada
- **Acessibilidade**: Suporte a leitores de tela e navegação por teclado
- **Rastreamento GA4**: Integração com Google Analytics
- **Tooltip informativo**: Mostra "Agendar Consulta" no hover

## 🎯 Funcionalidades

### Props Disponíveis

```typescript
interface FloatingWhatsAppProps {
  phoneNumber?: string;    // Número do WhatsApp (padrão: 5531995626630)
  message?: string;        // Mensagem pré-definida
  className?: string;      // Classes CSS adicionais
}
```

### Rastreamento de Eventos

O componente rastreia automaticamente:
- Cliques no botão
- Página onde foi clicado
- Tipo de conversão (WhatsApp)
- Dados para análise de conversão

## 🎨 Estilos

### Desktop
- Tamanho: 60x60px
- Posição: 20px do canto inferior direito
- Tooltip visível no hover

### Mobile
- Tamanho: 50-55px (responsivo)
- Posição: 10-15px do canto
- Tooltip oculto para economizar espaço

### Animações
- **Entrada**: Fade in com escala
- **Hover**: Escala 1.1x + rotação do ícone
- **Pulso**: Efeito contínuo de destaque
- **Reduzido**: Desabilitado para usuários com preferência

## 📱 Uso

```tsx
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp';

// Uso básico
<FloatingWhatsApp />

// Com props personalizadas
<FloatingWhatsApp 
  phoneNumber="5531995626630"
  message="Olá! Gostaria de agendar uma consulta."
  className="custom-floating"
/>
```

## 🔧 Configuração

### Mensagem Padrão
```
"Olá! Gostaria de agendar uma consulta com a Dra. Laura Thiersch."
```

### Número Padrão
```
"5531995626630"
```

## 🎯 Benefícios

1. **Conversão**: Facilita o contato direto
2. **UX**: Sempre acessível, não importa onde o usuário esteja
3. **Mobile-first**: Otimizado para dispositivos móveis
4. **Analytics**: Rastreamento completo de interações
5. **Acessibilidade**: Segue padrões WCAG

## 🚀 Implementação

O componente está integrado no `App.tsx` e aparece em todas as páginas do site, garantindo máxima visibilidade e facilidade de contato. 