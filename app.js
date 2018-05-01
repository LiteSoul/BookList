// Book constructor
function Book(title, author, isbn) {
	this.title = title
	this.author = author
	this.isbn = isbn
}

// UI constructor
function UI() {}
//Alerts
UI.prototype.showAlert = (message, className) => {
	//Create div
	const div = document.createElement('div')
	//Add classes
	div.className = `alert ${className}`
	//Add text
	div.appendChild(document.createTextNode(message))
	//Get parent
	const container = document.querySelector('.container')
	const form = document.querySelector('#book-form')
	//Insert alert
	container.insertBefore(div, form)
	//Remove alert after 3 seconds
	setTimeout(() => {
		document.querySelector('.alert').remove()
	}, 3000)
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