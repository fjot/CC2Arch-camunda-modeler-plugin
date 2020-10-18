<<<<<<< HEAD
/* eslint-disable license-header/header */

import cmdHelper from 'bpmn-js-properties-panel/lib/helper/CmdHelper';

// import entryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';
import { getBusinessObject } from 'bpmn-js/lib/util/ModelUtil';
import { MDCTextField } from '@material/textfield';

import fetch from 'node-fetch';
=======
import cmdHelper from 'bpmn-js-properties-panel/lib/helper/CmdHelper';
import entryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';
import { getBusinessObject } from 'bpmn-js/lib/util/ModelUtil';
import { MDCTextField } from '@material/textfield';

>>>>>>> 95172327c78d3f607f670da3528f6457a1d3c304

var modelPropertyInput = 'pformKey';
var modelPropertyInputFloat = 'pformNumber';

<<<<<<< HEAD
/** TEXTINPUTFIELD */
=======
var htmlAngular =
  '<label>Angular Element</label>' +
  '<p style="font-size:50px; margin: 0">&#128532</p>'

>>>>>>> 95172327c78d3f607f670da3528f6457a1d3c304
var htmlTextField =
  '<div>' +
  '<label for="form_key">Form Key Text Proleit</label>' +
  '<input type="text"' + 'name="' + modelPropertyInput + '"' + 'id="form_key"">' +
<<<<<<< HEAD
  '</div>';

/** NUMERICALINPUT */
=======
  '</div>'


>>>>>>> 95172327c78d3f607f670da3528f6457a1d3c304
var htmlTextFieldNumber =
'<div>' +
'<label for="form_key">Form Key Float Proleit</label>' +
'<input type="text"' + 'name="' + modelPropertyInputFloat + '"' + 'id="form_number"">' +
<<<<<<< HEAD
'</div>';

/** CUSTOMINPUT */
=======
'</div>'

>>>>>>> 95172327c78d3f607f670da3528f6457a1d3c304
var htmlTextFieldMaterial =
  '<label class="mdc-text-field mdc-text-field--outlined">' +
  '<input type="text"' + 'name="' + modelPropertyInput + '"' + 'class="mdc-text-field__input" aria-labelledby="my-label-id">' +
  '<span class="mdc-notched-outline">' +
  '<span class="mdc-notched-outline__leading"></span>' +
  '<span class="mdc-notched-outline__notch">' +
  '<span class="mdc-floating-label" id="my-label-id">Form Key customized</span>' +
  '</span>' +
  '<span class="mdc-notched-outline__trailing"></span>' +
  '</span>' +
<<<<<<< HEAD
  '</label>';

/** HHTP CALL */
var htmlHTTP =
  '<div>' +
  '<button style="position:relative; width: 100%" data-action="getValues">Get Values</button>' +
  '</div>';

