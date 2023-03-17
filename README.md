# OpenAI Twitter Assistant

This project is a browser extension for Firefox that adds an OpenAI icon to tweets on Twitter. When you click the icon, a modal opens up where you can ask the OpenAI assistant to explain the tweet or provide more information about its content.

## Setup

1. Clone this repository.

2. Create a `secrets.js` file in the `source` directory of the project. Add your OpenAI API key to the file:

```javascript
export const API_KEY = "your_openai_api_key";
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

1. In Firefox, go to [about:debugging#/runtime/this-firefox](about:debugging#/runtime/this-firefox)
2. Click "Load Temporary Extension" and select the Extension.zip file from the /dist folder.
3. Go to twitter.com and click the OpenAI icon next to each tweet    Add tests to ensure the functionality of the extension.


## To-dos
- Add tests to ensure the functionality of the extension.
- Improve the look and feel of the modal by integrating a CSS framework.
- Investigate and fix the issue where the OpenAI logo is sometimes duplicated.
- Further refactor the code, moving OpenAI logic from the modal to the OpenAI API file.