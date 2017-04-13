// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
      todasAsImagens = [
        'philae-parts.jpg',
        'philae-rosetta.jpg',
        'philae-separation.jpg',
        'philae-67-picture.jpg',
        'philae-collecting.jpg'
      ];

var currentImageIndex = 0;

document.querySelector('#anterior').addEventListener('click', function(event){
    currentImageIndex = (currentImageIndex + (todasAsImagens.length - 1)) % todasAsImagens.length;
    changeImage();
});

document.querySelector('#proximo').addEventListener('click', function(event){
    currentImageIndex = (currentImageIndex + 1) % todasAsImagens.length;
    changeImage();
});

var changeImage = function(){
    let img = document.querySelector('#galeria > img');
    img.src = servidorDasImagens + todasAsImagens[currentImageIndex];
};
