Object.defineProperty(exports, Symbol.toStringTag, {
  value: 'Module'
});

//#region src/padNumber.ts
function padNumber(num, length = 2) {
  return num.toString().padStart(length, "0");
}

//#endregion
exports.padNumber = padNumber;