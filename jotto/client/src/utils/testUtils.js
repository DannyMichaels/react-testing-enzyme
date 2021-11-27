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
