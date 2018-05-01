//https://video.xx.fbcdn.net/v/t42.9040-2/10000000_2048199168783112_1770798450451939328_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=941&oh=e523f4ed3c6cb822fc4ab5f02374f163&oe=5AEA212D
// Book constructor
function Book(title, author, isbn) {
	this.title = title
	this.author = author
	this.isbn = isbn
}

// UI constructor
function UI() {}
//Alerts
UI.prototype.showAlert = function (message, className) {

}
//Add book to list
UI.prototype.addBookToList = function (book) {
	const list = document.getElementById('book-list')
	//Create tr element
	const row = document.createElement('tr')
	//Insert columns
	row.innerHTML = `
	<td>${book.title}</td>
	<td>${book.author}</td>
	<td>${book.isbn}</td>
	<td><a href='#' class='delete'>X</a></td>`
	//Append row
	list.appendChild(row)
}
//Clear fields
UI.prototype.clearFields = function () {
	document.getElementById('title').value = ''
	document.getElementById('author').value = ''
	document.getElementById('isbn').value = ''
}

// Event listener
document.getElementById('book-form').addEventListener('submit', e => {
	// Get form values
	const title = document.getElementById('title').value
	const author = document.getElementById('author').value
	const isbn = document.getElementById('isbn').value
	//Instantiate book
	const book = new Book(title, author, isbn)
	//Instantiate UI
	const ui = new UI()
	//Input validation
	if (title === '' || author === '' || isbn === '') {
		ui.showAlert('Please fill in all the fields', 'error')
	} else {
		ui.addBookToList(book)
		ui.clearFields()
	}
	//Prevent submit default behavior
	e.preventDefault()
})