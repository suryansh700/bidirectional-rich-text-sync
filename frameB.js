const editor =
document.getElementById("editor");

let syncing = false;

function sendUpdate(action)
{
    if(syncing) return;

    window.parent.postMessage(
    {
        type:"FORMAT_SYNC",
        action:action,
        html:editor.innerHTML
    },
    location.origin
    );
}

document
.getElementById("boldBtn")
.addEventListener(
"click",
()=>
{
    document.execCommand("bold");
    sendUpdate("Bold");
});

document
.getElementById("italicBtn")
.addEventListener(
"click",
()=>
{
    document.execCommand("italic");
    sendUpdate("Italic");
});

document
.getElementById("strikeBtn")
.addEventListener(
"click",
()=>
{
    document.execCommand(
    "strikeThrough"
    );

    sendUpdate(
    "StrikeThrough"
    );
});

editor.addEventListener(
"input",
()=>
{
    sendUpdate("Typing");
});

window.addEventListener(
"message",
(event)=>
{

    if(
    event.origin !==
    location.origin
    )
    return;

    if(
    !event.data.external
    )
    return;

    syncing = true;

    editor.innerHTML =
    event.data.html;

    syncing = false;

});