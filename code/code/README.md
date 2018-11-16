# File Upload

## Start
1. Load and extract this repo as a ZIP https://github.com/ilkkamtk/BCW3
   * save to same folder with WEB-INF to test in browser (web pages or webcontent). In this case form action="servlet".
   * you can also upload to /var/www/html/subfolder. In this case form action="ipadress:8080/appName/servlet".

## 1. It's 90's again

* Modify task_a.html
  * Complete the form to upload an image to your Java server
  * Study [attributes of input element](https://www.w3schools.com/tags/tag_input.asp) and find a suitable attribute to select only images 


## 2. Modern version

* Use fetch API to upload the file
* Example:
```javascript
    // select input element where type is file
    const input = document.querySelector('input[type="file"]');
    // make FormData -object
    const data = new FormData();
    // add file to FormData -object.
    // Note that 'files' is an FileList object. This means that you can upload multiple files. 
    data.append('fileToUpload', input.files[0]);
    // make an object for settings
    const settings = {
            method: 'POST',
            // credentials: 'same-origin', // this might be needed for some servers
            body: data
        };
    // initiate fetch. In this example the server responds with json.
    // Response could also be text. Then you would use response.text()
    fetch('someUrl', settings).then((response) => {
        return response.json();
    }).then((json) => {
        console.log(json);
    });
```
* [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
* Modify task_b.html and main_b.js
* More help in the comments of main_b.js
