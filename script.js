const getImg = (fetchvalue) => {
    fetch(fetchvalue, {
        method: "GET",
        headers: {
            Authorization: "563492ad6f91700001000001ff1871e4875b4ccab75f9931a506287f"
        }
    }).then((rawImgs) => {
        return rawImgs.json()

    }).then((jsonImgs) => {
        // console.log(jsonImgs.photos[0].src.medium)
        let imgNode = document.querySelectorAll(".card")
        console.log(jsonImgs)

        for (let index = 0; index < imgNode.length; index++) {
            const element = jsonImgs.photos[index];


            imgNode[index].innerHTML = `
            <img src="${element.src.medium}" class="imgs-to-hide" alt="">
            <div class="card-body">
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  View
                </button>
                <button type="button" onClick="removeCard(this)" class="btn btn-sm btn-outline-secondary">
                  Hide
                </button>
              </div>
              <small class="text-muted">${element.id}</small>`
        }
    }).catch(err => console.log(err))
}

function removeCard(elem) {
    let cardNode = $(elem).parentElement()
    console.log(cardNode)
    // .remove();
}
removeCard()


