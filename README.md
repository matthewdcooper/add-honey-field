# Add Honey Field

> Vanilla JavaScript function that takes a form id and adds a honey field for detecting spam bots.

All websites that serve html forms will get hit by spam bots. Most of them automatically fill out the forms with garbage or malicious code with the hope that the malicious code will get displayed somewhere on the website. 

One way of mitigating against this is to include a honey pot form field that is not noticed by genuine users and remains blank, but will be filled out by a spam bot. This way the back end has an easy way of filtering out spam bot requests: if the honey pot field is not empty, then the request should be rejected.


