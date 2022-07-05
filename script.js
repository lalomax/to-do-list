let createTodo = function (todo) {
  let list = document.createElement('li')
  let input = document.createElement('input')
  input.type = 'checkbox'
  input.onclick = function () {
    let parent = this.parentNode;
    parent.classList.toggle('checked')
  }
  let label = document.createElement('label')
  label.textContent = todo
  let button = document.createElement('button')
  button.classList.add("delete")
  button.textContent = "Delete"
  button.onclick = function() {
    let todoli = this.parentNode
    todoli.remove();
  }

  // nest elements in a list item
  list.appendChild(input)
  list.appendChild(label)
  list.appendChild(button)
  return list
}

let addButton = document.getElementById('add')

addButton.onclick = function() {
  let parent = this.parentNode;
  let input = parent.children[0]
  console.log(input.value)
  if (input.value === '') {
    return 
  } else {
    let ul = document.getElementById("todoList")
    ul.appendChild(createTodo(input.value))
    input.value = ''
  }

}