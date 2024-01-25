function soundP(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    sound = ml5.soundP("https://teachablemachine.withgoogle.com/models/F_7tgEGl2/")model.js
    }
    
    function moddelready() {
        classifier.classify(gotResult);
    }

    function gotResults(error, results){
    if(error){console.error(error);}
    else{console.log(results);}
    console.log(results)

    random_colour_r=Math.floor(Math.random()*255);
    random_colour_g=Math.floor(Math.random()*255);
    random_colour_b=Math.floor(Math.random()*255);

    document.getElementById("name").innerHTML ="I can hear-"+results[0].label;
    document.getElementById("how").innerHTML ="accuracy-"+results[0].confidence;

    document.getElementById("name").style.color = "rgb("+ random_colour_r +","+ random_colour_g +","+ random_colour_b +")";
    document.getElementById("how").style.color = "rgb("+ random_colour_r +","+ random_colour_g +","+ random_colour_b +")";

    img_1=document.getElementById("p1");
    img_2=document.getElementById("p2");
    img_3=document.getElementById("p3");
    img_4=document.getElementById("p4");

    if (results[0].label == "human ear"){
        img_1.src="https://img.freepik.com/premium-vector/vector-realistic-human-ear-icon-closeup-isolated-transparency-grid-background-design-template-body-part-human-organ-eps10-illustrarion_153563-2036.jpg";
    }

    if (results[0].label == "dog"){
        img_2.src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pethealthnetwork.com%2Fdog-health%2Fdog-behavior%2F5-tips-help-stop-dog-barking&psig=AOvVaw3w6HyvOSNvTmO3ybCrqOJ4&ust=1706263493294000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKj-2IWl-IMDFQAAAAAdAAAAABAD";
    }

    if (results[0].label == "cat"){
        img_3.src="https://catfriendly.com/wp-content/uploads/2021/02/meow-e1612557327342.jpeg";
    }

    if (results[0].label == "lion roar"){
        img_4.src="https://media.istockphoto.com/id/456097309/photo/close-up-of-a-lion-roaring-isolated-on-white.jpg?s=612x612&w=0&k=20&c=MaE4KVmHzkq6AWVxjHfngAR5OEVd-w7UqllKeBE0rRQ=";
    }

}
    }