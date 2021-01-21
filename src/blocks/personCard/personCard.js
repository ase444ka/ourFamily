Array.from(document.querySelectorAll('.personCard__article-body')).map(paragraph => {
    let txt = paragraph.innerHTML;
    let regexp = /!!(.+?)(!!)/g;
    
    txt = txt.replace(regexp, (match, text) => `<strong>${text}</strong>`);
    paragraph.innerHTML = txt; 
})
let card = document.querySelector('.personCard');


