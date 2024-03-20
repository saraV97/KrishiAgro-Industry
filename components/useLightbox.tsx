import * as React from "react";
import dynamic from "next/dynamic";
import type { LightboxExternalProps } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import {
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";

const Lightbox = dynamic(() => import("@/components/Lightbox"));

export default function useLightbox() {
  const [open, setOpen] = React.useState(false);
  const [interactive, setInteractive] = React.useState(false);

  const openLightbox = React.useCallback(() => {
    setOpen(true);
    setInteractive(true);
  }, []);

  const renderLightbox = React.useCallback(
    (props?: Omit<LightboxExternalProps, "open" | "close">) =>
      interactive ? (
        <Lightbox
          plugins={[Thumbnails, Fullscreen, Zoom]}
          open={open}
          close={() => setOpen(false)}
          {...props}
        />
      ) : null,
    [open, interactive]
  );

  return { openLightbox, renderLightbox };
}
