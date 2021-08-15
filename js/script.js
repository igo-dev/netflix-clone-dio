
for (let i = 0; i <= 17 ; i++) {

    SetItem(`images/images-tall1/image${i}.png`, '#netflixExclusivo');
    SetItem(`images/images-regular1/image${i}.png`, '#recomendadoPraVoce');
    SetItem(`images/images-regular2/image${i}.png`, '#continueAssistindo');
    SetItem(`images/images-regular3/image${i}.png`, '#filmes');
    SetItem(`images/images-regular4/image${i}.png`, '#series');
    SetItem(`images/images-tall2/image${i}.png`, '#novidades');

}

function SetItem(path, carouselId){
        
    $(carouselId)
    .owlCarousel('add',
    `<div class="item">
    <img class="item-img" src="${path}">
    </div>`)
    .owlCarousel('update');
    
}