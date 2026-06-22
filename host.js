const frameA = document.getElementById("frameA");
const frameB = document.getElementById("frameB");

const logContainer =
document.getElementById("logContainer");

const syncIndicator =
document.getElementById("syncIndicator");

function addLog(message)
{
    const time =
    new Date().toLocaleTimeString();

    const div =
    document.createElement("div");

    div.className = "log-item";

    div.innerHTML =
    `[${time}] ${message}`;

    logContainer.prepend(div);
}

function showSync()
{
    syncIndicator.innerHTML =
    "🟢 Synced Successfully";

    setTimeout(() =>
    {
        syncIndicator.innerHTML =
        "⚪ Idle";
    },1000);
}

window.addEventListener(
"message",
(event)=>
{

    if(event.origin !== location.origin)
    return;

    const data = event.data;

    if(data.type !== "FORMAT_SYNC")
    return;

    if(
    event.source ===
    frameA.contentWindow
    )
    {
        frameB.contentWindow.postMessage(
        {
            ...data,
            external:true
        },
        location.origin);

        addLog(
        `Frame A ➜ ${data.action}`
        );

        showSync();
    }

    else if(
    event.source ===
    frameB.contentWindow
    )
    {
        frameA.contentWindow.postMessage(
        {
            ...data,
            external:true
        },
        location.origin);

        addLog(
        `Frame B ➜ ${data.action}`
        );

        showSync();
    }

});