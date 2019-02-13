import icon from '../assets/tab.png';

export default {
  type: 'tab',
  description: 'container tab',
  group: 'container', /* line|shape|textAndMedia|chartAndGauge|table|container|dataSource|IoT|3D|warehouse|form|etc */
  icon,
  model: {
    type: 'tab',
    left: 100,
    top: 100,
    width: 100,
    height: 400,
    lineWidth: 5,
    fillStyle: 'navy',
    activeFillStyle: 'red',
    strokeStyle: 'white',
    fontColor: 'white'
  }
}
