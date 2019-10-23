import React, { Component } from "react";

export default class Ad extends Component {
  componentDidMount() {
    const gwindow: any = window;
    (gwindow.adsbygoogle = gwindow.adsbygoogle || []).push({});
  }

  render() {
    return (
      <div className="ad">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-format="fluid"
          data-ad-layout-key="-fb+5w+4e-db+86"
          data-ad-client="ca-pub-8522455793322408"
          data-ad-slot="8376613461"
        />
      </div>
    );
  }
}
