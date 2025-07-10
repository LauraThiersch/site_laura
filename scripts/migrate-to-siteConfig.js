#!/usr/bin/env node

/**
 * Script de Migração para siteConfig
 * Migra todos os dados hardcoded para usar a configuração centralizada
 */

const fs = require('fs');
const path = require('path');

// Dados que precisam ser migrados
const dataToMigrate = {
  // Telefone
  '5531985486226': 'siteConfig.contact.whatsapp',
  '+5531985486226': 'siteConfig.contact.phone',
  
  // Email
  'contato@lauraneuroped.com.br': 'siteConfig.contact.email',
  
  // Endereço
  'Rua Turquesa, 347': 'siteConfig.contact.address.street',
  'Belo Horizonte': 'siteConfig.contact.address.city',
  'MG': 'siteConfig.contact.address.state',
  '30411-177': 'siteConfig.contact.address.zipCode',
  'BR': 'siteConfig.contact.address.country',
  
  // Coordenadas
  '-19.93085798660937': 'siteConfig.contact.coordinates.latitude',
  '-43.96385768462244': 'siteConfig.contact.coordinates.longitude',
  
  // Nome completo
  'Dra. Laura Maria Silva Thiersch': 'siteConfig.contact.fullName',
  
  // Google Analytics
  'G-RWY87ZSVH3': 'siteConfig.googleAnalyticsId',
  
  // URL base
  'https://www.laurathiersch.com.br': 'siteConfig.baseUrl'
};

// Extensões de arquivo para processar
const extensions = ['.tsx', '.ts', '.js', '.jsx'];

// Diretórios para ignorar
const ignoreDirs = ['node_modules', '.git', 'build', 'dist'];

function shouldProcessFile(filePath) {
  const ext = path.extname(filePath);
  return extensions.includes(ext) && !filePath.includes('node_modules');
}

function migrateFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Verificar se já tem import do siteConfig
    const hasImport = content.includes('import { siteConfig }');
    
    // Adicionar import se necessário
    if (!hasImport && Object.values(dataToMigrate).some(value => content.includes(value.split('.')[1]))) {
      const importStatement = "import { siteConfig } from '../config/siteConfig';\n";
      content = importStatement + content;
      modified = true;
    }
    
    // Substituir dados hardcoded
    for (const [oldValue, newValue] of Object.entries(dataToMigrate)) {
      if (content.includes(oldValue)) {
        // Substituir apenas em contextos apropriados (não em strings de template)
        const regex = new RegExp(`"${oldValue}"|'${oldValue}'`, 'g');
        content = content.replace(regex, `{${newValue}}`);
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Migrado: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Erro ao processar ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let migratedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !ignoreDirs.includes(item)) {
      migratedCount += processDirectory(fullPath);
    } else if (stat.isFile() && shouldProcessFile(fullPath)) {
      if (migrateFile(fullPath)) {
        migratedCount++;
      }
    }
  }
  
  return migratedCount;
}

// Executar migração
console.log('🚀 Iniciando migração para siteConfig...\n');

const srcPath = path.join(__dirname, '..', 'src');
const migratedCount = processDirectory(srcPath);

console.log(`\n✅ Migração concluída! ${migratedCount} arquivos migrados.`);
console.log('\n📋 Próximos passos:');
console.log('1. Verificar se todos os imports estão corretos');
console.log('2. Testar a aplicação');
console.log('3. Criar arquivo .env com as variáveis reais');
console.log('4. Remover dados hardcoded restantes manualmente'); 