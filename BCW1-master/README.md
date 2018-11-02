### JavaScrip LAB 1 Form validation


## Get started
  * Save this repository as zip `git clone https://github.com/ilkkamtk/BCW1.git` and extract it 

## Selecting and manipulating elements + events
  * Open sample.html
  * Following teacher instructions learn to select and manipulate elements and add events to elements
  * Some help: 
    * http://www.w3schools.com/jsref/met_document_queryselector.asp
    * http://www.w3schools.com/jsref/prop_html_innerhtml.asp
    * http://www.w3schools.com/jsref/met_element_setattribute.asp
    * http://www.w3schools.com/js/js_htmldom_eventlistener.asp
    * https://medium.com/modern-javascript/javascript-event-handlers-280ed3cc5631


### Task A 
1. Open task_a.html in editor
2. Make a form with the following input fields
  * Firstname
  * Lastname
  * Email
  * Phone number 
  * Address
  * Postal code
  * Password
  * Submit-button
3. Validate the HTML at http://validator.w3.org. Make the changes validator suggests.
4. Implement form validation by using HTML5
  * Firstname and lastname are required
  * Email has to be valid and it is required
  * Phone number format needs be +358401234567
  * Address and postal code are not required, but postal code needs to be exactly 5 numbers (if entered)
  * Password is required
  * Some help
    * http://www.the-art-of-web.com/html/html5-form-validation/
    * http://www.w3schools.com/TAgs/att_input_pattern.asp
    * http://www.regular-expressions.info/tutorial.html
    * https://regex101.com/
  * If you have time also make some CSS for the input fields (modify  css/main.css)

### Task B
1. Open task_b.html in editor
2. Copy/paste the form you made in task A
3. Add novalidate attribute to the form element (disable HTML5 validation)
4. Implement form validation by using JavaScript
  * Validate the same properties as in task A
  * Hints:
    * `const element = document.querySelector()`
    * `const elements = document.querySelectorAll()`
    * `element.addEventListener('submit', functionName)`
    * `element.setAttribute('style', 'cssProperty: value')`
    * `elelment.cssProperty = value`
  * If the form is not valid, stop the submit event with `preventDefault()`
  * Some help
    * https://www.w3schools.com/jsref/jsref_regexp_exec.asp
    * https://www.w3schools.com/jsref/jsref_obj_regexp.asp
    
