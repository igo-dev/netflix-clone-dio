
for (let i = 0; i < imgCount ; i++) {
    SetItem(`/images-tall1/images/image${i}.png`, '#netflixExclusivo');
    SetItem(`/images-regular1/images/image${i}.png`, '#recomendadoPraVoce');
    SetItem(`/images-regular2/images/image${i}.png`, '#continueAssistindo');
    SetItem(`/images-regular3/images/image${i}.png`, '#filmes');
    SetItem(`/images-regular4/images/image${i}.png`, '#series');
    SetItem(`/images-tall2/images/image${i}.png`, '#novidades');
}

function SetItem(path, carouselId){
        
    $(carouselId)
    .owlCarousel('add',
    `<div class="item">
    <img class="item-img" src="${path}">
    </div>`)
    .owlCarousel('update');
    
}