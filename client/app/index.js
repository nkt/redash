import React from "react";
import ReactDOM from "react-dom";

import "@/config";

import ConfigProvider from "antd/lib/config-provider";
import en_GB from "antd/lib/locale-provider/en_GB";
import moment from "moment";
import "moment/locale/en-gb";

import ApplicationArea from "@/components/ApplicationArea";
import offlineListener from "@/services/offline-listener";

moment.locale("en-gb");

ReactDOM.render(
  <ConfigProvider locale={en_GB}>
    <ApplicationArea />
  </ConfigProvider>,
  document.getElementById("application-root"),
  () => {
    offlineListener.init();
  }
);
