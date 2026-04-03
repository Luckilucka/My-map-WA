WA.onInit().then(() => {
console.log("Script chargé");

WA.room.area.onEnter("npc_bob").subscribe(() => {
WA.ui.openPopup("npcPopup", "Bonjour 👋 Je suis un PNJ !", [
{
label: "Fermer",
className: "primary",
callback: (popup) => {
popup.close();
}
}
]);
});

WA.room.area.onLeave("npc_bob").subscribe(() => {
WA.ui.closePopup("npcPopup");
});
});