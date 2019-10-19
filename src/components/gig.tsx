import { IonAvatar, IonButton, IonImg, IonItem, IonLabel } from "@ionic/react";
import React from "react";

const Gig: React.FC = () => (
  <IonItem
    href="https://twitter.com/AssisttohireNow/status/1181196988831977478"
    target="_blank"
  >
    <IonAvatar slot="start">
      <IonImg src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
    </IonAvatar>
    <div>
      <IonLabel className="f-18 m-t-5">
        Mark Essien
        <span slot="end" className="posted">
          2d ago
        </span>
      </IonLabel>
      <p className="dark-gray m-t-5 m-b-5">
        Graduate Jobs: Software Developer or Software Architect needed at
        Jerrilods Technology in Abuja. Send CV to Jobs@jerrilodsnigerialtd.com
      </p>
      <IonButton className="m-b-10">Apply</IonButton>
    </div>
  </IonItem>
);

export default Gig;
