WA.onInit().then(() => {
console.log("SCRIPT OK");

WA.room.area.onEnter("npc_bob").subscribe(() => {
    console.log("ZOne testé");
WA.ui.openPopup("PNJ", "Bonjour ! 🎉", [
{ label: "ok", callback: popup => popup.close() }
]);
});
});