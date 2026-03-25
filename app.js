let btn = document.querySelector("button");
btn.addEventListener("click", function(){

    let h1 = document.querySelector("h1");
    let RandomColor = GenerateColor();
    h1.innerText = RandomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = RandomColor;

    console.log("Color Changed");
})

function GenerateColor(){
    let red =  Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `Rgb(${red}, ${green}, ${blue})`;
    return color;
}
