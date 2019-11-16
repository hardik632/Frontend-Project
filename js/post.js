var c=0;
function editme()
{
  c=c+1;
   if((c%2)!=0)
   {
     document.getElementById('blogBody').contentEditable = true;
     document.getElementById('btn').innerHTML=`<i class="fa fa-save" ></i> Save`;
   }
   else if((c%2)==0)
   {
     document.getElementById('blogBody').contentEditable = false;
     document.getElementById('btn').innerHTML=`<i class="fa fa-edit"></i> Edit`;
   }
}

var count=0;
function likeme()
{
    
    document.getElementById('likebtn').innerHTML=`<i class="fa fa-thumbs-up" style="color:white;padding:1px;"></i>Liked!`;
    count++;
    document.getElementById('showcount').innerHTML=count+ " person likes this!";
}
function comments(cmt){
    var a= document.getElementById("txtarea");
    if(cmt.value==null)
    {
        return false;
    }
    else
    {
    var par = document.createElement("div");
    var lis = document.createTextNode(cmt.value);
     par.appendChild(lis);
    var vs = document.getElementById("listcomments");
    vs.prepend(par);
    par.classList.add("cmntdiv");
    vs.style.padding ="10px 20px 20px 20px";
    a.value=a.defaultValue;
    }
}