# 📧 Email List Reader

## 📌 Project Overview

**Email List Reader** is a **Node.js application** designed to **read email list files** and display their content in the console. This project demonstrates **file handling in Node.js** and script execution from the command line, making it a useful tool for managing email data.

Developed as part of a **professional portfolio**, this project showcases **asynchronous file operations, command-line interaction, and error handling techniques in JavaScript**.

---

## 🚀 Features

- 📄 **Reads email lists** from `.txt` files.
- 🖥️ **Command-line execution**, allowing users to specify the file to read.
- 🔄 **Error handling**, displaying messages in case of missing or non-existent files.
- ⚡ **Asynchronous operation** using `fs.promises` for improved performance.

---

## 🛠 Technologies Used

- **Node.js** → JavaScript runtime environment.
- **JavaScript (ES6+)** → Uses `async/await` and promises for file handling.
- **`fs.promises` Module** → Enables **asynchronous file reading**.

---

## 🎯 Project Purpose

This project demonstrates:

- ✅ **File handling in Node.js** using `fs.promises.readFile`.
- ✅ **Creating CLI-executable scripts** for file processing.
- ✅ **Using JavaScript promises and async/await** for asynchronous operations.
- ✅ **Handling user input and errors gracefully in a command-line application**.

---

## 📂 Project Structure

```
📁 email_reader_project
 ├── 📄 email_list.txt        # Sample email list file
 ├── 📄 email_list2.txt       # Another sample email list file
 ├── 📄 read.js               # Main Node.js script
```

---

## 📌 Prerequisites

Before running the script, ensure **Node.js** is installed. Verify with:

```sh
node -v
```

---

## 🏃‍♂️ How to Use

1️⃣ **Open a terminal** and navigate to the project folder:

```sh
cd email_reader_project
```

2️⃣ **Run the script** by providing a file as an argument:

```sh
node read.js email_list.txt
```

🔹 You can also execute it with another file:

```sh
node read.js email_list2.txt
```

---

## 📝 Example Output

If the `email_list.txt` file contains:

```
mary@murach.com (Mary Delamater)
joel@murach.com (Joel Murach)
anne@murach.com (Anne Boehm)
```

The console output will be:

```sh
Script: /path/to/script/read.js
Filename: email_list.txt
=============================================================
mary@murach.com (Mary Delamater)
joel@murach.com (Joel Murach)
anne@murach.com (Anne Boehm)
```

---

## ⚠️ Error Handling

- If **no filename** is provided, the script will display:

```sh
Error:
Please enter a filename to proceed.
```

- If the file **does not exist**, an error message will be displayed.

---

## 🌟 Future Improvements

- 📝 **Support for different file formats** (e.g., `.csv`, `.json`).
- 📤 **Export results** to another file or email.
- 📊 **Filter and sort emails** based on domain names or alphabetical order.
- 🔍 **Search functionality** to find specific email addresses.

---

## 📜 License

This project is licensed under the **MIT** License.

---

## 💼 Author

👤 **Juan Jacobo Florez Monroy**  
🌐 **Portfolio**: [jjacobo95.com](https://jjacobo95.com)  
🐙 **GitHub**: [github.com/jjacoboflorez95](https://github.com/jjacoboflorez95)