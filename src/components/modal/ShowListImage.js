import React from "react";
import { ButtonTheme } from "../buttons";
import { Card, Image, Modal } from "antd";
import { useState, useEffect } from "preact/hooks";
import { ContainerButton } from "../../style/styledComponentGlobal";
import style from "./style.css";

export const ShowListImage = ({ title, visible, data, onClose }) => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const defaultValue = data.defaultValue;
    if (defaultValue.length > 0) {
      setImageList(defaultValue);
    }
  }, [data]);

  const renderImage = () => {
    const image =
      imageList &&
      imageList.map((val) => {
        return (
          <Card
            className={style.card}
            key={`card_${val.name}`}
            cover={<Image key={val} width={250} src={val} />}
          />
        );
      });
    return image;
  };

  return (
    <Modal
      className="modal-image-list"
      title={title || "modal"}
      visible={visible}
      maskClosable={false}
      onCancel={onClose}
      footer={null}
      destroyOnClose={true}
      width={1500}
    >
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Image.PreviewGroup>{renderImage()}</Image.PreviewGroup>
      </div>
      <ContainerButton right>
        <ButtonTheme useFor="CANCEL" onClick={onClose} />
        {/* <ButtonTheme useFor="SUBMIT" htmlType="submit" /> */}
      </ContainerButton>
    </Modal>
  );
};
