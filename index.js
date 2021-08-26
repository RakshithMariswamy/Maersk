let someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
         
const ShuffleNumber = () => {
    someArray.sort(() => Math.random() - 0.5);
    return someArray;
};

const SortNumber = () => {
    someArray.sort();
    return someArray;
};

const renderDom = (type) => {
    const resultsEl = document.querySelector('#results');
    const colorCode = ['#2B8EAD','#6F98A8','#BFBFBF','#2F454E','#72C3DC']
    const result = type === 'shuffle' ? ShuffleNumber() : SortNumber()
    const listItem =  result.map((item)=>{
        let colorBack = window.innerWidth < 414 ? '#EFEFEF': colorCode[Math.floor(Math.random() * colorCode.length)]
        let colorBadge = window.innerWidth < 414 ? colorCode[Math.floor(Math.random() * colorCode.length)] :''; 
        return '<div class="maersk-blockView col-3" style=background-color:'+colorBack+';border-left-color:'+colorBadge+'>'+item+'</div>'
    })
    const block = '<div class="maersk-blockMain ">'+ listItem.join('')+ '</div>'
    resultsEl.innerHTML = block
}

renderDom('sort')