"use client";
import React from "react";
import { toast } from "react-toastify";
import { INotification } from "@/models/Notification";
import cl from "./customToast.module.scss";

const CustomToast = (notification: INotification, onClose: () => void) => {
  const { closeTime, color, bgColor, _id } = notification;

  return toast(
    ({ closeToast }) => (
      <div className={cl.wrapper} style={{ background: notification.color }}>
        {parseContent(notification, onClose)}
        <CloseButtonComponent
          className={cl.closeBtn}
          color={color}
          id={_id}
          onClick={() => {
            closeToast && closeToast();
            onClose();
          }}
        />
      </div>
    ),
    {
      toastId: _id.toString(),
      autoClose: closeTime ? closeTime * 1000 : false,
      style: { background: bgColor, color },
      className: cl.customToast,
      closeOnClick: false,
      draggable: false,
    }
  );
};

const parseContent = (notification: INotification, onLinkClick: () => void) => {
  return notification.content.map((contentItem) => {
    return (
      <p key={contentItem._id} style={{ background: "transparent" }}>
        {contentItem.children.map((childrenItem, index) => {
          if (childrenItem.url) {
            return (
              <a
                href={childrenItem.url}
                key={index}
                target={`${childrenItem.newTab ? "_blank" : "_self"}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onLinkClick();
                }}
              >
                <span
                  style={{
                    position: "relative",
                    background: notification.color,
                    // background: "transparent" ,
                  }}
                >
                  {childrenItem.children[0].text}
                  <span
                    className={cl.underline}
                    style={{
                      background: notification.color,
                      // background: "transparent" ,
                    }}
                  ></span>
                </span>
              </a>
            );
          } else {
            return <>{childrenItem.text}</>;
          }
        })}
      </p>
    );
  });
};
export { CustomToast };

const CloseButtonComponent = ({
  className,
  color,
  id,
  onClick,
}: {
  className: string;
  color: string;
  id: string;
  onClick?: () => void;
}) => {
  const colorRegex = /#[0-9A-Fa-f]{6}|#[0-9A-Fa-f]{3}/g;
  const colorHashes = color.match(colorRegex);

  const offsetRegex = /(\d+(\.\d+)?)%/g;
  const offsetValues = color.match(offsetRegex);

  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <defs>
        <linearGradient
          id={`gradient${id}`}
          x1="0%"
          y1="100%"
          x2="100%"
          y2="0%"
        >
          {colorHashes?.map((colorHash, index) => (
            <stop
              key={index}
              offset={offsetValues![index]}
              stopColor={colorHash}
            />
          ))}
        </linearGradient>
      </defs>
      <path
        fill={`url(#gradient${id})`}
        id="Vector"
        d="M0.495132 0.500962C0.820551 0.175543 1.33127 0.148212 1.68761 0.419355L1.78074 0.500663L7.99547 6.71334L14.2117 0.497106C14.5667 0.142118 15.1423 0.142118 15.4973 0.497106C15.8227 0.822526 15.8498 1.33332 15.5787 1.6896L15.4973 1.78267L9.28104 7.99891L15.4956 14.21C15.8506 14.5649 15.8509 15.1406 15.4959 15.4956C15.1705 15.821 14.6598 15.8483 14.3034 15.5772L14.2102 15.4958L7.99547 9.28447L1.78276 15.4972C1.42775 15.8522 0.852177 15.8522 0.497189 15.4972C0.171769 15.1718 0.144643 14.661 0.415795 14.3047L0.497189 14.2116L6.70991 7.9989L0.495432 1.78649C0.140349 1.43158 0.140143 0.855951 0.495132 0.500962Z"
      />
    </svg>
  );
};
