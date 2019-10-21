import { IonAvatar, IonButton, IonImg, IonItem, IonLabel } from "@ionic/react";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds
} from "date-fns";
import React from "react";

const Gig: React.FC<{ tweet: any }> = ({ tweet }) => {
  const diffDay =
    differenceInDays(new Date(), new Date(tweet.created_at)) + "d";
  const diffHour =
    differenceInHours(new Date(), new Date(tweet.created_at)) + "h";
  const diffMin =
    differenceInMinutes(new Date(), new Date(tweet.created_at)) + "m";
  const diffSec =
    differenceInSeconds(new Date(), new Date(tweet.created_at)) + "s";

  const timeDiff = parseInt(diffDay)
    ? diffDay
    : parseInt(diffHour)
    ? diffHour
    : parseInt(diffMin)
    ? diffMin
    : diffSec;

  return (
    <IonItem
      href={`https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`}
      target="_blank"
    >
      <IonAvatar slot="start">
        <IonImg src={tweet.user.profile_image_url} />
      </IonAvatar>
      <div>
        <IonLabel className="f-18 m-t-5">
          {tweet.user.name}
          <span slot="end" className="posted">
            {timeDiff} ago
          </span>
        </IonLabel>
        <p className="dark-gray m-t-5 m-b-5">{tweet.text}</p>
        {tweet.entities.urls.length > 0 && (
          <IonButton
            className="m-b-10"
            href={tweet.entities.urls[0].url}
            target="_blank"
          >
            Apply
          </IonButton>
        )}
      </div>
    </IonItem>
  );
};

export default Gig;
