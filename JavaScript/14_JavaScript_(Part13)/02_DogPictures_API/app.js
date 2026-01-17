
//# create a program to display random dog picture using API

let url = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector('button');

btn.addEventListener('click', async () => {         // async arrow function
    let link = await getImg();
    console.log(link)
    let img = document.querySelector('img');
    img.src = link;
})

async function getImg() {
    try {
        let res = await axios.get(url)
        return res.data.message;
    } catch (err) {
        console.log("error -", err)
        return "Image not found"
    }

}
getImg();