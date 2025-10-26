interface MarkerProps {
  activeSrc: string;
  activeMarkerLeft: null | number;
}

export default function Marker({ activeSrc, activeMarkerLeft }: MarkerProps) {
  return (
    <div className="flex w-8/9 m-auto relative">
      <img
        className="cursor-pointer absolute top-[-40px]"
        style={{ left: `${activeMarkerLeft}px`,transition:"left 0.5s" }}
        src={activeSrc}
        alt="player marker"
      />
    </div>
  );
}
