// type InfoBoxProps = {
//     mode: "hint" | "warning";
//     severity?: "low" | "medium" | "high";// "?" means optional. If not provided in CourseGoalList in line 20, it will be undefined and we can not see any css style for severity.
//     children: React.ReactNode;           //because of above reseon, we define two props in InfoBoxProps.
// }
type InfoBoxHintProps = {
    mode: "hint";
    children: React.ReactNode;
}
type InfoBoxWarningProps = {
    mode: "warning";
    severity: "low" | "medium" | "high";
    children: React.ReactNode;
}
type InfoBoxProps = InfoBoxHintProps | InfoBoxWarningProps;

// export default function InfoBox({children, mode, severity}:InfoBoxProps) {
export default function InfoBox(props:InfoBoxProps) {
const {children, mode} = props;

if(mode==="hint"){
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    )}
const {severity} = props;
    return (
      <aside className={`infobox infobox-warning warning--${severity}`}>
        <h2>Warning</h2>
        <p>{children}</p>
      </aside>

)}