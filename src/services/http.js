import axios from "axios";

class Http {
  constructor(baseURL, headers) {
    this.http = axios.create({
      baseURL,
      headers
    });
  }

  async makeRequest({ url, data = {}, method = "get", headers = {} }) {
    try {
      const reqParams = { [method === "get" ? "params" : "data"]: data };

      const result = await this.http.request({
        url,
        method,
        headers,
        ...reqParams
      });

      return { response: result.data, status: result.status };
    } catch (error) {
      if (error.response) {
        // Response from server w/ error
        throw new Error(
          error.response.data
            ? error.response.data.message
            : error.response.data
        );
      } else {
        throw new Error(
          error.message || "A network/ timeout error has occured."
        );
      }
    }
  }
}

export default Http;
