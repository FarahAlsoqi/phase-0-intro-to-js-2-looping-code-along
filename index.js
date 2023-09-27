let names = ["Charlie", "Samip", "Ali"];
let eventName = "surprise";

wrapGifts(names);
function writeCards(names, eventName) { 

    let messages = [];
    for (let i = 0; i < names.length; i++) {
      let messagename = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      messages.push(messagename);
    }
    return messages;
  }
  
  function countDown(){
    let z =10;
    while (z>=0)
    {
        console.log(z)
        z--
    }
  }