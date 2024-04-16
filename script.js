var NumParagraphs =  document.getElementById('numParagraphs');
var Generate =  document.getElementById('generate');
var Copy =  document.getElementById('copy');
var Output =  document.getElementById('output');

let options = {
    method : "GET",
    headers: { 'X-Api-Key': apiKey},
}

let url = "https://api.api-ninjas.com/v1/loremipsum?paragraphs=";

let generateParas = () =>{

    let NoOfPara = NumParagraphs.value;
    let finalurl = url + NoOfPara;

    fetch(finalurl,options).then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data);
        Output.innerText = data.text;
    })

};


Copy.addEventListener('click', async () => { // Use arrow function for better 'this' binding
    const textDetails = Output.innerText;
  
    try {
      await navigator.clipboard.writeText(textDetails);
      console.log('Text copied to clipboard!'); // Informative message
    } catch (err) {
      console.error('Failed to copy text:', err);
      // Handle errors gracefully (optional):
      // - Show an error message to the user
      // - Provide retry options
    }
  });
  


Generate.addEventListener("click",generateParas );
window.addEventListener("load",generateParas);




  
  // Call the function with the text you want to copy
//   copyTextToClipboard('This text will be copied to your clipboard!')


// function copyData(){
//   navigator.clipboard.writeText(Output.innerText);
//   alert("text copied");
// }
