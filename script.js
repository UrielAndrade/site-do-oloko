  const botao = document.createElement('button');
  botao.textContent = 'Tentar Novamente!';
  botao.style.padding = '10px 20px';
  botao.style.fontSize = '20px';
  botao.style.cursor = 'pointer';
  botao.style.backgroundColor = 'red';
  botao.style.color = 'white';
  botao.style.border = 'none';
  botao.style.borderRadius = '5px';
  botao.style.position = 'absolute'; 
  botao.style.top = '50%';
  botao.style.left = '50%'; 
  botao.style.transform = 'translate(-50%, -50%)'; 

  // Adicionando o botão à página
  document.body.appendChild(botao);

  function darSusto() {
    const video = document.createElement('video');
    video.src = '/assents/Maiores feitos do Messi Careca.mp4';  
    video.autoplay = true;
    video.controls = false;
    video.style.position = 'fixed';
    video.style.top = '0';
    video.style.left = '0';
    video.style.width = '100vw';
    video.style.height = '100vh';
    video.style.objectFit = 'cover';
    video.style.zIndex = '9999';

    // Adicionando o vídeo ao corpo
    document.body.appendChild(video);

    // Reproduzindo o som de susto
    for (let i = 0; i < 10; i++) {
      const audio = new Audio('/assents/Passarinho alarme nuclear (estourado).mp4'); 
      audio.play();     
    }
    // nao deu certo MERDA
    // Remove o vídeo após 5 segundos
    setTimeout(() => {
      video.remove();
    }, 5000);
  }

  botao.addEventListener('click', darSusto);