const Book = function (
    id, title, nbre, date,
    image, description, authors, categories
) {
    this.id = id;
    this.title = title;
    this.pageCount = nbre;
    this.date = date;
    this.image = image;
    this.description = description;
    this.authors = authors;
    this.categories = categories;
}

Book.fromJson = function (json) {
    return new Book(
        json.id,
        json.title,
        json.pageCount,
        json.publishedDate.date,
        json.thumbnailUrl,
        json.shortDescription,
        json.authors.join(" , "),
        json.categories.join(" , ")
    );
}

module.exports.Book = Book;