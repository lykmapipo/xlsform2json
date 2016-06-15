# TODOS

## Code Comments
- [ ] update constants with xform and xlsform specification comments

error:{
    code:'',
    name:'',
    correction:''
}

## kusanya Test / Usage
- [ ] Create questionnaire by providing all required details
    - [ ] name / title - `form_title`
    - [ ] language default to `English` - `default_language`
    - [ ] publicKey - `public_key`
    - [ ] generate form_id md5(party:project:questionnaire) - `form_id`
- [ ] Generate a xlsform template from given questionnaire details 
- [ ] add questions, settings, meta etc
- [ ] ensure form_id is incryptes before set
- [ ] add custom submission url
- [ ] add encryption key
- [ ] generate public & private key for each form
- [ ] later process encrypted submission & test them & study encrypted forms
- [ ] for select_multi questions store value as array
- [ ] for select_single store value as string

## JSONForm
- [x] should be able to read xls from file, base64 and buffer
- [x] should be able to number(row) each questionnaire row
- [x] should be able to parse questionnaire meta
    - [ ] should be able to throw error in case of invalid meta
- [x] should be able to parse questionnaire settings
    - [ ] should be able to validate all required settings
    - [ ] should be able to validate valid settings
    - [ ] should be able to parse `id_string` and `public_key`
    - [ ] should ensure form version using sermver 
- [x] should be able to parse questions
    - [ ] Normalize question types to standard ones
    - [ ] Parse question appearance
    - [ ] should be able to parse question number
        - [ ] remove question number from a label
        - [ ] use row or number on a label to denote question number 
- [x] should be able to parse question option list
    - [x] parse choices
    - [ ] parse choice media if available
    - [ ] group by list_name(label for list name must be underscored)
    - [ ] detect and remove(or throw error) duplicates on options
    - [x] merge options list on the question(list_name must be equal to question variable name)
    - [ ] detect or_other options
    - [ ] try pre coding answers
        - [ ] yes and no
        - [ ] true or false
        - [ ] numbered
        - [ ] rank nominal or categorial 
- [ ] should be able to validate xlsform(columns, datatypes, sheets etc)
- [ ] should be able to validate question(s)
    - [x] should not allow two variable to have same name
    - [x] Ensure question variable name is in snake case otherwise raise error
    - [x] should not allow variable to have spaces(ensure use of snake case)
    - [x] should ensure question has a label
    - [x] should ensure question has a type
    - [x] should ensure question has a name(variable name)
    - [x] valid xlsform question/input type 
- [ ] should support parsing multi language labels
- [x] should filter out meta questions from questions
- [ ] should pick only allowed excel headers as question fields
- [ ] should parse repeat questions and build logics around them
    - [ ] should flag a question as a repeat question
    - [ ] should have a repeat group questions in a collection 
- [ ] should set apperance on the question
- [ ] should parse question question group(even deep group)
- [ ] should throw error including excel(xlsform) row number
- [ ] make use of submission_url to submit form per party and enable hooks
- [ ] cleanup user submission_url(from uploaded xlsform) to avoid data loss
- [ ] how do we add form description on XLSForm?
- [ ] add support for encypted forms
- [ ] parse/prepare questionnaire instance from XForm
- [ ] Convert xpath expressions to JS express or add xpath expression evaluator
- [ ] Detect statistical measure of the question(s)
- [ ] Set valid mongoose/js schema type (map xlsform input type to valid mongodb datatypes)

## Restrictions
- [ ] choice name must be equal to variable names


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
Below is the structure of the JSONForm produced from XLSForm

- [ ] choices(select + multi select choices)
- [ ] meta(questions)
- [x] settings
    + [x] title
    + [x] id
    + [x] language
    + [x] version
    + [x] respondent
    + [x] submissionUrl
    + [x] publicKey
- [ ] structure(meta+normal questions) - used for rendering
- [ ] survey(questions) - used in observation and responses