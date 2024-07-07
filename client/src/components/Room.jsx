import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function Room() {
  const { roomId } = useParams();
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");

  let myMeeting = async (element) => {
    const appID = 47617053;
    const serverSecret = "65a6cb945a0c0cf1e0e5ce8b77779b72";
    // generate Kit Token
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      username,
      username
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    // start the call
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: "80%", height: "80%", margin: "auto" }}
    ></div>
  );
}

export default Room;
