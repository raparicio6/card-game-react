import Immutable from 'seamless-immutable';

/**
 * Receives an array of strings, and returns an obj with that strings as properties with that string as value.
 * E.G:
 * stringArrayToObject(['A', 'B', 'C']) // { A: 'A', B: 'B', C: 'C' }
 * @param {array} actionsArray array of values
 * @param {string} namespace prefix for the resulting values
 * @returns {object} (['A', 'B', 'C', 'name']) -> { A: '@name/A', B: '@name/B', C: '@name/C' }
 */
export function stringArrayToObject(actionsArray, namespace = '') {
  if (actionsArray.some(actionName => !actionName || typeof actionName !== 'string')) {
    throw new Error('Action names must be strings and must not be empty');
  }

  return new Immutable(actionsArray).asObject(actionName => [actionName, `${namespace}:${actionName}`]);
}
