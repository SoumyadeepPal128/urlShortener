function generate(){
  const characters = [
    // lowercase
    "a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z",

    // uppercase
    "A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",

    // numbers
    "0","1","2","3","4","5","6","7","8","9",

    // special characters
    "!","@","#","$","%","^","&","*","(",")",
    "-","_","=","+","[","]","{","}",";",":",
    "'",,",",".","<",">","?","|","`","~"
  ];

  const n = characters.length;

  let code = "";
  for (let i = 0; i < 7; i++) {
    const index = Math.floor(Math.random() * n);
    code += characters[index];
  }

  return code;
};
export default generate;
