import config from "../config.json";

/**
 * Contains a suite of utility functions
 */

/**
 *
 * @param id The feature toggle id found in config.json
 * @returns a boolean denoting whether the feature is toggled on
 */
export function isFeatureToggled(id: string): boolean {
  const toggles: { [index: string]: any } = config.feature_toggles;

  if (!(id in toggles)) {
    const errorMsg = `Feature toggle ID "${id}" not found in config.`;
    console.error(errorMsg);
    throw new Error(errorMsg);
  }

  return toggles[id];
}
