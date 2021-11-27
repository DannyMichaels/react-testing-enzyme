import checkPropTypes from 'check-prop-types';
/**
 * @method findByTestAttr
 * @desc Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper
 * @param {string} value - Value of data-test attribute to search
 * @returns {ShallowWrapper} - Enzyme shallow wrapper
 */
export const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test='${value}']`);
};

/**
 * @method checkProps
 * @param {React.Component} component - React component.
 * @desc Assert that expected conforming props conform to propTypes definiton.
 * @param {object} conformingProps - Object of conforming props.
 * @returns {undefined} - Throws error if props do not conform.
 */
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};
