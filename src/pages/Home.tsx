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

export default class Home extends Component {
  loadData = () => {};
  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonSearchbar />
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonInfiniteScroll threshold="100px" onIonInfinite={this.loadData}>
            <IonInfiniteScrollContent
              loadingSpinner="bubbles"
              loadingText="Loading more gigs..."
            >
              <IonList>
                <IonListHeader>
                  <IonLabel>TWITTER RECENT GIGS</IonLabel>
                </IonListHeader>
                <Gig />
                <Gig />
                <Gig />
                <Gig />
                <Gig />
              </IonList>
            </IonInfiniteScrollContent>
          </IonInfiniteScroll>
        </IonContent>
        <IonFooter mode="ios">
          <IonToolbar color="default" mode="ios">
            <IonTitle>#GigsTwitter</IonTitle>
          </IonToolbar>
        </IonFooter>
      </IonPage>
    );
  }
}
