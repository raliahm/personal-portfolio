USE fashionista;

CREATE TABLE Users(
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Email VARCHAR(100) NOT NULL,
    password VARCHAR(8) NOT NULL,
    FirstName varchar(20) NOT NULL,
    LastName varchar(50) NOT NULL,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP on UPDATE CURRENT_TIMESTAMP,
    UserType ENUM('admin', 'shopper')
);
CREATE TABLE Categories(
    CategoryID INT AUTO_INCREMENT PRIMARY KEY,
    CategoryName VARCHAR(100) NOT NULL;
);

CREATE TABLE Products(
    ProductID INT AUTO_INCREMENT PRIMARY KEY,
    ProductName VARCHAR(100) NOT NULL,
    ProductDescription TEXT NOT NULL,
    ProductImageURL VARCHAR(250) NOT NULL,
    ProductPrice DECIMAL(10,2) NOT NULL,
    CategoryID int,
    FOREIGN KEY(CategoryID) REFERENCES Categories(CategoryID)
);
CREATE TABLE Carts(
    CartID INT AUTO_INCREMENT PRIMARY KEY,
    CartStatus ENUM('new', 'abandoned', 'purchased'),
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UserID int,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE CartProducts(
    CartProductID INT AUTO_INCREMENT PRIMARY KEY,
    CartID INT,
    ProductID INT,
    Quantity INT NOT NULL,
    FOREIGN KEY(CartID) REFERENCES Carts(CartID),
    FOREIGN KEY(ProductID) REFERENCES Products(ProductID)
);