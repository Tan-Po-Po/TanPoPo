"use client";
import { useAppDispatch } from "@/redux/hooks";
import { setWindowMatchMedia } from "@/redux/slices/windowMatchMedia/windowMatchMedia";
import { useEffect, useState } from "react";

export const WindowMatchMediaProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    const screenMobile = window.matchMedia("(max-width: 767px)");
    const screenTablet = window.matchMedia(
      "(max-width:1023px) and (min-width: 768px)"
    );
    const screenPc = window.matchMedia("(min-width: 1024px)");

    screenMobile.matches &&
      dispatch(
        setWindowMatchMedia({
          isMobile: true,
          isTablet: false,
          isPc: false,
        })
      );
    screenTablet.matches &&
      dispatch(
        setWindowMatchMedia({
          isMobile: false,
          isTablet: true,
          isPc: false,
        })
      );

    screenMobile.onchange = (e) => {
      if (e.matches) {
        dispatch(
          setWindowMatchMedia({
            isMobile: true,
            isTablet: false,
            isPc: false,
          })
        );
      }
    };
    screenTablet.onchange = (e) => {
      if (e.matches) {
        dispatch(
          setWindowMatchMedia({
            isTablet: true,
            isMobile: false,
            isPc: false,
          })
        );
      }
    };
    screenPc.onchange = (e) => {
      if (e.matches) {
        dispatch(
          setWindowMatchMedia({
            isPc: true,
            isMobile: false,
            isTablet: false,
          })
        );
      }
    };
  }, [dispatch]);

  return <>{children}</>;
};
