const imageArray = [
    {url:"./assets/images/bibimbap.jpeg"},
    {url:"./assets/images/corn-dog.jpeg"},
    {url:"./assets/images/gimbap.jpg"},
    {url:"./assets/images/kimchi.jpg"},
    {url:"./assets/images/popular-image-1.png"},
    {url:"./assets/images/tteokbokki.jpeg"},
]

function showmoreImage() {
    const populaContainer2 = document.querySelector(".popular-container-2")
    const newImage = document.createElement('div')
    console.log('click',populaContainer2);
    for (const item of imageArray) {
        const newImageDiv = document.createElement('div');
        newImageDiv.innerHTML = `<img src ="${item.url}">`
        console.log(newImageDiv);
        populaContainer2.appendChild(newImageDiv)
        newImage.style.width = '800px';
    }
}
// form validation 
function handleContact(event) {
    event.preventDefault()
    const email = event.target.email.value
    console.log(email);
    const element = document.getElementById('element')
    console.log(element);
    const newElement = document.createElement('p');
    newElement.innerText = `Your name: ${email}`;
    console.log(newElement);
    element.appendChild(newElement)
}