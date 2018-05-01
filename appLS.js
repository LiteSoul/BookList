// Book constructor
class Book {
	constructor(title, author, isbn) {
		this.title = title
		this.author = author
		this.isbn = isbn
	}
}

// UI constructor
class UI {
	constructor() {}
	//Alerts
	showAlert(message, className) {
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
	addBookToList(book) {
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
	clearFields() {
		document.getElementById('title').value = ''
		document.getElementById('author').value = ''
		document.getElementById('isbn').value = ''
	}
	//Delete book
	deleteBook(ui, target) {
		if (target.className === 'delete') {
			target.parentElement.parentElement.remove()
			ui.showAlert('Book deleted successfully', 'success')
		}
	}
}

// Event listener for add book
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
		ui.showAlert('Book added successfully', 'success')
		ui.clearFields()
	}
	//Prevent event default behavior
	e.preventDefault()
})

//Event listener for delete book
document.getElementById('book-list').addEventListener('click', e => {
	//Instantiate UI
	const ui = new UI()

	ui.deleteBook(ui, e.target)
	//Prevent event default behavior
	e.preventDefault()
})
