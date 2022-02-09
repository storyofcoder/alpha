import axios from "axios";
import querystring from "querystring";

import config from "../constant/config";

const api = config.API_END_POINT;

class API {
  /**
   * A helper function used to handle request
   * @param {string} method
   * @param {string} api
   * @param {object} params
   * @param {object} config
   */
  static handleRequest(method = "post", url, params = {}, config = {}) {
    return new Promise((resolve, reject) => {
      if (method === "get") url += `?${querystring.stringify(params)}`;
      axios[method](url, params, config)
        .then((response) => resolve(response.data))
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Get NFT list of user
   * @param {object} params
   */
  static getNFTList(params) {
    const url = api + "assets";
    return this.handleRequest("get", url, params);
  }
}

export default API;
