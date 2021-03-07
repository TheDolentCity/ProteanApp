export function Sidebar({ textColor, backgroundColor, children }) {
  return (
    <div className={"p-4 mt-4 mb-8 rounded-md shadow-md " + textColor + " " + backgroundColor}>
      {children}
    </div>
  );
}

export function SidebarHeader(props) {
  return (
    <h3 className="pb-2">
      {props.children}
    </h3>
  );
}

export function SidebarBody(props) {
  return (
    <div className="">
      {props.children}
    </div>
  );
}

export function SidebarNote(props) {
  return(
    <Sidebar textColor="text-gray-900" backgroundColor="bg-gray-200">
      {props.children}
    </Sidebar>
  );
}

export function SidebarImportant(props) {
  return (
    <Sidebar textColor="text-white" backgroundColor="bg-cyan-600">
      {props.children}
    </Sidebar>
  );
}

export function SidebarTip(props) {
  return (
    <Sidebar textColor="text-white" backgroundColor="bg-magenta-600">
      {props.children}
    </Sidebar>
  );
}

export function SidebarWarning(props) {
  return (
    <Sidebar textColor="text-gray-900" backgroundColor="bg-yellow-600">
      {props.children}
    </Sidebar>
  );
}