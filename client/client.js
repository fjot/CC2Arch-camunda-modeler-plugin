import {registerBpmnJSPlugin, registerBpmnJSModdleExtension} from 'camunda-modeler-plugin-helpers';
import ProleitPropertiesProvider from './ProleitPropertiesProvider';
import ProleitModdleExtension from './descriptor/proleit.json';

registerBpmnJSPlugin(ProleitPropertiesProvider);
registerBpmnJSModdleExtension(ProleitModdleExtension);

