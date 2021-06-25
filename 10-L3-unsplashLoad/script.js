const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// api
const count = 100;
const query = `morning`
const apikey = `1R0bpC0IKSazN3uzJUi8PywjqoecQ9RyS_e8wTct2l8`;
const apiUrl = `http://api.unsplash.com/photos/random/?client_id=${apikey}&query=${query}&count=${count}`



//create elements for links & photos, add to dom
function displayPhotos(){
    console.log(photosArray)
    //run function for each objects in photoArray
    photosArray.forEach((photo)=> {
    
    //create <a> to link to Unsplash
    const item = document.createElement('a');
    console.log("photo.link.html:", photo.links.html)
    item.setAttribute('href' , photo.links.html);
    item.setAttribute('target','_blank');
    
    //create <img> for photo
    const img = document.createElement('img');
    img.setAttribute('src', photo.urls.regular);
    img.setAttribute('alt',photo.alt_description);
    img.setAttribute('title', photo.alt_description);
    
    //put <img> imside <a>,
    item.appendChild(img);
    imageContainer.appendChild(item);
    
});
}




// get photos from Unsplash API
async function getPhotos(){
    try {
        const response = await fetch(apiUrl);
        photosArray= await response.json();
        console.log(photosArray)
        displayPhotos();
    } catch(error){

    }
}

//on load
getPhotos();

