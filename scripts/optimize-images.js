const imagemin = require('imagemin').default;
const imageminWebp = require('imagemin-webp').default;

(async () => {
  console.log('🖼️ Iniciando otimização de imagens...');
  
  try {
    // Busca imagens em todas as subpastas
    const files = await imagemin(['src/assets/images/**/*.{jpg,png,JPG,PNG}'], {
      destination: 'src/assets/images/optimized',
      plugins: [
        imageminWebp({
          quality: 75,
          method: 6
        })
      ]
    });
    
    console.log('✅ Imagens otimizadas:', files.length);
    files.forEach(file => {
      console.log(`   - ${file.destinationPath}`);
    });
    
    console.log('🎯 Otimização concluída!');
  } catch (error) {
    console.error('❌ Erro na otimização:', error.message);
  }
})(); 