/* eslint-disable license-header/header */

import cmdHelper from 'bpmn-js-properties-panel/lib/helper/CmdHelper';

// import entryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';
import { getBusinessObject } from 'bpmn-js/lib/util/ModelUtil';
import { MDCTextField } from '@material/textfield';

import fetch from 'node-fetch';

var modelPropertyInput = 'pformKey';
var modelPropertyInputFloat = 'pformNumber';

/** TEXTINPUTFIELD */
var htmlTextField =
  '<div>' +
  '<label for="form_key">Form Key Text Proleit</label>' +
  '<input type="text"' + 'name="' + modelPropertyInput + '"' + 'id="form_key"">' +
  '</div>';

/** NUMERICALINPUT */
var htmlTextFieldNumber =
'<div>' +
'<label for="form_key">Form Key Float Proleit</label>' +
'<input type="text"' + 'name="' + modelPropertyInputFloat + '"' + 'id="form_number"">' +
'</div>';

/** CUSTOMINPUT */
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
    modelPropertyInput: modelPropertyInput,
    get: (element) => {
      var bo = getBusinessObject(element);
      return {
        pformKey: bo.get('proleit:pformKey')
      };
    },
    set: (element, values) => {
      var bo = getBusinessObject(element);
      var pformKey = values;
      return cmdHelper.updateBusinessObject(element, bo, pformKey);
    }
  });

  /**
   *
   *
   *  Custom entries Textfield float
   *
   * */
  group.entries.push({
    id: 'pfloat_id',
    html: htmlTextFieldNumber.trim(),
    modelPropertyInputFloat: modelPropertyInputFloat,
    get: (element) => {
      var bo = getBusinessObject(element);
      return {
        pformNumber: bo.get('proleit:pformNumber')
      };
    },
    set: (element, values) => {
      var bo = getBusinessObject(element);
      var pformNumber = values;
      return cmdHelper.updateBusinessObject(element, bo, pformNumber);
    }
  });


  /**
   *
   *
   *  Custom entries Textfield Customized
   *
   *
   * */

  group.entries.push({
    id: 'ptextmaterial_id',
    html: htmlTextFieldMaterial.trim(),
    modelPropertyInput: modelPropertyInput,
    get: (element) => {
      var bo = getBusinessObject(element);
      // eslint-disable-next-line no-undef
      var textField = new MDCTextField(document.querySelector('.mdc-text-field'));
      textField.foundation.activateFocus();
      return {
        pformKey: bo.get('proleit:pformKey')
      };
    },
    set: (element, values) => {
      var bo = getBusinessObject(element);
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


}
export default proLeiTEntry;


