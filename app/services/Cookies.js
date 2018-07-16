import cookie from 'js-cookie';

class Cookies {
  /**
   *
   * @param key
   * @param value
   * @returns {Cookies}
   */
  set(key, value) {
    cookie.set(key, value);
    return this;
  }

  /**
   *
   * @param {string} key
   * @returns {string}
   */
  get(key) {
    return cookie.get(key);
  }

  /**
   *
   * @param key
   * @returns {*}
   */
  getJson(key) {
    return cookie.getJSON(key);
  }
}

export default Cookies;
