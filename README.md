# Password Generator

## Description

This program creates and displays a randomly generated password.  It retains the last five passwords generated.  The user is able to choose between the five passwords and copy one of them to the clipboard. There are two different ways to generate a password.  One is using the options menu.  In this menu you can choose between using lowercase characters, uppercase characters, numeric characters, special characters or all four.  It also gives you the option of omitting characters. The second way to generate a password is using the phonetic alphabet method.  This method allows the user to enter a word up to 8 characters in length. It then spells the word out using the phonetic alphabet. The user will not be able to combine the options and phonetic alphabet methods. A pink button is used to toggle between buttons. 

## Table of Contents

* [Picture of Page](#page)
* [Options Menu](#options)
* [Phonetic Alphabet](#phonetic-alphabet)
* [Current Password](#current-password)
* [Password History](#password-history)

## Page

This is an image of the page:

![Screenshot of page](/Assets/screenShot.png)


## Options

The options menu has a slider for the user to select the length of the password. The password length can be anywhere between 8 to 128 characters long.  The user can choose between lowercase, uppercase, numeric or special characters.  They can even do all four.  They also have the ability to omit characters.  They will be prompted for characters to omit upon pushing the "Generate New Password" button. Their input is validated to ensure they enter one character but no more. They will then be prompted to see if they wish to enter another. When the Options method is selected its border will be cyan.  When it is deselected it will a dotted gray line and all choices will be grayed out and inaccessible.

![Options Selected](/Assets/optionsSelected.png)

![Options Deselected](/Assets/optionsDeSelected.png)

![Pink Toggle Button](/Assets/pinkToggle.png)

## Phonetic Alphabet

The Phonetic Alphabet menu allows the user to enter a word up to 8 characters in length.  They have the choice between whether or not they would like to have spaces between each character. The users input is validated to ensure it is only one word not less, no greater. The validation also ensures only lowercase and uppercase characters are used.  Upon generating a password the input field is reset to its default value for security purposes. A password is then generated using the phonetic alphabet to spell out the word. The menu has a cyan border when active and a dotted gray border when inactive.  The options are also grayed out and inaccessible when inactive. A pink button is used to toggle between menus.

![Phonetic Alphabet Active](/Assets/pAlphabetActive.png)

![Phonetic Alphabet Inactive](/Assets/pAlphabetInActive.png)

![Pink Toggle Button](/Assets/pinkToggle.png)

## Current Password

The current password card is where all newly generated passwords are displayed.  When it is initially displayed it is blurred for security reasons.   The user then has the option to use the "Toggle Blur" button to toggle blur on and off. 

![Current Password Card Clear View](/Assets/currentPasswordClear.png)

![Current Password Card Blurry View](/Assets/currentPasswordBlur.png)

## Password History

The password history card assigns the last five passwords generated to radio boxes.  This allows the user to select one and use the button to copy it to the clipboard.  When the passwords are displayed on the card only the first three and last three characters are shown for security purposes.  Upon copying a password an alert pops up showing the full password being copied. 


![Last Five Passwords](/Assets/lastFivePasswords.png)

![Alert for Copied Passwords](/Assets/copiedPassword.png)