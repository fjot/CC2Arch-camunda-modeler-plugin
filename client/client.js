<<<<<<< HEAD
/* eslint-disable license-header/header */

import { registerBpmnJSPlugin, registerBpmnJSModdleExtension } from 'camunda-modeler-plugin-helpers';
=======
import {registerBpmnJSPlugin, registerBpmnJSModdleExtension} from 'camunda-modeler-plugin-helpers';
>>>>>>> 95172327c78d3f607f670da3528f6457a1d3c304
import ProleitPropertiesProvider from './ProleitPropertiesProvider';
import ProleitModdleExtension from './descriptor/proleit.json';

registerBpmnJSPlugin(ProleitPropertiesProvider);
registerBpmnJSModdleExtension(ProleitModdleExtension);

