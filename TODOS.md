# TODOS

error:{
    code:'',
    name:'',
    correction:''
}

## kusanya Test
- [ ] Create a xlsform template from given form id
- [ ] add questions,settings,meta etc
- [ ] ensure form_id is incryptes before set
- [ ] add custom submission url
- [ ] add encryption key
- [ ] generate public & private key for each form
- [ ] later process encrypted submission & test them & study encrypted forms

## JSONForm
- [x] should be able to read xls from file and buffer
- [ ] should be able to number(row) each questionnaire row
- [x] should be able to parse questionnaire meta
- [ ] should be able to throw error in case of invalid meta
- [ ] should be able to parse questionnaire settings
- [ ] should be able to validate all required settings
- [ ] should be able to validate valid settings
- [ ] should be able to parse `id_string` and `public_key`
- [ ] should ensure form version using sermver
- [ ] should be able to parse question number
- [ ] should be able to parse questions
- [ ] should be able to parse question option list
- [ ] should be able to validate xlsform(columns, datatypes, sheets etc)
- [ ] should not allow two variable to have same name
- [ ] should not allow variable to have spaces
- [ ] should validate question type
- [ ] should filter out meta questions
- [ ] should pick only allowed excel headers as question fields
- [ ] should parse repeat questions and build logics around them
- [ ] should set apperance on the question
- [ ] should parse question question group(even deep group)
- [ ] should throw error including excel(xlsform) row number
- [ ] make use of submission_url to submit form per party and enable hooks
- [ ] cleanup user submission_url(from uploaded xlsform) to avoid data loss
- [ ] how do we add form description on XLSForm
- [ ] add support for encypted forms
- [ ] parse questionnaire instance from XForm


## WebForm
- [ ] allow party to send questionnaire to other party through email
- [ ] should alow party to set custom theme for their questionnaire
- [ ] make use of angular
- [ ] make use of angular-base64 for media inputs
- [ ] create widget per apperance(angular && ionic)
- [ ] create widget per input type(angular && ionic)
- [ ] make use of localstorage/indexdb(localforage)
- [ ] make sure each observation has unique client id
- [ ] restore questionnaire filling based on client id
- [ ] populate questionnaire meta data based on browser
- [ ] find XPath expression evaluator which use context

## Structure
- [ ] settings
    + [ ] title
    + [ ] id
    + [ ] language
    + [ ] version
    + [ ] respondent
    + [ ] submissionUrl
    + [ ] publicKey