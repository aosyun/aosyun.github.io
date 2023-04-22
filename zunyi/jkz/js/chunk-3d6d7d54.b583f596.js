//字体自适应开始
    fontSize = ()=>{
        const clientWidth = document.documentElement.clientWidth;
        const  n = 20*(clientWidth/380) > 100?100:36*(clientWidth/380);
        document.documentElement.style.fontSize = n + 'px';
    }
    window.addEventListener('load',fontSize);
    window.addEventListener('resize',fontSize);