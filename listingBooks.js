//SCOPE OF APPLICATION: REQUIREMENTS
        /* Once addAuthorButton is clicked, will like to:
            1. Use a constructor to create an object about author & book title
            2. Add the author details to an array via push()
            3. Loop through array to verify that all authors and book titles are added to array or that there are no additional 
                author details to print
            4. Display results to the webpage via displayDiv
            5. As a bonus, be able to clear all information being displayed via the resetAuthorsButton */

    var authorFirstName = document.getElementById("author-first-name"), 
        authorLastName = document.getElementById("author-last-name"),
        bookTitle = document.getElementById("book-title"),
        addAuthorButton = document.getElementById("add-author-button"),
        resetAuthorsButton = document.getElementById("reset-authors-button"),
        displayDiv = document.getElementById("display-div"),
        authorList = [];

    /* Will construct an object with author name & book title aFName, aLName & aBookTitle are parameteres or placeholders 
        for what will be passed to the function when it's called */
        
        //after adding .value at the end of variables, app started to print correct info
        var Author = function Author(aFName, aLName, aBookTitle) { 
            this.aFirstName = aFName; 
            this.aLastName = aLName;
            this.bookTitle = aBookTitle; 
         
         //Will convert the index of each author and corresponding book (array data), into a string for displaying to the user
            this.toString = function toString() {
            return this.aFirstName + "&nbsp" + this.aLastName + "&nbsp -- &nbsp<b><i>Title:<i></b>&nbsp " + this.bookTitle;
        }
    }

    /* Will call on the Author constructor to create a new object for each new author, push author information to authorList 
        array & update the array */
        addAuthorButton.addEventListener("click", function() {
        var newlyCreatedAuthor = new Author(authorFirstName.value, authorLastName.value, bookTitle.value)
            authorList.push(newlyCreatedAuthor); //JS interpereter will handle layout and formatting once object is added to the list
            updateArrayList();
            clearTextBoxes();
       });

    /*Will add author info to array via push(), loop through the array and update displayDiv by clearing info that's present in preparation
        to post updated array */
        var updateArrayList = function updateArrayList() {
        displayDiv.innerHTML = "";

        for(i = 0; i < authorList.length; i++) {
            var newAuthorInfo = authorList[i];
            displayDiv.innerHTML += i + ": " + newAuthorInfo.toString() + "<hr><br>";
        } 
    }

    /*Designed to clear <divs> used as display areas and text boxes used for input will only execute once called */
        var clearDiv = function clearDiv() {
            displayDiv.innerHTML = "";
            authorFirstName.value = "";
            authorLastName.value = "";
            bookTitle.value = "";
            authorList = [];
        }

        var clearTextBoxes = function clearTextBoxes() {
            authorFirstName.value = "";
            authorLastName.value = "";
            bookTitle.value = "";
        }

    //Reset authors button calls clearDiv()
        resetAuthorsButton.addEventListener("click", function() {
            clearDiv();
        });