function proLeiTEntry(group, element) {

  /**
   *
   *
   * Factory entries - Camunada Component
   *
   *
   * */
  // group.entries.push(entryFactory.textField({
  //   id: 'form-key',
  //   label: 'Form Key from Camunda',
  //   modelProperty: 'FormKey',
  //   get: function(element) {
  //     var bo = getBusinessObject(element);
  //     return {
  //       FormKey: bo.get('proleit:pformKey')
  //     };
  //   },
  //   set: function(element, values) {
  //     var bo = getBusinessObject(element), commands = [];
  //     var FormKey = values.FormKey || undefined;
  //     commands.push(cmdHelper.updateBusinessObject(element, bo, { 'proleit:pformKey': FormKey }));
  //     console.log(commands);
  //     return commands;
  //   }
  // }));

  /**
   *
   *
   *  Custom entries Textfield text
   *
   * */
  group.entries.push({
    id: 'ptext_id',
    html: htmlTextField.trim(),
=======
  '</label>'

var htmlDropdown =
  '<label for="">Select a Form customized</label>' +
  '<select id="dropdownlist">' +
  '<option>Form 1</option>' +
  '<option>Form 2</option>' +
  '<option>Form 3</option>' +
  '</select>'

function proLeiTEntry(group, element) {

  /** 
   * 
   * 
   * Factory entries - Camunada Component 
   * 
   * 
   * */
  group.entries.push(entryFactory.textField({
    id: 'form-key',
    label: 'Form Key from Camunda',
    modelProperty: 'FormKey',
    get: function (element) {
      var bo = getBusinessObject(element);
      return {
        FormKey: bo.get('proleit:pformKey')
      };
    },
    set: function (element, values) {
      var bo = getBusinessObject(element), commands = [];
      var FormKey = values.FormKey || undefined;
      commands.push(cmdHelper.updateBusinessObject(element, bo, { 'proleit:pformKey': FormKey }));
      console.log(commands)
      return commands
    }
  }));

  /**
   * 
   * 
   * Custom entries - Title 
   * 
   * 
  */
  group.entries.push({
    id: 'proleit-subtitle',
    html: '<div style="font-size: 20px; color: #666"; font-weight: bold>Welcome to ProLeiT Editor</div>'
  });


  /**
   * 
   * 
   *  Custom entries Textfield text
   *  
   * */
  group.entries.push({
    id: 'ptext_id',
    html: htmlTextField,
>>>>>>> 95172327c78d3f607f670da3528f6457a1d3c304
    modelPropertyInput: modelPropertyInput,
    get: (element) => {
      var bo = getBusinessObject(element);
      return {
        pformKey: bo.get('proleit:pformKey')
      };
    },
    set: (element, values) => {
      var bo = getBusinessObject(element);
<<<<<<< HEAD
      var pformKey = values;
=======
      var pformKey = values
>>>>>>> 95172327c78d3f607f670da3528f6457a1d3c304
      return cmdHelper.updateBusinessObject(element, bo, pformKey);
    }
  });

<<<<<<< HEAD
  /**
   *
   *
   *  Custom entries Textfield float
   *
   * */
  group.entries.push({
    id: 'pfloat_id',
    html: htmlTextFieldNumber.trim(),
=======
    /**
   * 
   * 
   *  Custom entries Textfield float
   *  
   * */
  group.entries.push({
    id: 'pfloat_id',
    html: htmlTextFieldNumber,
>>>>>>> 95172327c78d3f607f670da3528f6457a1d3c304
    modelPropertyInputFloat: modelPropertyInputFloat,
    get: (element) => {
      var bo = getBusinessObject(element);
      return {
        pformNumber: bo.get('proleit:pformNumber')
      };
    },
    set: (element, values) => {
      var bo = getBusinessObject(element);
<<<<<<< HEAD
      var pformNumber = values;
=======
      var pformNumber = values
>>>>>>> 95172327c78d3f607f670da3528f6457a1d3c304
      return cmdHelper.updateBusinessObject(element, bo, pformNumber);
    }
  });

<<<<<<< HEAD

  /**
   *
   *
   *  Custom entries Textfield Customized
   *
   *
=======
  /**
   * 
   * 
   *  Custom entries Textfield Customized 
   * 
   * 
>>>>>>> 95172327c78d3f607f670da3528f6457a1d3c304
   * */

  group.entries.push({
    id: 'ptextmaterial_id',
<<<<<<< HEAD
    html: htmlTextFieldMaterial.trim(),
    modelPropertyInput: modelPropertyInput,
    get: (element) => {
      var bo = getBusinessObject(element);
      // eslint-disable-next-line no-undef
=======
    html: htmlTextFieldMaterial,
    modelPropertyInput: modelPropertyInput,
    get: (element) => {
      var bo = getBusinessObject(element);
>>>>>>> 95172327c78d3f607f670da3528f6457a1d3c304
      var textField = new MDCTextField(document.querySelector('.mdc-text-field'));
      textField.foundation.activateFocus();
      return {
        pformKey: bo.get('proleit:pformKey')
      };
    },
    set: (element, values) => {
      var bo = getBusinessObject(element);
<<<<<<< HEAD
      var pformKey = values;
      return cmdHelper.updateBusinessObject(element, bo, pformKey);
    }
  });


  /**
   *
   *
   *
   * HTTP calls
   *
   *
   */
  group.entries.push({
    id: 'restcall_id',
    html: htmlHTTP.trim(),
    getValues: () => {
      let call = fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then(response => response.json())
        .then(data => console.log(data));
      return {
        call
      };
    }
  });


=======
      var pformKey = values
      return cmdHelper.updateBusinessObject(element, bo, pformKey);
    }
  });
  

  /**
   * 
   * 
   *  Custom entries Angular Element
   * 
   * 
   * */

  group.entries.push({
    id: 'proleit-angular',
    html: htmlAngular
  });

>>>>>>> 95172327c78d3f607f670da3528f6457a1d3c304
}
export default proLeiTEntry;


