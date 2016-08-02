export const TestDecorator = (target) => {
  console.log('Decorating…');

  target.prototype.componentWillMount = function() {
    console.log('Component will mount');
  };
};
