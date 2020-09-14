import cmdHelper from 'bpmn-js-properties-panel/lib/helper/CmdHelper';
import entryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';
import { getBusinessObject } from 'bpmn-js/lib/util/ModelUtil';
import { MDCTextField } from '@material/textfield';


var modelPropertyInput = 'pformKey';
var modelPropertyInputFloat = 'pformNumber';

var htmlAngular =
  '<label>Angular Element</label>' +
  '<p style="font-size:50px; margin: 0">&#128532</p>'

var htmlWebFrame =
  '<label>Web Component</label>' +
  '<br>' +
  '<plantit-web-frame>Hi from SDK Web Frame with out functionality</plantit-web-frame>'

var htmlTextField =
  '<div>' +
  '<label for="form_key">Form Key Text Proleit</label>' +
  '<input type="text"' + 'name="' + modelPropertyInput + '"' + 'id="form_key"">' +
  '</div>'


var htmlTextFieldNumber =
'<div>' +
'<label for="form_key">Form Key Float Proleit</label>' +
'<input type="text"' + 'name="' + modelPropertyInputFloat + '"' + 'id="form_number"">' +
'</div>'

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
    modelPropertyInput: modelPropertyInput,
    get: (element) => {
      var bo = getBusinessObject(element);
      return {
        pformKey: bo.get('proleit:pformKey')
      };
    },
    set: (element, values) => {
      var bo = getBusinessObject(element);
      var pformKey = values
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
    html: htmlTextFieldNumber,
    modelPropertyInputFloat: modelPropertyInputFloat,
    get: (element) => {
      var bo = getBusinessObject(element);
      return {
        pformNumber: bo.get('proleit:pformNumber')
      };
    },
    set: (element, values) => {
      var bo = getBusinessObject(element);
      var pformNumber = values
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
    html: htmlTextFieldMaterial,
    modelPropertyInput: modelPropertyInput,
    get: (element) => {
      var bo = getBusinessObject(element);
      var textField = new MDCTextField(document.querySelector('.mdc-text-field'));
      textField.foundation.activateFocus();
      return {
        pformKey: bo.get('proleit:pformKey')
      };
    },
    set: (element, values) => {
      var bo = getBusinessObject(element);
      var pformKey = values
      return cmdHelper.updateBusinessObject(element, bo, pformKey);
    }
  });
  
  /**
   * 
   * 
   *  Custom entries Web Component  
   * 
   * 
   * */

  group.entries.push({
    id: 'proleit-angular',
    html: htmlWebFrame
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

}
export default proLeiTEntry;


