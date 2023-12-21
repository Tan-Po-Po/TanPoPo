"use client";
import { Dialog } from "@/components";
import React, { useState } from "react";

const ModalDialog = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      Dialog
    </Dialog>
  );
};

export default ModalDialog;
