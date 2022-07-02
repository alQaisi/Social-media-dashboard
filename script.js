var themeSelector=document.querySelector("#theme");
themeSelector.addEventListener("click",selectTheme);

function selectTheme(){
    const theme=document.body.className=="dark"?"":"dark";
    localStorage.setItem("theme",theme);
    document.body.className=theme;
}

function loadTheme(){
    const theme=localStorage.getItem("theme");
    themeSelector.checked=theme=="dark"?true:false;
    document.body.className=theme;
}
loadTheme();
