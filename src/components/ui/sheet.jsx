import React, { useState, useRef, useEffect } from "react";

export const Sheet = ({ children }) => {
  return <div>{children}</div>;
};

export const SheetTrigger = ({ children, asChild }) => {
  const [open, setOpen] = useState(false);
  const trigger = React.cloneElement(children, {
    onClick: () => setOpen(true),
  });

  return (
    <>
      {trigger}
      {React.Children.map(children.props.children, (child) => {
        if (child.type === SheetContent) {
          return React.cloneElement(child, { open, setOpen });
        }
        return null;
      })}
    </>
  );
};

export const SheetContent = ({ open = false, setOpen, children, side = "right", className = "" }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [setOpen]);

  return (
    <div
      className={`
        fixed top-0 ${side === "right" ? "right-0" : "left-0"} h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
        ${open ? "translate-x-0" : side === "right" ? "translate-x-full" : "-translate-x-full"}
        ${className}
      `}
    >
      <button className="absolute top-4 right-4 text-gray-600" onClick={() => setOpen(false)}>
        ✕
      </button>
      <div className="mt-12 px-4">{children}</div>
    </div>
  );
};
