
const validCodeLength = (code: string) => {
  return code.length === 6;
}

const validCodeCharacters = (code: string) => {
  return /^[0-9a-zA-Z]+$/.test(code);
}



export const generateGameCode = () => {
  let code = Math.random().toString(36).substring(2, 8);
  code = code.toUpperCase();
  if (validCode(code)) {
    return code;
  }
  code = generateGameCode();
  return code;
}


export const validCode = (code: string) => {
  if (validCodeLength(code)) {
    if (validCodeCharacters(code)) {
        return true;
    } 
  }
  return false;
}

