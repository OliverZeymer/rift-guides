import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";
export default function AbilityTooltip({ children, name, description, championName }) {
  const descriptionWithHighlightedChampionName = description?.replace(new RegExp(championName, "gi"), "<span class='font-extrabold'>$&</span>");
  return (
    <Tooltip
      arrow
      interactive
      animation="shift"
      title={
        "<div class='p-3 bg-bg box-content border-2 border-white/50 rounded'>" +
        "<span class='text-xl font-semibold gradient_text'>" +
        name +
        "</span>" +
        "<br />" +
        "<p class='mt-2 !text-base'>" +
        descriptionWithHighlightedChampionName +
        "</p>" +
        "</div>"
      }
      position="bottom">
      {children}
    </Tooltip>
  );
}
