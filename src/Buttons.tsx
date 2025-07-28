import React from "react";

export type ButtonInfoPair = [title: string, url: string];

type ButtonInfoPairProps = {
  infos: ButtonInfoPair[];
};

const Buttons: React.FC<ButtonInfoPairProps> = ({ infos }) => {
  return (
    <div className="d-flex flex-wrap gap-2 justify-content-center">
      {infos.map(([title, url]) => (
        <a href={url} className="action-btn" target="_blank" rel="noopener noreferrer">{title}</a>
      ))}
    </div>
  );
};

export default Buttons;