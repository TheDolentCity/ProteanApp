import { Component } from 'react'

// export default class Sidebar extends Component {
//   constructor(props) {
//     super(props);
//     this.props = props;
//     console.log("Constructor - SidebarThis: " + this);
//     console.log("Constructor - SidebarProps: " + this.props);
//   }

//   render() {
//     console.log("Render - SidebarProps: " + this.props);
//     return (
//       <div className={"p-4 mt-4 mb-8 rounded-md shadow-lg " + this.props.textColor + " " + this.props.backgroundColor}>
//         <h3 className="mb-2">
//           {this.props.title}
//         </h3>
//         <div className="">
//           {this.props.children}
//         </div>
//       </div>
//     );
//   }
// }

// export class SidebarNote extends Component {
//   constructor(props) {
//     super(props);
//     console.log("Constructor - SidebarNoteThis: " + this);
//     console.log("Constructor - SidebarNoteProps: " + this.props);
//   }

//   render() {
//     console.log("Render - SidebarNoteProps: " + this.props);
//     return (
//       <Sidebar textColor="text-gray-900 dark:text-white" backgroundColor="bg-gray-200" title={this.props.title}>
//         {this.props.children}
//       </Sidebar>
//     );
//   }
// }

export function Sidebar({ textColor, backgroundColor, children }) {
  return (
    <div className={"p-4 mt-4 mb-8 rounded-md shadow-lg " + textColor + " " + backgroundColor}>
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