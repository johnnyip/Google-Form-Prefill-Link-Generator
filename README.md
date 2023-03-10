# Generate Prefilled Link for Google forms

Normally, prefilled url of google form can only be generated by author. 

With this tool, you can paste any google form link, and generate a prefilled url.

[Demonstration URL](https://johnnyip.com/google-form-prefilled/)

# How it works

Open the source code for the Google form page in the browser, there is an array that contains information for all the questions.

![Source code](https://github.com/johnnyip/Google-Form-Prefill-Link-Generator/blob/master/img/Screenshot%202023-01-08%20at%201.40.52%20PM.png?raw=true)

Moreover, there is a question type indicated by a number.

|Number | Type|
|----|----|
|0| Short Question|
|1| Paragraph|
|2| Radio button|
|3| Pull-down|
|4| Checkbox|
|5| Line|
|6| Unknown|
|7| Grid (Both single or multiple selection)|
|8| Section Head|
|9| Date|
|10| Time|

To construct a prefilled url that contains the options, here is the format.

Example: https:// docs.google.com/forms/d/1S...Zo/viewform?&entry.1068212324=Option 1&entry.316611086=01:51

Add query parameters right after the "viewform"

entry.1068212324=Option 1

The value following "entry." is the question id. It will be different for each question.

The value following "=" is the option value. It works when putting the whole string on it, include the space character.


# Limitation

1. Since the Google form page does not include the CORS header (Access-Control-Allow-Origin: *), it cannot be fetch directly in the browser.

I have implemented a proxy to achieve CORS anywhere with this docker image [redocly/cors-anywhere](https://hub.docker.com/r/redocly/cors-anywhere).

2. If the question contains file upload, or it requires login to fill the form, this tool does not work.
