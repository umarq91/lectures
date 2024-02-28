let container = document.querySelector(".container")

let data;

document.querySelector('button').addEventListener('click', () => {
    const word = document.querySelector('input').value;
    getData(word);
})

async function getData(word){
    console.log(word);
    word = word.replace(/\s/g, "%20");  
    const url = `https://google-search72.p.rapidapi.com/search?q=${word}&gl=us&lr=lang_en&num=10&start=0`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6f1e2ff0b3mshbae9b1db3817843p1fc193jsnd9df49eb4da5',
		'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
	}
};
    try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    data = result?.items


    result?.items.map((item)=>{

        container.innerHTML += `
        <a href="${item.link}">
        <h1> ${item.title}</h1>
        </a>
         ${item.htmlTitle}
         
         <div> ${item.snippet} </div>
         `
    container.innerHTML += `<div>${item.htmlSnippet}</div>`;


    })
} catch (error) {
	console.error(error);
}
}
