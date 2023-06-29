// comandos em js para fazer a musica dar autoplay ao trocar de mundo!

window.addEventListener('click', function () { 
    const audio = this.document.getElementById('music');
    audio.play();
    audio.volume = 0.2
 })
 function switchTheme(){
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
   //  document.body.classList.toggle('link-topo');
    const theme = document.body.classList[0];

    const music = theme === 'light-theme' ? 'normal-world.mpeg' : 'inverted-world.mpeg'
    const audio = document.getElementById('music');
    audio.src = `assets/musics/${music}`;
    audio.play();
    audio.volume = 0.2;
 }