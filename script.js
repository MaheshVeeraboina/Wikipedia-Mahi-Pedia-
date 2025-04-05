let search=document.getElementById("searchInput");
let spinner=document.getElementById("spinner");
let searchResults=document.getElementById("searchResults");

function createAndAppend(i){
    let {title,link,description}=i;
    
    let div=document.createElement("div");
    div.classList.add("result-item");
    searchResults.appendChild(div);
    
    let a=document.createElement("a");
    a.classList.add("result-title");
    a.href=link;
    a.target="_blank";
    a.textContent=title;
    div.appendChild(a);
    
    let br1=document.createElement("br");
    div.appendChild(br1);
    
    let linkk=document.createElement("a");
    linkk.classList.add('result-url');
    linkk.href=link;
    linkk.target="_blank";
    linkk.textContent=link;
    div.appendChild(linkk);
    
    let br2=document.createElement("br");
    div.appendChild(br2);
    
    let desc=document.createElement("p");
    desc.classList.add("link-description");
    desc.textContent=description;
    div.appendChild(desc);
    
}

function display(search_results){
    spinner.classList.toggle('d-none');
    for (let i of search_results){
        createAndAppend(i);
    }
}

function searchInput(event){
    if (event.key==="Enter"){
        spinner.classList.toggle('d-none');
        searchResults.textContent="";
        let Input=search.value;
        let url="https://apis.ccbp.in/wiki-search?search="+Input;
        let options={
            method:"GET"
        };
        fetch(url,options)
        .then(function(response){
            return response.json();
        }).then(function(m){
            let {search_results}=m;
            display(search_results);
        });
    }
}
search.addEventListener("keydown",searchInput);
