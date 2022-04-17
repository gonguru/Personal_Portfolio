let index = 1;
const roles = [
    'A web developer',
    'MTB Cyclist',
    'Nature Lover',
    'React Learner',
    'Self Taught',
    `The next you'll hired ;)`
]
const last = roles.at(-1)

document.addEventListener('DOMContentLoaded', () => {
  //Typing cursor / Cursor / Type 
  changeRoles(roles, roles.at(-1))
})

function changeRoles(roles, last) {
  //Transfort text into an element to string in array
  const textContainer = document.querySelector('.enfasis')
  //accumulator will save the previus millisecond value
  let accumulator = 0
  roles.forEach( role => {
    let id = setTimeout(() => {
      clearTimeout(id)
      write(role, textContainer)
    }, accumulator);
    /*
      Time count is equal to time that takes write the string (role)
      (100/1000 millisecond per letter)
      this amount x 2 because unwrite function may take the same time
      1500 (time we want to wait to write next string)
    */
    accumulator += (role.length * 100) * 2 + 1500
  });
}

function write(string, stringContainer) {
  let id = setTimeout(() => {
    //Replace the content
    stringContainer.textContent = string.slice(0, index)
    clearTimeout(id)
    if( index < string.length ) {
      write(string, stringContainer)
      index++
    } else {
      //Stop if string is equal to last element in array
      if( last !== string ) {
        //Unwrite text
        clear(string, stringContainer)
      }
    }
  }, 100);
}

function clear (string, stringContainer) {
  let id = setTimeout(() => {
    stringContainer.textContent = string.slice(0 , index)
    clearTimeout(id)
    if( index  > 0 ){
      clear(string, stringContainer)
      index--
    }
  }, 100);
}