const gravAssist = list => {
  for (let i = 0; i < list.length; i += 4) {
    if (list[i] === 1) {
      list[list[i + 3]] = list[list[i + 1]] + list[list[i + 2]];
    } else if (list[i] === 2) {
      list[list[i + 3]] = list[list[i + 1]] * list[list[i + 2]];
    } else if (list[i] === 3) {
      
    } else if (list[i] === 4) {

    }else if (list[i] === 99) {
      break;
    }
  }
  return list;
}