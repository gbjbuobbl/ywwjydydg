var canvas = new fabric.canvas('myCanvas');
Image_height = 30 ;
Image_width = 30 ;
player_x = 10 ;
player_y = 10 ;
var playerobject = "";

function player_update()

{

fabric.Image.fromURL("player.png", function (Img){

playerobject = Img;

playerobject.scaleToWidth(150);

player_object.scaleToHeight (140);

player_object.set({

top:player_y,

left:player_x

});

canvas.add(player_object);
});

}

function new_image(get_image)

{

fabric. Image.fromURL(get_image, function(Img) { 
    image_object = Img;
 image_object.scaleToWidth(image_width);
 image_object.scaleToHeight(image_height);

image_object.set({

top:player_y,

left:player_x

});