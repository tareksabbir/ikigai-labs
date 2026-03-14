import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { ShieldAlertIcon } from "lucide-react";

const UnaAuthenticatedView = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="w-full max-w-lg bg-muted">
        <Item variant="outline">
          <ItemMedia variant="icon">
            <ShieldAlertIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Not Authenticated</ItemTitle>
            <ItemDescription>
              Please log in to access this feature.
            </ItemDescription>
          </ItemContent>
        </Item>
      </div>
    </div>
  );
};

export default UnaAuthenticatedView;
