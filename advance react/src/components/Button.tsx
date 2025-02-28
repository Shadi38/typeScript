import {type ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
    href?: void;
}
type AnchorProps = ComponentPropsWithoutRef<"a"> & {
    href?: string;
}

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
    return "href" in props;
}

export default function Button(props:ButtonProps | AnchorProps) { 
    if (isAnchorProps(props)) {
        return <a {...props} />;
    }
    return <button {...props} />; 
  
}