import { BASE_PATH } from "@/utils/constants";

export function Video() {
    return (
      <video width="600" height="340" controls preload="none" poster={`${BASE_PATH}/assets/images/thumb-video.jpg`}>
        <source src={`${BASE_PATH}/assets/videos/cobrasis.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
  }