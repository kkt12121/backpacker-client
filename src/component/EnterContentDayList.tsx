import { ReactElement } from "react";
import EnterContentDayListItem from "./EnterContentDayListItem";
interface Props {
  setindex?: any;
  setitemorder?: any;
}

export default function EnterContentDayList({
  setindex,
  setitemorder,
}: Props): ReactElement {
  return (
    <>
      <EnterContentDayListItem
        setindex={setindex}
        setitemorder={setitemorder}
      />
    </>
  );
}
