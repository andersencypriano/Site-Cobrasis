export function Video() {
    return (
      <video width="600" height="340" controls preload="none">
        <source src="/assets/videos/cobrasis.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
  }