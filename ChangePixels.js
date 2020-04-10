var image=new SimpleImage("hilton.jpg");
var w=image.getWidth()

for(var pixel of image.values())
{
    if(pixel.getX()<=w/3)
    {
        pixel.setRed(255);
    }
    else if(pixel.getX()>=w/3 && pixel.getX()<=2*w/3)
    {
        pixel.setGreen(255);
    }
    else
    {
        pixel.setBlue(255);
    }
    swapRedGreen(pixel);
}
print(image)
function swapRedGreen(pixel)
{
  var r=pixel.getRed();
  var g=pixel.getGreen();
	pixel.setRed(g);
	pixel.setGreen(r);
}
