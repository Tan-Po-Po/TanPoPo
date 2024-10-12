import { ILibraryItem } from "@/models/LibraryItem";

interface Props extends ILibraryItem {
  isNew: boolean;
  isHovered?: boolean;
  isPreview?: boolean;
}
