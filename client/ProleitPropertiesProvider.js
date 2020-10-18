<<<<<<< HEAD
/* eslint-disable license-header/header */

=======
>>>>>>> 95172327c78d3f607f670da3528f6457a1d3c304
import CamundaPropertiesProvider from 'bpmn-js-properties-panel/lib/provider/camunda/CamundaPropertiesProvider';
import { is } from 'bpmn-js/lib/util/ModelUtil';
import proLeiTEntry from './implementation/proleitEntry';

class ProleitPropertiesProvider {
  constructor(eventBus, canvas, bpmnFactory, elementRegistry, elementTemplates, translate) {
<<<<<<< HEAD

    /**
     *
     * GET all element form Forms tab and set a new group to attach with the actuall Form tab
     *
     * */
    this.proleitGroup = {};
    this.camunda = new CamundaPropertiesProvider(eventBus, canvas, bpmnFactory, elementRegistry, elementTemplates, translate);
  }

  /**
   *
   *  Get current Tabs and add a new custom group
   *
=======
    /** 
     * 
     * GET all element form Forms tab and set a new group to attach with the actuall Form tab 
     * 
     * */
    this.proleitGroup = {}
    this.camunda = new CamundaPropertiesProvider(eventBus, canvas, bpmnFactory, elementRegistry, elementTemplates, translate);
  }
  /**
   * 
   *  Get current Tabs and add a new custom group
   *  
>>>>>>> 95172327c78d3f607f670da3528f6457a1d3c304
   * */
  /**
   * @param {Object} element
   */
  getTabs(element) {
<<<<<<< HEAD
    console.log(this.camunda);
=======
>>>>>>> 95172327c78d3f607f670da3528f6457a1d3c304
    var tabsArray = this.camunda.getTabs(element);
    var formIndex;
    var formsTab = tabsArray.filter((item, index) => {
      if (item.id == 'forms') {
        formIndex = index;
        return true;
      }
    });
    this.createProleitGroups(element);
    if (formsTab.length > 0) {
      var newFormsTabContent = this.setContentGroup(formsTab[0]);
      tabsArray[formIndex] = newFormsTabContent;
    }
<<<<<<< HEAD
    return tabsArray;
  }

  /**
   *
   *  Create a new Group to add into panel
   *
   *
=======
   return  tabsArray;
  };

  /**
   * 
   *  Create a new Group to add into panel
   * 
   *  
>>>>>>> 95172327c78d3f607f670da3528f6457a1d3c304
   * */
  /**
   * @param {Object} element
   */
<<<<<<< HEAD
  createProleitGroups(element) {
=======
  createProleitGroups (element){
>>>>>>> 95172327c78d3f607f670da3528f6457a1d3c304
    this.proleitGroup = {
      id: 'proleit-group',
      label: 'Forms',
      entries: []
    };
    if (is(element, 'bpmn:UserTask')) {
<<<<<<< HEAD

=======
>>>>>>> 95172327c78d3f607f670da3528f6457a1d3c304
      /**
       * @param  {Object} this.proleitGroup
       * @param  {Object} element
       */
      proLeiTEntry(this.proleitGroup, element);
    }
    return [
      this.proleitGroup
    ];
  }
<<<<<<< HEAD

=======
  
>>>>>>> 95172327c78d3f607f670da3528f6457a1d3c304
  /**
   * @param {Object} formsTab
   */
  setContentGroup(formsTab) {
<<<<<<< HEAD
    if (formsTab.groups.length > 0) {

      /**
       *
       * Deleting the rest of the entries and replace the new Proliet group
       *
       *  */
      formsTab.groups.splice(0, 1, this.proleitGroup);

      /**
     *
     * Adding with the current group
     *
     *  */
      // formsTab.groups.push(this.proleitGroup);
    }
    return formsTab;
  }
}

function registerPlugin() {
  console.info('Plugin successfully registered');
}
=======
    if (formsTab.groups.length > 0 ) {
     /**
      * 
      * Deleting the rest of the entries and replace the new Proliet group
      * 
      *  */
    formsTab.groups.splice(0, 1, this.proleitGroup);
       /**
      * 
      * Adding with the current group
      * 
      *  */
    formsTab.groups.push(this.proleitGroup);
    }
    return formsTab;
  };
};

function registerPlugin() {
  console.info('Plugin successfully registered');
};
>>>>>>> 95172327c78d3f607f670da3528f6457a1d3c304

// Use __init__ to make sure an instance will be created
export default {
  __init__: ['POC'],
  propertiesProvider: ['type', ProleitPropertiesProvider],
  POC: ['type', registerPlugin]
};
