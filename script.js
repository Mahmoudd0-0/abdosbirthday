function next() {

    const first = document.getElementById("h1");

    // Change the heading
    first.textContent = "Happy Birthday!!!";


    // Create the birthday message
    const text = document.createElement("p");

    text.textContent = `كنت لسه واخد بالي إني مجبتلكش هدايا كفاية على التمن سنين اللي إحنا قضيناها مع بعض.
وبما إني باخد ويب دلوقتي، فقولت أحاول إني أعملك هدية بسيطة شوية.
بس خلي بالك، أنا حرفيًا شبه معرفش حاجة لسه.
فمش ذنبي إن عيد ميلادك هو اللي جه بدري.
اللي فات ده كله كان بتاعي أنا، اللي جاي الصراحة فيب كودينج.`;


    // Place the message below the heading
    first.after(text);


    // Create the second button
    const timelineButton = document.createElement("button");

    timelineButton.textContent = "Show me our memories";

    timelineButton.className = "button";

    timelineButton.id = "timelineButton";


    // Place the button below the message
    text.after(timelineButton);


    // Connect the button to the timeline
    timelineButton.addEventListener("click", showTimeline);
    
    document.getElementById("button").classList.add("hidden");

}


function showTimeline() {

    // Hide the birthday card
    document.getElementById("page1").classList.add("hidden");


    // Show the photo timeline
    document.getElementById("page2").classList.remove("hidden");



}