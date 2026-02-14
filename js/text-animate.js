const textElement = document.getElementById('text-animate');
const textCursor = document.getElementById('text-cursor');

function textAnimate(textElement, textCursor, skills){

    async function textCusrorBlink (element) {
      while(true) {
      await delay(0.35);
        element.classList.toggle('transparent');
      }
    }

    const delay = async (sec)=>{
      return new Promise((resolve) => {
        setTimeout(()=>{
          resolve();
        }, Number(sec) * 1000)
      });
    }

    async function appearChar(str, num){
      num = Number(num)
      await delay(0.05);
      textElement.innerHTML = textElement.innerHTML + str[num]
    }

    async function removeChar(string) {
      await delay(0.05)
      return string.slice(0, string.length - 1);
    }

    async function singleWordAnimate(string) {
      for(let i = 0; i < string.length; i++){
        await appearChar(string , i);
      }
      await delay(1.5);
      for(let i = string.length; i > 0; i--) {
        textElement.innerHTML = await removeChar(textElement.innerHTML);
      }
    }
    async function wordsAnimate() {
      while(true) {
        for (const skill of skills) {
          await singleWordAnimate(skill)
        }
      }
    }
    wordsAnimate()
    textCusrorBlink(textCursor)
  }

textAnimate(textElement, textCursor, [
  'HTML',
  'CSS',
  'JavaScript'
])
