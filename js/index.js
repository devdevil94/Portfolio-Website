import Highway from "@dogstudio/highway";
import PageTransition from "./transitions";

const H = new Highway.Core({
  transitions: {
    default: PageTransition
  }
});
