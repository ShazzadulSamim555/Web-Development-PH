function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  } else {
    const splitStr = str.split(" ");
    const join = splitStr.join("");
    const upperCase = join.toUpperCase();

    return upperCase;
  }
}

const gave = onlyCharacter(" ha ck m e 1 @ru.c  n  ");
console.log(gave);
