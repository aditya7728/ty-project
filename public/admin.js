
let Admin_Pannel_Changes=document.getElementById("Admin_Pannel_Changes");
Admin_Pannel_Changes.addEventListener("submit",function(e){
    e.preventDefault();
    let Upload_Product_Image=document.getElementById('Upload_Product_Image');
    let file=Upload_Product_Image.files[0];
    console.log(file);
});

