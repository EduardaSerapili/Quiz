self.addEventListener("fetch", e =>{
    console.log(e.request.url);
})