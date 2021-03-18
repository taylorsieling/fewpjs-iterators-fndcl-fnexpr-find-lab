function superbowlWin(records) {
    const win = records.find(r => r.result === "W");
    return win ? win.year : undefined;
}
