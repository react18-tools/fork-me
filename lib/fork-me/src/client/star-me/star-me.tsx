// skipcq: JS-C1003 - This is intentional
import * as React from "react";

interface StarMeProps extends React.HTMLAttributes<HTMLButtonElement> {
  gitHubUrl: string;
}

/**
 * # StarMe
 * Star repo in a popup window
 *
 */
export function StarMe({ gitHubUrl, onClick, children, ...props }: StarMeProps) {
  const starMe = React.useCallback(
    () => (e: React.MouseEvent<HTMLButtonElement>) => {
      window.open(gitHubUrl, "_blank", "height: 400,width:1200,left:150,top:150");
      onClick?.(e);
    },
    [gitHubUrl, onClick],
  );
  return (
    <button data-testid="star-me" onClick={starMe} type="button" {...props}>
      {children ?? "Star Me"}
    </button>
  );
}
