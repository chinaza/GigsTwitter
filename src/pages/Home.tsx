import {
  IonContent,
  IonFooter,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React, { Component } from "react";
import Gig from "../components/gig";
import UiCtrl from "../services/control-board";
import Http from "../services/http";

export default class Home extends Component {
  http = new Http("/api/gigs-twitter");

  state = {
    q: "",
    position: {
      latitude: "",
      longitude: ""
    },
    tweets: []
  };

  getLocation = () =>
    new Promise(async (resolve, reject) => {
      const loading = await UiCtrl.presentLoading();
      if (!navigator.geolocation) return false;

      // Get the user's current position
      navigator.geolocation.getCurrentPosition(
        pos => {
          loading.dismiss();
          this.setState(
            {
              position: {
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude
              }
            },
            () => resolve(pos.coords)
          );
        },
        err => {
          loading.dismiss();
          resolve(false);
        }
      );
    });

  loadData = async () => {
    const { q, position } = this.state;

    const loading = await UiCtrl.presentLoading();
    try {
      const pos = position.latitude
        ? {
            latitude: Number(position.latitude),
            longitude: Number(position.longitude)
          }
        : false;

      const { response } = await this.http.makeRequest({
        url: "/gigs",
        method: "post",
        data: {
          q,
          pos
        }
      });

      this.setState({ tweets: response.data.tweets });
      loading.dismiss();
    } catch (error) {
      UiCtrl.presentAlert(error.message);
      loading.dismiss();
    }
  };

  setQ = (e: any) => {
    this.setState({ q: e.target.value });
  };

  resetQ = () => {
    this.setState({ q: "" }, () => this.loadData());
  };

  search = (e: any) => {
    if (e.key.toLowerCase() === "enter") this.loadData();
  };

  async componentDidMount() {
    await this.getLocation();
    this.loadData();
  }
  render() {
    const { tweets, q } = this.state;
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonSearchbar
              onIonChange={this.setQ}
              onKeyUp={this.search}
              autoCorrect={"on"}
              autocomplete={"on"}
              value={q}
              animated={true}
              placeholder="Role (e.g. Customer Service)"
              style={{ marginTop: 10 }}
            />
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonInfiniteScroll>
            <IonInfiniteScrollContent
              loadingSpinner="bubbles"
              loadingText="Loading more gigs..."
            >
              <IonList>
                <IonListHeader>
                  <IonLabel>TWITTER RECENT GIGS</IonLabel>
                </IonListHeader>
                {tweets.map((t, i) => (
                  <Gig tweet={t} key={i} />
                ))}
              </IonList>
            </IonInfiniteScrollContent>
          </IonInfiniteScroll>
        </IonContent>
        <IonFooter mode="ios">
          <IonToolbar color="default" mode="ios">
            <IonTitle onClick={this.resetQ}>#GigsTwitter</IonTitle>
          </IonToolbar>
        </IonFooter>
      </IonPage>
    );
  }
}
