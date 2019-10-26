import { alertController, loadingController } from "@ionic/core";
import { EventEmitter } from "events";

const ev = new EventEmitter();

export default {
  ev,
  announce(channel: string, data: any) {
    this.ev.emit(channel, data);
  },
  async presentAlert(message: string) {
    const alert = await alertController.create({
      header: "Notification",
      message,
      buttons: ["OK"]
    });
    return await alert.present();
  },
  async presentLoading() {
    const loading = await loadingController.create({
      message: ""
    });
    await loading.present();
    return loading;
  }
};
