function mypress()
{
    var mylist=document.getElementById("state");

    if(mylist.options[mylist.selectedIndex].text==="Bihar")
    {
        window.open("rive/bihar.html");
    }
    else if(mylist.options[mylist.selectedIndex].text==="Maharashtra")
    {
        window.open("rive/maharashtra.html");
    }
    else if(mylist.options[mylist.selectedIndex].text==="Jharkhand")
    {
        window.open("rive/jharkhand.html");
    }
    else if(mylist.options[mylist.selectedIndex].text==="West Bengal")
    {
        window.open("rive/west-bengal.html");
    }
    else{
        alert("Enter a state!");
    }
}

function donate()
{
    window.open("https://www.pmcares.gov.in/");
}

function about()
{
    window.open("About Us/AboutUs.html");
}