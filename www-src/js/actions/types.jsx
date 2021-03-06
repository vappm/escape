let TYPES = {};

[
  'SET_CONFIG',
  'PAGINATION_SET_PAGE_NUMBER',
  'PAGINATION_INITIALIZE_PAGINATOR',
  'SET_WEB3_CONFIG',
  'SET_WEB3_STATUS',
  'SET_WEB3_SELECTION',
  'SET_WEB3_BROWSER_AVAILABILITY',
  'SET_WEB3',
  'SET_CHAIN_METADATA',
  // index meta
  'SET_EMPTY_INDEX_DATA',
  'SET_PACKAGE_DB_ADDRESS',
  'SET_RELEASE_DB_ADDRESS',
  'SET_NUM_PACKAGES',
  'SET_TOTAL_NUM_RELEASES',
  // package list
  'SET_PACKAGE_NAME',
  // package data
  'SET_PACKAGE_DATA',
  // release list
  'SET_RELEASE_HASH',
  // release data
  'SET_RELEASE_DATA',
  // interactive data
  'SET_INTERACTIVE_PACKAGE_NAME_FORM_INPUT',
  'SET_INTERACTIVE_PACKAGE',
  'SET_INTERACTIVE_LOADING',
  'SET_INTERACTIVE_STATUS',
  'SET_INTERACTIVE_CONTRACT_TYPES',
  'SET_INTERACTIVE_DEPLOYMENTS',
  'SET_INTERACTIVE_DEPLOYED_CONTRACT',
  'SET_INTERACTIVE_INPUT_VALUE',
  'SET_INTERACTIVE_CURRENTLY_PROCESSING_FUNCTION',
  'SET_INTERACTIVE_FUNCTION_RESULT',
  'CLEAR_INTERACTIVE_INPUT_VALUES',
  'CLEAR_INTERACTIVE_FUNCTION_RESULTS',
].forEach(function(key) {
  TYPES[key] = key
})

export default TYPES
