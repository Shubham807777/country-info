let inputArea=document.getElementById('input_area');
let searchBtn=document.getElementById('search_btn');
let result=document.querySelector('.result');
searchBtn.addEventListener("click",()=>{
    let countryName=inputArea.value;
    let finalURL=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    console.log(finalURL)
    fetch(finalURL)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(data[0].continents[0]);
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log(
          Object.values(data[0].languages).toString().split(",").join(", "));
        
          result.innerHTML=`
          <img src="${data[0].flags.svg}"   class="img_flag">
         <h2>${(data[0].name.common)}</h2>
         <div class="All">
         <h4 class="All_things">Continents:
         <span>${(data[0].continents[0])}</span></h4>
         </div>
         <div class="All">
         <h4 class="All_things">Population:
         <span>${(data[0].population)}</span></h4>
         </div>
         <div class="All">
         <h4 class="All_things">Currencies:
         <span>${
            data[0].currencies[Object.keys(data[0].currencies)].name
          } - ${Object.keys(data[0].currencies)[0]}</span></h4>
         </div>
         <div class="All">
         <h4 class="All_things">Languages:
         <span>${(Object.values(data[0].languages).toString().split(",").join(", "))}</span></h4>
         </div>

          
          
          
          
          `
    })
})