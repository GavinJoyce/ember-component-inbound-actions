let REGISTERED_RECEIVERS = {};

export function registerReceiver(component) {
  let componentName = getComponentRegistryKey(component);
  REGISTERED_RECEIVERS[componentName] = component;
}

export function unregisterReceiver(component) {
  let componentName = getComponentRegistryKey(component);
  delete REGISTERED_RECEIVERS[componentName];
}

export function lookupReceiver(sender, name) {
  let namespace = getTargetRegistryNamespace(sender);
  name = `${namespace}/component:${name}`;

  let receiver = REGISTERED_RECEIVERS[name];

  if(receiver) {
    return receiver;
  } else {
    throw `Couldn't find ${name} receiver`; //TODO: GJ: assert
  }
}

function getComponentRegistryKey(receiver) {
  let componentName = getComponentActionReceiverName(receiver);
  let namespace = getTargetRegistryNamespace(receiver._targetObject);

  componentName = namespace + '/' + componentName;

  return componentName;
}

function getComponentActionReceiverName(receiver) {
  if(receiver.actionReceiverName) {
    return `component:${receiver.actionReceiverName}`;
  } else {
    return getContainerKey(receiver);
  }
}

function getTargetRegistryNamespace(target) {
  let sections = [];

  if(target._targetObject) {
    sections = sections.concat(getTargetRegistryNamespace(target._targetObject));
  }

  sections.push(getContainerKey(target));

  return sections.join('/');
}

function getContainerKey(object) {
  return object._debugContainerKey || Object.getPrototypeOf(object)._debugContainerKey;
}
