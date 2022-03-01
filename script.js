let http = new XMLHttpRequest();

http.open('get', 'data.json', true);
http.send();

http.onload = function(){
    if(this.readyState == 4 && this.status==200){
        let posts = JSON.parse(this.response);
    
        let output = "";
    
        for(let item of posts){
               output+=`
                    <div class="posts">
                        <img class="profile-picture" src="${item.profile_image}" alt="profile picture">
                        <div class="name-date">
                            <p class="">${item.name}</p>
                            <p class="">${item.date}</p>
                        </div>
                        <img class="ig-logo" src="images/instagram-logo.svg">
                        <img class="post-picture" src="${item.image}" alt="post image">
                        <p class="caption">${item.caption}</p>
                        <hr>
                        <img class="heart-img" src="images/heart.svg" alt="heart image">
                        <p class="likes">${item.likes}</p>
                    </div>

               `; 
            }

        document.querySelector(".container").innerHTML = output;
    }
}