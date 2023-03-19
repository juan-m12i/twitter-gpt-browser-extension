# OpenAI Twitter Assistant

This project is a browser extension for Firefox that adds an OpenAI icon to tweets on Twitter. When you click the icon, a modal opens up where you can ask the OpenAI assistant to explain the tweet or provide more information about its content.

## Installation
### Step 1, "no code" version - Creating the extension zip file

1. Download the zip file from github, 2 options:
   1. https://github.com/juan-m12i/twitter-gpt-browser-extension/tags -> get the latest one and click the zip icon
   2. https://github.com/juan-m12i/twitter-gpt-browser-extension -> click on "<> Code" - Download Zip
2. Unzip the file in a folder
3. Create a file called 'secrets.js' in the `source` directory
4. Add your OpenAI API key to the file:

```javascript
const OPEN_AI_API_KEY = "your_openai_api_key";
```
Replace "your_openai_api_key" with your actual OpenAI API key.
5. Select all the files in the `source` directory and add them to a zip file / compress them (the file can be named anything)

### Step 1 - command-line version - Creating the extension zip file

1. Clone this repository.
2. Create a `secrets.js` file in the `source` directory of the project. 
3. Add your OpenAI API key to the file:

```javascript
const OPEN_AI_API_KEY = "your_openai_api_key";
```
Replace "your_openai_api_key" with your actual OpenAI API key.

3. Run the build.sh script to create the browser extension:

```
./build.sh
```
or
```
sh build.sh
```

This script will create an Extension.zip file in the /dist folder.

### Step 2 - Loading the extension into Firefox
1. In Firefox, go to [about:debugging#/runtime/this-firefox](about:debugging#/runtime/this-firefox)
2. Click "Load Temporary Extension" and select the Extension.zip file from the /dist folder.
3. Go to twitter.com and click the OpenAI icon next to each tweet    Add tests to ensure the functionality of the extension.

## Example
<img width="603" alt="image" src="https://user-images.githubusercontent.com/11706611/226071685-4ad9b3dd-ccc0-401b-84d1-1f4ea2c1b62e.png">


## To-dos
- Add tests to ensure the functionality of the extension.
- Improve the look and feel of the modal by integrating a CSS framework.
- Investigate and fix the issue where the OpenAI logo is sometimes duplicated.
- Further refactor the code, moving OpenAI logic from the modal to the OpenAI API file.

