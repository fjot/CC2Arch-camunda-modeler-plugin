## Camunda Modeler Plugin POC

To evaluate the functionality and possibility of adding our own sdk. A proof of concept has been implemented.

## Register a Plugin

To register a new plugin on camunda modeler is considered as a basis the official documentation. Please see https://github.com/camunda/camunda-modeler-plugin-helpers

## Properties panel understanding

The following diagram explains the essential composition of the camunda properties panel to add new tabs or add new UI.

![Image of properties panels](https://cc2archi.blob.core.windows.net/images/ppdiagram.jpg)

To get all properties of camunda we can create a new intance of Camunda and apply getTabs. An Array with all object that contain will show us the tab Form and inside it. The entries are all UI elements from camunda.


## Form entry customize

![Image of custom form](https://cc2archi.blob.core.windows.net/images/ppdiagram_1.png)

To create a custom UI it is required to create a new group. 

``` 
proleitGroup = {
 id: 'proleit-group',
 label: 'Proleit Forms',
 entries: []
} 
```

For more information plis contact me francisco.ortuzar@proleit.com


